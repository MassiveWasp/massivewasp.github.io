import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading,
    className = '',
    disabled,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-[var(--color-secondary)] text-white hover:bg-opacity-90 border border-transparent",
        secondary: "bg-[var(--color-primary)] text-white hover:bg-opacity-90 border border-transparent",
        outline: "bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white",
        ghost: "bg-transparent text-[var(--text-secondary)] hover:text-white hover:bg-white/10"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-4 py-2 text-base rounded-md",
        lg: "px-6 py-3 text-lg rounded-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading ? (
                <span className="mr-2 animate-spin">⟳</span>
            ) : null}
            {children}
        </button>
    );
};
