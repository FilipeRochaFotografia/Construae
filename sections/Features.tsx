import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';
import Card from '../components/ui/Card';
// Importação Centralizada (Caminho Relativo ../)
import { 
  IconDraftingCompass, 
  IconArmchair, 
  IconBrickWall, 
  IconFileText, 
  IconBox, 
  IconHardHat, 
  IconFileCheck, 
  IconFuel, 
  IconArrowLeft, 
  IconArrowRight 
} from '../components/ui/Icons';

const services = [
  // Usando os ícones importados (limpos e geométricos)
  { id: 1, icon: <IconDraftingCompass className="w-8 h-8" />, title: "Projetos Arquitetônicos", description: "Concepção completa para espaços residenciais, comerciais e industriais, unindo estética e função." },
  { id: 2, icon: <IconArmchair className="w-8 h-8" />, title: "Interiores", description: "Design de ambientes que refletem sua personalidade, com detalhamento de marcenaria e decoração." },
  { id: 3, icon: <IconBrickWall className="w-8 h-8" />, title: "Estrutural", description: "Cálculo e dimensionamento estrutural para garantir a segurança e estabilidade da sua edificação." },
  { id: 4, icon: <IconFileText className="w-8 h-8" />, title: "Executivo e Complementares", description: "Detalhamento técnico profundo (elétrico, hidráulico) para evitar erros e desperdícios na obra." },
  { id: 5, icon: <IconBox className="w-8 h-8" />, title: "Modelagem 3D", description: "Visualização realista do seu projeto antes da construção, facilitando o entendimento e ajustes." },
  { id: 6, icon: <IconHardHat className="w-8 h-8" />, title: "Acompanhamento de Obras", description: "Gestão técnica e fiscalização da execução para garantir fidelidade ao projeto e cumprimento de prazos." },
  { id: 7, icon: <IconFileCheck className="w-8 h-8" />, title: "Regularização de Imóveis", description: "Consultoria completa para aprovação em prefeituras, alvarás, habite-se e averbações." },
  { id: 8, icon: <IconFuel className="w-8 h-8" />, title: "Postos de Gasolina", description: "Especialização em projetos e adequações normativas para postos de serviços e combustíveis." }
];

const Features = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Monitora o scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Navegação
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