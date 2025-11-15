import { useState, useEffect } from 'react';
import './ConsoleCarousel.css';

export interface ConsoleSlide {
  title: string;
  description: string;
  commands: string[];
}

interface ConsoleCarouselProps {
  slides: ConsoleSlide[];
  autoPlayInterval?: number;
}

export default function ConsoleCarousel({ slides, autoPlayInterval = 10000 }: ConsoleCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  const renderCommand = (cmd: string) => {
    // Empty lines
    if (cmd.trim() === '') {
      return <br />;
    }

    // Comments
    if (cmd.trim().startsWith('#')) {
      return <span style={{ color: '#6a9955' }}>{cmd}</span>;
    }

    // Regular commands
    return cmd;
  };

  return (
    <div className="console-carousel">
      <div className="carousel-header">
        <h3>{currentSlideData.title}</h3>
        <p>{currentSlideData.description}</p>
      </div>

      <div className="console-window">
        <div className="console-header">
          <div className="console-title">Terminal</div>
          <div className="console-buttons">
            <span className="console-button close"></span>
            <span className="console-button minimize"></span>
            <span className="console-button maximize"></span>
          </div>
        </div>
        <div className="console-body">
          <pre className="console-content">
            {currentSlideData.commands.map((cmd, idx) => (
              <div key={idx} className="console-line">
                {cmd.trim() !== '' && <span className="console-prompt">$</span>}{' '}
                {renderCommand(cmd)}
              </div>
            ))}
          </pre>
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-button prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-button next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}

