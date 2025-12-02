import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
    return (
        <div
            className={`
        bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-6
        backdrop-blur-sm bg-opacity-80
        ${hover ? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-secondary)]' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
