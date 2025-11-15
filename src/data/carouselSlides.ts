import type { ConsoleSlide } from '../components/ConsoleCarousel';

/**
 * Carousel slides for the homepage console demo
 * 
 * To add/remove slides, simply edit this array.
 * Each slide should have:
 * - title: The heading for the slide
 * - description: A brief description
 * - commands: Array of bash commands to display
 */
export const carouselSlides: ConsoleSlide[] = [
  {
    title: "Quick Start",
    description: "Get started with llms.py in seconds",
    commands: [
      "pip install llms-py",
      "llms --init",
      "llms --enable openrouter_free google_free groq",
      "llms \"Explain quantum computing in simple terms\""
    ]
  },
  {
    title: "Multi-Provider Support",
    description: "Route requests across 160+ models",
    commands: [
      "# List available providers and models",
      "llms ls",
      "",
      "# Use specific model",
      "llms -m gpt-4o \"Write a Python function\"",
      "llms -m claude-sonnet-4-0 \"Explain this code\""
    ]
  },
  {
    title: "Vision & Multi-Modal",
    description: "Analyze images with vision-capable models",
    commands: [
      "# Analyze images",
      "llms --image screenshot.png \"What's in this image?\"",
      "",
      "# Process audio",
      "llms --audio meeting.mp3 \"Summarize this meeting\"",
      "",
      "# Work with PDFs",
      "llms --file report.pdf \"Extract key findings\""
    ]
  },
  {
    title: "Web UI & Server",
    description: "ChatGPT-like interface with OpenAI-compatible API",
    commands: [
      "# Start server with UI",
      "llms --serve 8000",
      "",
      "# Access at http://localhost:8000",
      "# OpenAI-compatible API:",
      "# http://localhost:8000/v1/chat/completions"
    ]
  },
  {
    title: "Intelligent Routing",
    description: "Automatic failover and cost optimization",
    commands: [
      "# Define provider priority",
      "llms --enable openrouter_free groq openai",
      "",
      "# Free/cheap providers first",
      "# Automatic failover to premium models",
      "llms \"Complex reasoning task\""
    ]
  }
];

