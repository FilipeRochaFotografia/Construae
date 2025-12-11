import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';

// --- ÍCONES SVG NATIVOS (BLINDADO CONTRA ERROS) ---

const IconArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const IconPencilRuler = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.3 15.3 2.6-2.6a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0l-2.6 2.6" />
    <path d="m14.5 2.9 6.6 6.6" />
    <path d="M12 7 8 11" />
    <path d="m8 11 6 6" />
    <path d="M4 15 2 17l1 4 4 1 2-2" />
    <path d="m10 21 4-4" />
    <path d="m2 17 6 6" />
  </svg>
);

const IconCuboid = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.36a2 2 0 0 0 .95 1.7l9.95 6.12a2 2 0 0 0 2.17.05l6.05-4.06a2 2 0 0 0 1.13-1.67V8.06a2 2 0 0 0-1.13-1.66Z" />
    <path d="M10 22v-8" />
    <path d="m10 14 6-4" />
    <path d="m10 14-6-4" />
  </svg>
);

// ---------------------------------------------------

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 90,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-28 lg:pt-32 pb-20 overflow-hidden bg-beige">
      
      {/* Background LIMPO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(197,68,45,0.05)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.8)_0%,_transparent_50%)] pointer-events-none" />

      {/* 
         CONTAINER PRINCIPAL
         Adicionei 'lg:-mt-20' para puxar tudo para cima no Desktop 
      */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 lg:-mt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20"
          >
            {/* Tagline */}
            <motion.div 
              variants={fadeInUp} 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-charcoal/5 rounded-sm mb-6 lg:mb-8 shadow-sm"
            >
                <div className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
                <span className="text-charcoal font-bold uppercase tracking-[0.2em] text-[0.65rem] md:text-xs">
                  Projetos + Execução + Apoio Técnico
                </span>
            </motion.div>

            {/* 
              --- ELEMENTO MOBILE (Estilo Portal/Vidro) --- 
              Visível apenas em telas pequenas (lg:hidden).
            */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } 
                }
              }}
              className="relative w-full max-w-[340px] mx-auto -mt-2 mb-6 lg:hidden flex flex-col items-center justify-end z-10"
            >
               {/* Wrapper com Máscara de Gradiente */}
               <div className="relative w-full flex justify-center [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                  
                  {/* O "Portal" de Fundo */}
                  <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] h-[90%] z-0 pointer-events-none">
                      <div className="w-full h-full rounded-t-[3rem] border-t border-x border-terracotta/20 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm shadow-[inset_0_10px_20px_rgba(255,255,255,0.4)]">
                        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
                      </div>
                  </div>

                  {/* Imagem Wireframe */}
                  <img 
                    src="https://i.ibb.co/bgPT7NMQ/1.png" 
                    alt="Sketch Arquitetônico Mobile" 
                    className="relative z-10 w-auto h-auto max-h-[260px] object-contain scale-110 translate-y-4 mix-blend-multiply opacity-90"
                  />
               </div>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1 
              variants={fadeInUp} 
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-charcoal leading-[1.2] tracking-tight mb-6 max-w-3xl"
            >
              Arquitetura que <span className="text-terracotta relative inline-block">
                inspira
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-terracotta/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
              
              <br className="block" />
              
              Engenharia que <span className="text-terracotta relative inline-block">
                sustenta
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-terracotta/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                </svg>
              </span>.
            </motion.h1>

            {/* SUBHEADLINE */}
            <motion.p 
              variants={fadeInUp} 
              className="text-lg md:text-xl lg:text-2xl text-charcoal/80 mb-10 leading-relaxed max-w-3xl font-medium"
            >
              Do primeiro esboço à entrega das chaves, <br className="hidden lg:block" />
              conduzimos seu projeto com um olhar técnico <br className="hidden lg:block" />
              e a estética inconfundível da <strong className="text-charcoal font-bold">Construa<span className="text-terracotta">ê</span></strong>.
            </motion.p>

            {/* Botões */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 w-full justify-center lg:justify-start mb-16">
              <Button 
                variant="primary" 
                className="shadow-xl shadow-terracotta/20"
                icon={<IconArrowRight className="w-5 h-5" />}
                onClick={() => window.open('https://www.instagram.com/constru.ae/', '_blank')}
              >
                Fale com a gente
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
              >
                Nossos Serviços
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp} 
              className="flex flex-row gap-4 sm:gap-10 w-full max-w-2xl pt-10 border-t border-charcoal/10 justify-center lg:justify-start"
            >
              
              {/* Item 1 */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-default">
                <div className="text-terracotta group-hover:scale-110 transition-transform duration-300">
                  <IconPencilRuler className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                
                <div className="h-8 sm:h-10 w-[1px] bg-charcoal/10"></div>

                <div className="text-left">
                  <span className="block font-extrabold text-lg sm:text-2xl text-charcoal leading-none mb-1 whitespace-nowrap">
                    Arq + Eng
                  </span>
                  <p className="text-[0.55rem] sm:text-[0.65rem] text-cement uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold">
                    Equipe Integrada
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-default">
                <div className="text-terracotta group-hover:scale-110 transition-transform duration-300">
                  <IconCuboid className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <div className="h-8 sm:h-10 w-[1px] bg-charcoal/10"></div>

                <div className="text-left">
                  <span className="block font-extrabold text-lg sm:text-2xl text-charcoal leading-none mb-1 whitespace-nowrap">
                    3D Realista
                  </span>
                  <p className="text-[0.55rem] sm:text-[0.65rem] text-cement uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold">
                    Visualização Prévia
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>

          {/* Right Image - DESKTOP ONLY */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex h-[750px] w-full items-center justify-center pointer-events-none"
          >
             <img 
               src="https://i.ibb.co/bgPT7NMQ/1.png" 
               alt="Projeto Construaê" 
               className="relative z-10 w-[160%] max-w-none object-contain drop-shadow-2xl scale-125 translate-x-10"
             />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;