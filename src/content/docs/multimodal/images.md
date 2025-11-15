---
title: Image Support
description: Use images with vision-capable models
---

llms.py supports image inputs through vision-capable models, allowing you to analyze, describe, and extract information from images.

## CLI Usage

```bash
# Use default image template
llms --image ./screenshot.png

# With custom prompt
llms --image ./photo.jpg "What's in this image?"

# Remote image URL
llms --image https://example.org/photo.jpg "Describe this photo"

# With specific vision model
llms -m gemini-2.5-flash --image chart.png "Analyze this chart"
llms -m qwen2.5vl --image document.jpg "Extract text"

# Combined with system prompt
llms -s "You are a data analyst" --image graph.png "What trends do you see?"
```

## Web UI

1. Click the image attachment icon
2. Drag & drop or select an image
3. Or paste an image from clipboard
4. Add your prompt
5. Send

## Supported Formats

- PNG
- WEBP
- JPG/JPEG
- GIF
- BMP
- TIFF
- ICO

## Image Sources

- **Local files**: Absolute or relative paths
- **Remote URLs**: HTTP/HTTPS URLs (automatically downloaded)
- **Data URIs**: Base64-encoded images
- **Clipboard**: Paste directly in web UI

## Vision-Capable Models

Popular models that support image analysis:

- **OpenAI**: GPT-4o, GPT-4o-mini, GPT-4.1
- **Anthropic**: Claude Sonnet 4.0, Claude Opus 4.1
- **Google**: Gemini 2.5 Pro, Gemini Flash
- **Qwen**: Qwen2.5-VL, Qwen3-VL, QVQ-max
- **Ollama**: qwen2.5vl, llava

## Custom Templates

You can create custom request templates for image processing:

### Image Template Example

```json
{
  "model": "qwen2.5vl",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {"url": ""}
        },
        {
          "type": "text",
          "text": "Caption this image"
        }
      ]
    }
  ]
}
```

Usage:
```bash
llms --chat image-request.json --image photo.jpg
```

## Next Steps

- [Audio Support](/multimodal/audio/) - Process audio files
- [File Support](/multimodal/files/) - Work with PDFs and documents
- [Web UI](/features/web-ui/) - Use multi-modal features in the UI
- [Providers](/reference/providers/) - See which providers support vision

