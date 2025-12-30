import React, { useEffect, useState } from 'react';

interface HeroProps {
  artistName?: string;
}

export const Hero: React.FC<HeroProps> = ({
  artistName = "SSAYCIAO"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            position: 'relative',
            display: 'inline-block',
            cursor: 'default',
            padding: 'var(--spacing-md)'
          }}
        >
          {/* Default Name: CIAO */}
          <span
            className={isVisible ? 'animate-fade-in' : ''}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(6rem, 20vw, 12rem)',
              fontFamily: 'var(--font-serif)',
              color: '#ffb6c1',
              opacity: isVisible ? (isHovering ? 0.05 : 0.8) : 0,
              zIndex: 1,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
              letterSpacing: '0.1em'
            }}
          >
            CIAO
          </span>

          {/* Hover Name: Chinese character */}
          <h1
            style={{
              opacity: isHovering ? 1 : 0,
              marginBottom: '0',
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              letterSpacing: '0.05em',
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              position: 'relative',
              zIndex: 2,
              transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
              transform: isHovering ? 'scale(1)' : 'scale(0.95)',
              color: 'var(--color-text-primary)'
            }}
          >
            {artistName}
          </h1>
        </div>
      </div>

      {/* Minimal scroll indicator - positioned relative to section, not container */}
      <div
        onClick={scrollToGallery}
        className={`animate-float ${isVisible ? 'animate-fade-in delay-600' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          position: 'absolute',
          bottom: 'var(--spacing-xl)',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          color: 'var(--color-text-tertiary)',
          fontSize: 'var(--font-size-xs)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          transition: 'color var(--transition-base)',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--color-text-secondary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--color-text-tertiary)';
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto', display: 'block' }}>
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};
