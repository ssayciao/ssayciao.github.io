import React from 'react';

interface ContactProps {
    email?: string;
}

export const Contact: React.FC<ContactProps> = ({
    email = "ssayciao@gmail.com"
}) => {
    return (
        <section id="contact" className="section" style={{
            background: 'var(--color-bg-primary)',
            minHeight: 'auto',
            padding: 'var(--spacing-2xl) var(--spacing-md) var(--spacing-xl)'
        }}>
            <div className="container" style={{
                textAlign: 'center'
            }}>
                <h2 style={{
                    marginBottom: 'var(--spacing-lg)',
                    fontWeight: 400,
                    fontSize: 'clamp(2rem, 5vw, 3rem)'
                }}>
                    Get in Touch
                </h2>

                <p style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '500px',
                    margin: '0 auto var(--spacing-lg)',
                    fontWeight: 300,
                    lineHeight: 1.8
                }}>
                    Interested in collaborations or commissions?
                </p>

                {/* Email */}
                <a
                    href={`mailto:${email}`}
                    style={{
                        display: 'inline-block',
                        fontSize: 'var(--font-size-xl)',
                        fontWeight: 300,
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-2xl)',
                        transition: 'all var(--transition-base)',
                        borderBottom: '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderBottomColor = 'var(--color-text-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderBottomColor = 'transparent';
                    }}
                >
                    {email}
                </a>

                {/* Simple Footer */}
                <div style={{
                    paddingTop: 'var(--spacing-xl)',
                    color: 'var(--color-text-tertiary)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 300
                }}>
                    <p>© {new Date().getFullYear()} All rights reserved</p>
                </div>
            </div>
        </section>
    );
};
