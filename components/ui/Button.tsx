import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'black';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  icon,
  type = 'button' 
}) => {
  
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 rounded-sm group transform-gpu border-2";
  
  const variants = {
    primary: "bg-terracotta border-terracotta text-white hover:bg-terracotta-dark hover:border-terracotta-dark shadow-md hover:shadow-lg",
    outline: "bg-transparent border-terracotta text-terracotta hover:bg-terracotta hover:text-white",
    black: "bg-charcoal border-charcoal text-white hover:bg-charcoal-light hover:border-charcoal-light shadow-md"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className} will-change-transform`}
    >
      <span className="relative flex items-center gap-3 z-10">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
};

export default Button;