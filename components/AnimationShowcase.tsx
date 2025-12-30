import React from 'react';

interface Animation {
    id: string;
    url: string;
    title: string;
    medium: string;
    year: string;
    description: string;
}

interface AnimationShowcaseProps {
    animation: Animation;
    index: number;
}

export const AnimationShowcase: React.FC<AnimationShowcaseProps> = ({ animation, index }) => {
    return (
        <div
            style={{
                marginBottom: 'var(--spacing-2xl)'
            }}
            className="animate-fade-in-up"
        >
            {/* Video Container */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '900px',
                    margin: '0 auto',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-bg-secondary)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
                }}
            >
                <video
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                >
                    <source src={animation.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Animation Details */}
            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    paddingTop: 'var(--spacing-md)',
                    textAlign: 'center'
                }}
            >
                <h3
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'var(--font-size-2xl)',
                        marginBottom: 'var(--spacing-xs)',
                        color: 'var(--color-text-primary)'
                    }}
                >
                    {animation.title}
                </h3>

                <div
                    style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-tertiary)',
                        marginBottom: 'var(--spacing-sm)',
                        letterSpacing: '0.05em'
                    }}
                >
                    {animation.medium} • {animation.year}
                </div>

                <p
                    style={{
                        fontSize: 'var(--font-size-base)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: '1.8',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}
                >
                    {animation.description}
                </p>
            </div>
        </div>
    );
};
