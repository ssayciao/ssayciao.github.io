import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                zIndex: 'var(--z-nav)',
                background: 'rgba(255, 255, 255, 0.05)',
                pointerEvents: 'none'
            }}
        >
            <div
                style={{
                    height: '100%',
                    width: `${scrollProgress}%`,
                    background: 'var(--gradient-primary)',
                    transition: 'width 0.1s ease-out',
                    boxShadow: '0 0 10px rgba(102, 126, 234, 0.5)'
                }}
            />
        </div>
    );
};
