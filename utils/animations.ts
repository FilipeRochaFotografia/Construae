import { Variants, TargetAndTransition } from 'framer-motion';

// Curva de Bezier "Premium": Movimento com peso e elegância.
const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    willChange: 'transform, opacity'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.9, 
      ease: premiumEase
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const fadeInScale: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    willChange: 'transform, opacity'
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: premiumEase
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    x: -60, 
    opacity: 0,
    willChange: 'transform, opacity'
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: premiumEase
    }
  }
};

export const hoverLift: TargetAndTransition = {
  y: -4, 
  transition: { 
    duration: 0.3, 
    ease: "easeOut" 
  }
};