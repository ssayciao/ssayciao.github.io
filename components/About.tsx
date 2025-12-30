import React from 'react';

interface AboutProps {
    bio?: string;
}

export const About: React.FC<AboutProps> = ({
    bio = "lorem ipsum dolor sit amet consectetur adipiscing elit"
}) => {
    return (
        <section id="about" className="section" style={{
            background: 'transparent',
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-2xl) var(--spacing-md)'
        }}>
            <div className="container-narrow" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{
                        marginBottom: 'var(--spacing-xl)',
                        fontWeight: 400,
                        fontSize: 'clamp(2rem, 5vw, 3rem)'
                    }}>
                        About
                    </h2>
                </div>

                <div style={{
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        lineHeight: 2,
                        color: 'var(--color-text-secondary)',
                        textAlign: 'center',
                        fontWeight: 300
                    }}>
                        {bio}
                    </p>
                </div>
            </div>
        </section>
    );
};
