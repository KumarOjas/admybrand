import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glassmorphism?: boolean;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  glassmorphism = false,
  hoverEffect = true,
  className = '',
  ...props
}) => {
  let baseClasses = 'rounded-xl p-6 transition-all duration-300 ';
  
  if (glassmorphism) {
    baseClasses += 'backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-20 shadow-lg ';
  } else {
    baseClasses += 'bg-white dark:bg-gray-800 shadow-md ';
  }
  
  if (hoverEffect) {
    baseClasses += 'hover:shadow-xl hover:-translate-y-1 ';
  }
  
  return (
    <div
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
