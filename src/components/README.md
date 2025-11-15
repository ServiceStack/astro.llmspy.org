# Console Carousel Component

A React component that displays an auto-rotating carousel of console/terminal screens showcasing different features of llms.py.

## Files

- `ConsoleCarousel.tsx` - Main React component
- `ConsoleCarousel.css` - Styling for the carousel
- `../data/carouselSlides.ts` - Slide content (easy to maintain)

## Usage

The carousel is used on the homepage (`src/content/docs/index.mdx`):

```mdx
import ConsoleCarousel from '../../components/ConsoleCarousel.tsx';
import { carouselSlides } from '../../data/carouselSlides';

<ConsoleCarousel slides={carouselSlides} client:load />
```

## Adding/Removing Slides

To add or remove slides, simply edit `src/data/carouselSlides.ts`:

```typescript
export const carouselSlides: ConsoleSlide[] = [
  {
    title: "Your Feature Title",
    description: "Brief description of the feature",
    commands: [
      "# Comment",
      "command --flag value",
      "",  // Empty line for spacing
      "another-command"
    ]
  },
  // Add more slides here...
];
```

## Features

- **Auto-play**: Automatically rotates through slides every 5 seconds
- **Manual navigation**: Click arrows or dots to navigate
- **Pause on interaction**: Auto-play pauses when user interacts
- **Responsive**: Works on mobile and desktop
- **Dark mode**: Styled to match the site's dark theme
- **Accessible**: Includes ARIA labels for screen readers

## Customization

### Change auto-play interval

```tsx
<ConsoleCarousel slides={carouselSlides} autoPlayInterval={3000} client:load />
```

### Styling

Edit `ConsoleCarousel.css` to customize:
- Colors (uses CSS variables from Starlight theme)
- Console window appearance
- Button styles
- Responsive breakpoints

## Component Props

```typescript
interface ConsoleCarouselProps {
  slides: ConsoleSlide[];
  autoPlayInterval?: number; // Default: 5000ms
}

interface ConsoleSlide {
  title: string;
  description: string;
  commands: string[];
}
```

