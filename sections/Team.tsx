import React, { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2, HardHat } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const teamMembers = [
  {
    id: 1,
    name: "Gabriela Nolasco", 
    role: "Arquiteta e Urbanista",
    realImage: "https://i.ibb.co/b51dch2s/Gabriela-Nolasco-3.png"
  },
  {
    id: 2,
    name: "Vinicius Tavares",
    role: "Engenheiro Civil",
    realImage: "https://i.ibb.co/x87CDkrz/Vinicius-Tavares-3.png"
  },
  {
    id: 3,
    name: "Thiago Monteiro",
    role: "Arquiteto e Designer de Interiores",
    realImage: "https://i.ibb.co/N2c4JHhP/Thiago-Monteiro-3.png"
  },
  {
    id: 4,
    name: "Leonardo Fagundes",
    role: "Engenheiro Civil",
    realImage: "https://i.ibb.co/99czwkb7/Leonardo-Fagundes-3.png"
  },
  {
    id: 5,
    name: "Gabriele Tavares",
    role: "Contadora",
    realImage: "https://i.ibb.co/8LWhSGZj/Gabriele-Tavares-4.png"
  }
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let timeoutId: number;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    teamMembers.forEach((member) => {
      const img = new Image();
      img.src = member.realImage;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [member.id]: true }));
      };
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  const getCardVariant = (index: number) => {
    const total = teamMembers.length;
    const relativeIndex = (index - activeIndex + total) % total;

    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1) return 'right';
    if (relativeIndex === 2) return 'farRight';
    if (relativeIndex === total - 2) return 'farLeft';
    if (relativeIndex === total - 1) return 'left';
    return 'hidden';
  };

  const variants = {
    center: { x: '0%', scale: 1, zIndex: 50, opacity: 1, filter: 'blur(0px)', rotateY: 0, willChange: 'transform, opacity' },
    left: { x: '-55%', scale: 0.85, zIndex: 30, opacity: 0.5, filter: 'blur(1px)', rotateY: 5, willChange: 'transform, opacity' },
    right: { x: '55%', scale: 0.85, zIndex: 30, opacity: 0.5, filter: 'blur(1px)', rotateY: -5, willChange: 'transform, opacity' },
    farLeft: { x: '-100%', scale: 0.7, zIndex: 10, opacity: 0.2, filter: 'blur(3px)', rotateY: 10, willChange: 'transform, opacity' },
    farRight: { x: '100%', scale: 0.7, zIndex: 10, opacity: 0.2, filter: 'blur(3px)', rotateY: -10, willChange: 'transform, opacity' },
    hidden: { opacity: 0, scale: 0, zIndex: 0 }
  };

  const mobileVariants = {
    center: { x: 0, opacity: 1, scale: 1, zIndex: 50, display: 'block', willChange: 'transform' },
    left: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    right: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    farLeft: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    farRight: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    hidden: { display: 'none' }
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden bg-charcoal">
      
      {/* Background Técnico Escuro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
             <span className="w-8 h-[2px] bg-terracotta"></span>
             <span className="text-terracotta font-bold uppercase tracking-widest text-xs">Quem Somos</span>
             <span className="w-8 h-[2px] bg-terracotta"></span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Equipe Multidisciplinar
          </motion.h2>
          
          {/* AJUSTE AQUI: Alterado de max-w-2xl para max-w-3xl */}
          <motion.p variants={fadeInUp} className="text-cement text-lg max-w-3xl mx-auto font-light">
            Mentes que planejam, olhos que detalham e mãos que constroem o seu sonho.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-[450px] md:h-[520px] flex items-center justify-center perspective-1000"
        >
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            aria-label="Anterior"
            className="absolute left-0 md:left-10 z-50 p-3 bg-white/5 hover:bg-terracotta text-white transition-colors border border-white/10 backdrop-blur-sm group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            aria-label="Próximo"
            className="absolute right-0 md:right-10 z-50 p-3 bg-white/5 hover:bg-terracotta text-white transition-colors border border-white/10 backdrop-blur-sm group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Cards */}
          <div className="relative w-[280px] xs:w-[300px] md:w-[350px] flex items-center justify-center">
            {teamMembers.map((member, index) => {
               const isLoaded = loadedImages[member.id];
               
               return (
                <motion.div
                  key={member.id}
                  variants={isMobile ? mobileVariants : variants}
                  animate={getCardVariant(index)}
                  initial="hidden"
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute w-full aspect-[3/4] cursor-grab active:cursor-grabbing"
                  drag={isMobile ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={onDragEnd}
                >
                  <div className="relative w-full h-full bg-charcoal-light border border-white/10 shadow-2xl overflow-hidden rounded-sm group">
                    
                    <div className="absolute top-0 left-0 w-full h-1 bg-terracotta z-20" />

                    {!isLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-charcoal-light">
                        <Loader2 className="w-10 h-10 text-terracotta animate-spin" />
                      </div>
                    )}

                    <img 
                      src={member.realImage} 
                      alt={member.name} 
                      width="350"
                      height="460"
                      loading="eager"
                      className={`
                        w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105
                        ${isLoaded ? 'opacity-100' : 'opacity-0'}
                      `}
                      draggable="false" 
                    />
                    
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Info do Membro Ativo */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-8 relative z-20 h-24"
        >
           <motion.div
             key={activeIndex}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
             className="flex flex-col items-center"
           >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-wide">
                {teamMembers[activeIndex].name}
              </h3>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-terracotta/10 border border-terracotta/30 text-terracotta text-sm font-semibold uppercase tracking-wider">
                <HardHat size={14} />
                {teamMembers[activeIndex].role}
              </div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;