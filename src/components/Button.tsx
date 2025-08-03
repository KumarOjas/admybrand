import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glassmorphism?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glassmorphism = false,
  className = '',
  ...props
}) => {
  // Base classes
  let baseClasses = 'font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ';
  
  // Variant classes
  if (variant === 'primary') {
    baseClasses += 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 ';
    if (glassmorphism) {
      baseClasses += 'backdrop-blur-lg bg-opacity-30 border border-white border-opacity-20 shadow-lg ';
    }
  } else if (variant === 'secondary') {
    baseClasses += 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 ';
    if (glassmorphism) {
      baseClasses += 'backdrop-blur-lg bg-opacity-20 border border-white border-opacity-10 shadow-md ';
    }
  } else {
    baseClasses += 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-white dark:hover:bg-gray-800 ';
  }
  
  // Size classes
  if (size === 'sm') {
    baseClasses += 'px-3 py-1.5 text-sm ';
  } else if (size === 'md') {
    baseClasses += 'px-4 py-2 text-base ';
  } else {
    baseClasses += 'px-6 py-3 text-lg ';
  }
  
  // Glassmorphism effect
  if (glassmorphism) {
    baseClasses += 'bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-opacity-10 ';
  }
  
  return (
    <button
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
