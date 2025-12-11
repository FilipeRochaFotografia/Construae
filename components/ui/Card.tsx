import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={`
        relative 
        ${noPadding ? 'p-0' : 'p-8'} 
        rounded-sm 
        bg-white 
        border border-cement/20 
        hover:border-terracotta/40 
        transition-all duration-300 
        hover:shadow-sharp 
        overflow-hidden 
        group 
        transform-gpu 
        will-change-transform
        ${className}
      `}
    >
      {/* Detalhe Superior: Linha de ênfase (Viga) */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-terracotta group-hover:w-full transition-all duration-500 ease-in-out z-20" />
      
      {/* Conteúdo */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Background sutil de grid aparecendo no hover */}
      <div className="absolute inset-0 bg-technical-grid opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
    </motion.div>
  );
};

export default Card;