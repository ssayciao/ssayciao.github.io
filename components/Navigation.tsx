import React, { useState, useEffect } from 'react';

interface NavigationProps {
    currentPage: string;
    onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
    currentPage,
    onPageChange
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide/show nav based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className="glass"
            style={{
                position: 'fixed',
                top: 'var(--spacing-md)',
                left: '50%',
                transform: `translate(-50%, ${isVisible ? '0' : '-120%'})`,
                zIndex: 'var(--z-nav)',
                display: 'flex',
                gap: 'var(--spacing-xs)',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                transition: 'transform var(--transition-slow)',
            }}
        >
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => onPageChange(section.id)}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 500,
                        color: currentPage === section.id
                            ? 'var(--color-text-primary)'
                            : 'var(--color-text-tertiary)',
                        background: currentPage === section.id
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'transparent',
                        transition: 'all var(--transition-base)',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        if (currentPage !== section.id) {
                            e.currentTarget.style.color = 'var(--color-text-secondary)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (currentPage !== section.id) {
                            e.currentTarget.style.color = 'var(--color-text-tertiary)';
                        }
                    }}
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
};
