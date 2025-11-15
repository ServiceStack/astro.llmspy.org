---
title: Troubleshooting
description: Common issues and solutions
---

This guide covers common issues and their solutions when using llms.py.

## Installation Issues

### pip install fails

**Problem**: `pip install llms-py` fails with errors

**Solutions**:

1. Update pip:
```bash
pip install --upgrade pip
```

2. Use Python 3.8+:
```bash
python --version  # Should be 3.8 or higher
```

3. Install in virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install llms-py
```

## Configuration Issues

### Config file not found

**Problem**: `Config file not found` error

**Solution**:
```bash
# Initialize default config
llms --init

# Or specify custom path
llms --config ./my-config.json
```

### Config file corrupted

**Problem**: JSON parsing errors

**Solution**:
```bash
# Backup current config
cp ~/.llms/llms.json ~/.llms/llms.json.backup

# Recreate default config
rm ~/.llms/llms.json
llms --init
```

## Provider Issues

### No providers enabled

**Problem**: "No providers enabled" error

**Solution**:
```bash
# Check status
llms --list

# Enable providers
llms --enable groq google_free openrouter_free
```

### API key not recognized

**Problem**: Provider not available despite setting API key

**Solutions**:

1. Check environment variable:
```bash
echo $GROQ_API_KEY
```

2. Export in current shell:
```bash
export GROQ_API_KEY="gsk_..."
```

3. Add to shell profile:
```bash
# Add to ~/.bashrc or ~/.zshrc
export GROQ_API_KEY="gsk_..."

# Reload
source ~/.bashrc
```

4. Set in config file:
```json
{
  "providers": {
    "groq": {
      "api_key": "gsk_your_actual_key"
    }
  }
}
```

### Provider authentication failed

**Problem**: 401 or 403 errors

**Solutions**:

1. Verify API key is correct
2. Check API key hasn't expired
3. Verify account has credits/quota
4. Test with provider's official tools

### Provider timeout

**Problem**: Requests timing out

**Solutions**:

1. Check internet connection
2. Try different provider:
```bash
llms --disable slow_provider
llms --enable fast_provider
```

3. Check provider status page
4. Use verbose mode to see details:
```bash
llms --verbose "test"
```

## Model Issues

### Model not found

**Problem**: "Model 'xyz' not found" error

**Solutions**:

1. List available models:
```bash
llms ls
```

2. Check provider is enabled:
```bash
llms ls groq  # List groq models
```

3. Enable provider that has the model:
```bash
llms --enable groq
```

4. Use correct model name (check `llms.json` for mappings)

### Model not responding

**Problem**: Model requests hang or fail

**Solutions**:

1. Check provider status:
```bash
llms --check groq
```

2. Try different model:
```bash
llms -m alternative-model "test"
```

3. Check verbose logs:
```bash
llms --verbose -m problematic-model "test"
```

## Server Issues

### Port already in use

**Problem**: "Address already in use" error

**Solutions**:

1. Use different port:
```bash
llms --serve 8001
```

2. Kill process using port:
```bash
# Find process
lsof -i :8000

# Kill it
kill -9 <PID>
```

### Server not accessible

**Problem**: Can't access `http://localhost:8000`

**Solutions**:

1. Check server is running:
```bash
curl http://localhost:8000
```

2. Check firewall settings

3. Try 127.0.0.1 instead of localhost:
```
http://127.0.0.1:8000
```

## Docker Issues

### Container won't start

**Problem**: Docker container exits immediately

**Solutions**:

1. Check logs:
```bash
docker logs <container-id>
```

2. Verify environment variables:
```bash
docker run -p 8000:8000 \
  -e GROQ_API_KEY=$GROQ_API_KEY \
  ghcr.io/servicestack/llms:latest
```

3. Check API key is set:
```bash
echo $GROQ_API_KEY
```

### Volume mount issues

**Problem**: Config not persisting

**Solutions**:

1. Use named volume:
```bash
docker run -p 8000:8000 \
  -v llms-data:/home/llms/.llms \
  ghcr.io/servicestack/llms:latest
```

2. Check permissions on local directory:
```bash
chmod -R 755 ./config
```

## Multi-Modal Issues

### Image not processing

**Problem**: Image requests fail

**Solutions**:

1. Check image format is supported (PNG, JPG, WEBP, etc.)

2. Verify model supports vision:
```bash
llms -m gemini-2.5-flash --image test.jpg "test"
```

3. Check image size (may need to resize large images)

4. Try different vision model

### Audio not processing

**Problem**: Audio requests fail

**Solutions**:

1. Check audio format (MP3, WAV supported)

2. Verify model supports audio:
```bash
llms -m gpt-4o-audio-preview --audio test.mp3 "test"
```

3. Try different audio model

### PDF not processing

**Problem**: PDF requests fail

**Solutions**:

1. Verify model supports files:
```bash
llms -m gpt-5 --file test.pdf "test"
```

2. Check PDF isn't corrupted

3. Try different file-capable model

## Performance Issues

### Slow responses

**Problem**: Requests taking too long

**Solutions**:

1. Use faster models:
```bash
llms -m gemini-2.5-flash "test"  # Fast
llms -m llama3.3:70b "test"      # Fast via Groq
```

2. Check provider response times:
```bash
llms --check groq
```

3. Use local models for speed:
```bash
llms --enable ollama
llms -m llama3.3 "test"
```

4. Reduce max_tokens:
```bash
llms --args "max_completion_tokens=100" "test"
```

## Debug Mode

Enable verbose logging to diagnose issues:

```bash
llms --verbose --logprefix "[DEBUG] " "test query"
```

This shows:
- Enabled providers
- Model routing decisions
- HTTP request/response details
- Error messages with stack traces

## Getting Help

If you're still having issues:

1. **Check GitHub Issues**: [github.com/ServiceStack/llms/issues](https://github.com/ServiceStack/llms/issues)

2. **Create New Issue**: Include:
   - llms.py version
   - Python version
   - Operating system
   - Full error message
   - Steps to reproduce
   - Verbose logs (with API keys redacted)

3. **Community Support**: Join discussions on GitHub

## Next Steps

- [Configuration](/getting-started/configuration/) - Detailed configuration
- [Providers](/reference/providers/) - Provider-specific details
- [CLI Usage](/guides/cli-usage/) - Command reference

