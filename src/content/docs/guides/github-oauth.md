---
title: GitHub OAuth Setup
description: Configure and use GitHub OAuth authentication in llms.py
---

This guide explains how to configure and use GitHub OAuth authentication in llms.py to secure your web UI and API endpoints.

## Overview

The llms.py application supports GitHub OAuth 2.0 authentication, allowing users to sign in with their GitHub account before accessing the application.

## Features

- ✅ GitHub OAuth 2.0 integration
- ✅ Secure session management
- ✅ CSRF protection with state tokens
- ✅ User profile display with avatar
- ✅ Logout functionality
- ✅ Configurable authentication type
- ✅ Environment variable support for credentials
- ✅ Optional user access restrictions

## Setup Instructions

### 1. Create a GitHub OAuth App

1. Go to [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in the application details:
   - **Application name**: `llms.py` (or your preferred name)
   - **Homepage URL**: `http://localhost:8080`
   - **Authorization callback URL**: `http://localhost:8080/auth/github/callback`
4. Click **"Register application"**
5. Note down your **Client ID**
6. Click **"Generate a new client secret"** and note down the **Client Secret**

### 2. Configure Environment Variables

Set the following environment variables with your GitHub OAuth credentials:

```bash
export GITHUB_CLIENT_ID="your_github_client_id_here"
export GITHUB_CLIENT_SECRET="your_github_client_secret_here"
```

#### Optional: Restrict Access to Specific Users

To restrict access to specific GitHub users, set a comma or space-separated list:

```bash
export GITHUB_USERS="octocat mythz"
```

If this variable is set, only the listed users will be able to access llms.py after authentication.

#### Make Permanent

For permanent configuration, add these to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
# GitHub OAuth Configuration
export GITHUB_CLIENT_ID="your_github_client_id_here"
export GITHUB_CLIENT_SECRET="your_github_client_secret_here"
export GITHUB_USERS="octocat mythz"
```

Then reload your shell:
```bash
source ~/.bashrc  # or ~/.zshrc
```

### 3. Configuration in llms.json

Enable the OAuth configuration in `~/.llms/llms.json`:

```json
{
    "auth": {
        "enabled": true,
        "github": {
            "client_id": "$GITHUB_CLIENT_ID",
            "client_secret": "$GITHUB_CLIENT_SECRET",
            "redirect_uri": "http://localhost:8080/auth/github/callback"
        }
    }
}
```

**Note**: The `$` prefix indicates environment variables. The values will be automatically expanded at runtime.

## Usage

### Starting the Server

```bash
llms --serve 8000
```

Or if running from the repository:

```bash
./llms.sh --serve 8000
```

### Signing In

1. Navigate to `http://localhost:8080`
2. Click **"Sign in with GitHub"**
3. Authorize the application on GitHub
4. You'll be redirected back to the application, now authenticated

### Signing Out

1. Click on your avatar in the top-right corner
2. A dropdown menu will appear showing your profile info
3. Click **"Sign Out"**

### Disabling Authentication

To disable authentication, update `llms.json`:

```json
{
    "auth": {
        "enabled": false,
        "github": {
            "client_id": "$GITHUB_CLIENT_ID",
            "client_secret": "$GITHUB_CLIENT_SECRET",
            "redirect_uri": "http://localhost:8080/auth/github/callback"
        }
    }
}
```

## Architecture

### Server-Side (Python)

**New Endpoints:**
- `GET /auth/github` - Initiates GitHub OAuth flow
- `GET /auth/github/callback` - Handles OAuth callback
- `GET /auth/session` - Validates session token
- `POST /auth/logout` - Ends user session

**Session Management:**
- Sessions stored in-memory (`g_sessions` dictionary)
- Session tokens are 32-byte URL-safe random strings
- Sessions expire after 24 hours
- CSRF protection using state tokens (expire after 10 minutes)

### Client-Side (JavaScript)

**New Components:**
- `OAuthSignIn.mjs` - OAuth sign-in UI component
- Updated `Avatar.mjs` - Profile display with logout dropdown
- Updated `ai.mjs` - OAuth methods and session handling
- Updated `Main.mjs` - Conditional sign-in component rendering

**Authentication Flow:**
1. User clicks "Sign in with GitHub"
2. Redirected to `/auth/github`
3. Server redirects to GitHub OAuth authorization
4. User authorizes on GitHub
5. GitHub redirects to `/auth/github/callback` with code
6. Server exchanges code for access token
7. Server fetches user info from GitHub API
8. Server creates session and redirects to `/?session=TOKEN`
9. Client validates session and stores user info
10. User is authenticated

## Security Considerations

### CSRF Protection
- State tokens are generated for each OAuth flow
- State tokens are validated on callback
- Expired state tokens (>10 minutes) are automatically cleaned up

### Session Security
- Session tokens are cryptographically random (32 bytes)
- Sessions expire after 24 hours
- Expired sessions are automatically cleaned up
- Session tokens are transmitted via URL parameter (initial) and HTTP header (subsequent requests)

### Environment Variables
- OAuth credentials are stored in environment variables
- Never commit credentials to version control
- Use `$VAR_NAME` syntax in config files for automatic expansion

## Production Deployment

For production deployment, update the following:

1. **Change redirect_uri** in `llms.json`:
   ```json
   {
       "auth": {
           "github": {
               "redirect_uri": "https://yourdomain.com/auth/github/callback"
           }
       }
   }
   ```

2. **Update GitHub OAuth App** callback URL to match your production domain

3. **Use HTTPS** for secure token transmission

4. **Consider persistent session storage** (Redis, database) instead of in-memory storage

5. **Set appropriate session expiration** based on your security requirements

### Using Docker

Pass environment variables to Docker:

```bash
docker run -p 8000:8000 \
  -e GITHUB_CLIENT_ID="your_client_id" \
  -e GITHUB_CLIENT_SECRET="your_client_secret" \
  -e GITHUB_USERS="username1,username2" \
  -e GROQ_API_KEY="your_groq_key" \
  ghcr.io/servicestack/llms:latest
```

### Using Docker Compose

Create `.env` file:

```bash
# .env
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
GITHUB_USERS=username1,username2
GROQ_API_KEY=your_groq_key
```

Update `docker-compose.yml`:

```yaml
version: '3.8'

services:
  llms:
    image: ghcr.io/servicestack/llms:latest
    ports:
      - "8000:8000"
    environment:
      - GITHUB_CLIENT_ID=${GITHUB_CLIENT_ID}
      - GITHUB_CLIENT_SECRET=${GITHUB_CLIENT_SECRET}
      - GITHUB_USERS=${GITHUB_USERS}
      - GROQ_API_KEY=${GROQ_API_KEY}
    volumes:
      - llms-data:/home/llms/.llms
    restart: unless-stopped

volumes:
  llms-data:
```

Start:
```bash
docker-compose up -d
```

## Troubleshooting

### "GitHub OAuth not configured" error
- Ensure `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` environment variables are set
- Restart the server after setting environment variables

### "Invalid state parameter" error
- This can happen if the OAuth flow takes longer than 10 minutes
- Try the sign-in process again

### "Invalid or expired session" error
- Your session may have expired (24-hour limit)
- Sign in again to create a new session

### Callback URL mismatch
- Ensure the `redirect_uri` in `llms.json` matches exactly what you configured in GitHub OAuth App settings
- Default is `http://localhost:8080/auth/github/callback`
- For production: `https://yourdomain.com/auth/github/callback`

### Access Denied

**Error**: User authenticated but can't access

**Solution**: Check `GITHUB_USERS` includes the username:
```bash
echo $GITHUB_USERS
```

### Environment Variables Not Loaded

**Solution**: Verify variables are set:
```bash
echo $GITHUB_CLIENT_ID
echo $GITHUB_CLIENT_SECRET
```

Restart llms.py after setting variables.

## API Reference

### Session Data Structure

```javascript
{
    "userId": "12345678",
    "userName": "octocat",
    "displayName": "The Octocat",
    "profileUrl": "https://avatars.githubusercontent.com/u/583231",
    "email": "octocat@github.com",
    "sessionToken": "abc123...",
    "created": 1234567890.123
}
```

### HTTP Headers

**For authenticated requests:**
```
X-Session-Token: <session_token>
```

## Files Modified

The following files were modified to implement GitHub OAuth:

- `llms/llms.json` - Added auth configuration
- `llms/main.py` - Added OAuth endpoints and session management
- `llms/ui/ai.mjs` - Added OAuth methods and authType config
- `llms/ui/OAuthSignIn.mjs` - New OAuth sign-in component
- `llms/ui/Main.mjs` - Conditional sign-in component rendering
- `llms/ui/Avatar.mjs` - Added logout functionality

## Security Best Practices

1. **Use HTTPS in Production**: Always use HTTPS for production deployments

2. **Keep Secrets Secret**: Never commit client secrets to version control

3. **Rotate Secrets**: Periodically regenerate client secrets

4. **Restrict Access**: Use `GITHUB_USERS` to limit access to trusted users

5. **Monitor Access**: Check logs for unauthorized access attempts

6. **Session Expiration**: Consider adjusting session timeout based on your security requirements

## Next Steps

- [Docker Deployment](/guides/docker/) - Deploy with Docker
- [Configuration](/getting-started/configuration/) - Advanced configuration
- [Web UI](/features/web-ui/) - Explore UI features
- [Troubleshooting](/guides/troubleshooting/) - Common issues and solutions
