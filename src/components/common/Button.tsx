import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'xs',
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors';

  const variantStyles = {
    primary: 'bg-primary-500 text-text-inverse hover:bg-primary-600 border border-primary-500',
    secondary:
      'bg-secondary-500 text-text-inverse hover:bg-secondary-700 border border-secondary-500',
    outline: 'bg-transparent text-primary-500 hover:bg-primary-50 border border-primary-500',
  };

  const sizeStyles = {
    xs: 'py-2xs px-xs rounded-md',
    sm: 'py-xs px-sm rounded-md',
    md: 'py-sm px-md rounded-md',
    lg: 'py-md px-lg rounded-md',
    xl: 'py-lg px-xl rounded-md',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const mergedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled ? disabledStyles : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={mergedClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
