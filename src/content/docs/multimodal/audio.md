---
title: Audio Support
description: Process audio files with audio-capable models
---

llms.py supports audio file inputs through audio-capable models, enabling transcription, summarization, and analysis of audio content.

## CLI Usage

```bash
# Use default audio template (transcribe)
llms --audio ./recording.mp3

# With custom prompt
llms --audio ./meeting.wav "Summarize this meeting"

# Remote audio URL
llms --audio https://example.org/podcast.mp3 "Key points?"

# With specific audio model
llms -m gpt-4o-audio-preview --audio interview.mp3 "Extract topics"
llms -m gemini-2.5-flash --audio talk.mp3 "Transcribe"

# Combined with system prompt
llms -s "You're a transcription specialist" --audio talk.mp3 "Detailed transcript"
```

## Web UI

1. Click the audio attachment icon
2. Select an audio file
3. Add your prompt
4. Send

## Supported Formats

- MP3
- WAV
- M4A (depending on provider)

## Audio Sources

- **Local files**: Absolute or relative paths
- **Remote URLs**: HTTP/HTTPS URLs (automatically downloaded)
- **Base64 Data**: Base64-encoded audio

## Audio-Capable Models

Popular models that support audio processing:

- **OpenAI**: gpt-4o-audio-preview
- **Google**: gemini-2.5-pro, gemini-2.5-flash, gemini-2.5-flash-lite

## Custom Templates

You can create custom request templates for audio processing:

### Audio Template Example

```json
{
  "model": "gpt-4o-audio-preview",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "input_audio",
          "input_audio": {"data": "", "format": "mp3"}
        },
        {
          "type": "text",
          "text": "Please transcribe this audio"
        }
      ]
    }
  ]
}
```

Usage:
```bash
llms --chat audio-request.json --audio recording.mp3
```

## Next Steps

- [Image Support](/multimodal/images/) - Analyze images with vision models
- [File Support](/multimodal/files/) - Work with PDFs and documents
- [Web UI](/features/web-ui/) - Use multi-modal features in the UI
- [Providers](/reference/providers/) - See which providers support audio

