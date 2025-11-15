---
title: Installation
description: How to install llms.py
---

## Using pip

The easiest way to install llms.py is via pip:

```bash
pip install llms-py
```

## Using Docker

### Quick Start

Run the server on port 8000:

```bash
docker run -p 8000:8000 -e GROQ_API_KEY=$GROQ_API_KEY \
    ghcr.io/servicestack/llms:latest
```

Get the latest version:

```bash
docker pull ghcr.io/servicestack/llms:latest
```

### Using Docker Compose (Recommended)

Download the docker-compose.yml file:

```bash
curl -O https://raw.githubusercontent.com/ServiceStack/llms/refs/heads/main/docker-compose.yml
```

Update API Keys in `docker-compose.yml` then start the server:

```bash
docker-compose up -d
```

### Build from Source

```bash
git clone https://github.com/ServiceStack/llms
docker compose -f docker-compose.local.yml up -d --build
```

After the container starts, you can access the UI and API at `http://localhost:8000`.

## Verify Installation

After installation, verify that llms.py is working:

```bash
# Check version
llms --help

# Initialize configuration
llms --init
```

This will create a default configuration file at `~/.llms/llms.json`.

## Next Steps

- [Quick Start Guide](/getting-started/quick-start/) - Get up and running quickly
- [Configuration](/getting-started/configuration/) - Configure providers and models
- [API Keys](/getting-started/api-keys/) - Set up your API keys

