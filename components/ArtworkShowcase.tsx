import React, { useRef, useEffect, useState } from 'react';

interface Artwork {
    id: string;
    url: string;
    title: string;
    medium?: string;
    year?: string;
    description?: string;
}

interface ArtworkShowcaseProps {
    artwork: Artwork;
    index: number;
}

export const ArtworkShowcase: React.FC<ArtworkShowcaseProps> = ({ artwork, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const isEven = index % 2 === 0;

    return (
        <>
            <div
                ref={containerRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth > 768 ? (isEven ? '1fr 1fr' : '1fr 1fr') : '1fr',
                    gap: 'var(--spacing-xl)',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-2xl)',
                    padding: '0 var(--spacing-md)'
                }}
                className={isVisible ? 'animate-fade-in' : ''}
            >
                {/* Image Container */}
                <div
                    style={{
                        order: window.innerWidth > 768 ? (isEven ? 1 : 2) : 1,
                        position: 'relative',
                        aspectRatio: '4/3',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-xl)'
                    }}
                    onClick={() => setIsLightboxOpen(true)}
                    className={isVisible ? (isEven ? 'animate-slide-in-left' : 'animate-slide-in-right') : ''}
                >
                    {/* Glow effect */}
                    <div style={{
                        position: 'absolute',
                        inset: '-20px',
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(245, 87, 108, 0.3))',
                        filter: 'blur(40px)',
                        opacity: 0.5,
                        zIndex: -1
                    }} />

                    <img
                        src={artwork.url}
                        alt={artwork.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform var(--transition-slow)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    />

                    {/* Overlay on hover */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity var(--transition-base)',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0';
                        }}
                    >
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                    </div>
                </div>

                {/* Info Container */}
                <div
                    style={{
                        order: window.innerWidth > 768 ? (isEven ? 2 : 1) : 2,
                        padding: window.innerWidth > 768 ? 'var(--spacing-lg)' : 'var(--spacing-md) 0'
                    }}
                    className={isVisible ? (isEven ? 'animate-slide-in-right delay-200' : 'animate-slide-in-left delay-200') : ''}
                >
                    <div className="uppercase-spaced" style={{ marginBottom: 'var(--spacing-sm)' }}>
                        {artwork.medium && `${artwork.medium} ${artwork.year ? `• ${artwork.year}` : ''}`}
                    </div>

                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>
                        {artwork.title}
                    </h3>

                    {artwork.description && (
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            lineHeight: 1.8,
                            color: 'var(--color-text-secondary)'
                        }}>
                            {artwork.description}
                        </p>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        cursor: 'pointer',
                        padding: 'var(--spacing-xl)',
                        backdropFilter: 'blur(10px)'
                    }}
                    onClick={() => setIsLightboxOpen(false)}
                    className="animate-fade-in"
                >
                    <img
                        src={artwork.url}
                        alt={artwork.title}
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            borderRadius: '4px',
                            boxShadow: 'var(--shadow-xl)'
                        }}
                        className="animate-scale-in"
                    />

                    {/* Close button */}
                    <button
                        style={{
                            position: 'absolute',
                            top: 'var(--spacing-md)',
                            right: 'var(--spacing-md)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'all var(--transition-base)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
};

// Responsive styles for mobile
const mediaQuery = '@media (max-width: 768px)';
