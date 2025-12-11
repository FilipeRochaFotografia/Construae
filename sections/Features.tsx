import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';
import Card from '../components/ui/Card';

// --- ÍCONES SVG NATIVOS (Para eliminar o erro de versão do React) ---

const IconPencilRuler = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.3 15.3 2.6-2.6a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0l-2.6 2.6" />
    <path d="m14.5 2.9 6.6 6.6" />
    <path d="M12 7 8 11" />
    <path d="m8 11 6 6" />
    <path d="M4 15 2 17l1 4 4 1 2-2" />
    <path d="m10 21 4-4" />
    <path d="m2 17 6 6" />
  </svg>
);

const IconArmchair = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
    <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
    <path d="M5 18v2" />
    <path d="M19 18v2" />
  </svg>
);

const IconBrickWall = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
    <path d="M9 9v6" />
    <path d="M15 3v6" />
    <path d="M15 15v6" />
  </svg>
);

const IconFileText = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const IconCuboid = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.36a2 2 0 0 0 .95 1.7l9.95 6.12a2 2 0 0 0 2.17.05l6.05-4.06a2 2 0 0 0 1.13-1.67V8.06a2 2 0 0 0-1.13-1.66Z" />
    <path d="M10 22v-8" />
    <path d="m10 14 6-4" />
    <path d="m10 14-6-4" />
  </svg>
);

const IconHardHat = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
    <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
    <path d="M14 6h0a6 6 0 0 1 6 6v3" />
  </svg>
);

const IconFileCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const IconFuel = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" x2="15" y1="22" y2="22" />
    <path d="M4 9h10" />
    <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
    <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
  </svg>
);

const IconArrowLeft = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const IconArrowRight = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// ----------------------------------------------------------------------------------

const services = [
  { id: 1, icon: <IconPencilRuler className="w-8 h-8" />, title: "Projetos Arquitetônicos", description: "Concepção completa para espaços residenciais, comerciais e industriais, unindo estética e função." },
  { id: 2, icon: <IconArmchair className="w-8 h-8" />, title: "Interiores", description: "Design de ambientes que refletem sua personalidade, com detalhamento de marcenaria e decoração." },
  { id: 3, icon: <IconBrickWall className="w-8 h-8" />, title: "Estrutural", description: "Cálculo e dimensionamento estrutural para garantir a segurança e estabilidade da sua edificação." },
  { id: 4, icon: <IconFileText className="w-8 h-8" />, title: "Executivo e Complementares", description: "Detalhamento técnico profundo (elétrico, hidráulico) para evitar erros e desperdícios na obra." },
  { id: 5, icon: <IconCuboid className="w-8 h-8" />, title: "Modelagem 3D", description: "Visualização realista do seu projeto antes da construção, facilitando o entendimento e ajustes." },
  { id: 6, icon: <IconHardHat className="w-8 h-8" />, title: "Acompanhamento de Obras", description: "Gestão técnica e fiscalização da execução para garantir fidelidade ao projeto e cumprimento de prazos." },
  { id: 7, icon: <IconFileCheck className="w-8 h-8" />, title: "Regularização de Imóveis", description: "Consultoria completa para aprovação em prefeituras, alvarás, habite-se e averbações." },
  { id: 8, icon: <IconFuel className="w-8 h-8" />, title: "Postos de Gasolina", description: "Especialização em projetos e adequações normativas para postos de serviços e combustíveis." }
];

const Features = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Monitora o scroll para atualizar a barra de progresso e botões
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Função para navegar pelos botões
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 300; 
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Decoração de Fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-beige/30 -skew-x-12 transform origin-top pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
             <span className="w-8 h-[2px] bg-terracotta"></span>
             <span className="text-terracotta font-bold uppercase tracking-widest text-xs">O que fazemos</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-charcoal mb-6">
            Soluções de Engenharia <br />e Arquitetura
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-charcoal/80 text-xl leading-relaxed max-w-2xl">
            Oferecemos um ciclo completo de serviços. Da legalização do terreno ao design final de interiores.
          </motion.p>
        </motion.div>

        {/* --- CARROSSEL / GRID --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Container Scrollável */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:mx-0 md:px-0 md:overflow-visible"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                variants={fadeInUp}
                className="shrink-0 min-w-[280px] w-[85vw] snap-center md:shrink md:min-w-0 md:w-auto h-auto"
              >
                <Card className="h-full flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
                  <div className="mb-6 relative">
                    <div className="absolute -inset-2 bg-beige rounded-sm rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative z-10 text-terracotta">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-3 group-hover:text-terracotta transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-cement leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
            <div className="w-2 shrink-0 md:hidden"></div>
          </div>

          {/* --- CONTROLES MOBILE (Seta + Barra de Progresso) --- */}
          <div className="flex flex-col gap-4 mt-6 md:hidden px-2">
            
            {/* Botões de Navegação */}
            <div className="flex items-center justify-between">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-3 rounded-sm border transition-all duration-300 ${!canScrollLeft ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-terracotta text-terracotta hover:bg-terracotta hover:text-white'}`}
              >
                <IconArrowLeft size={20} />
              </button>
              
              <span className="text-xs font-bold uppercase tracking-widest text-cement">
                Deslize para ver mais
              </span>

              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-3 rounded-sm border transition-all duration-300 ${!canScrollRight ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-terracotta text-terracotta hover:bg-terracotta hover:text-white'}`}
              >
                <IconArrowRight size={20} />
              </button>
            </div>

            {/* Barra de Progresso Fina */}
            <div className="w-full h-[2px] bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-terracotta transition-all duration-300 ease-out"
                style={{ width: `${Math.max(scrollProgress, 15)}%` }} 
              />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Features;