import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ArrowUpRight, MapPin, Ruler, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Dados do Portfólio - Limitado a 4 Projetos
const projects = [
  {
    id: 1,
    title: "Projeto de Interiores: Quarto e Closet",
    category: "Residencial",
    location: "Alphaville",
    area: "64m²",
    year: "2024",
    image: "https://i.ibb.co/pjDfJ6dz/Exemplo-1-1.png"
  },
  {
    id: 2,
    title: "Locadora de Motos TR Aluguéis",
    category: "Interiores",
    location: "Felicia",
    area: "85m²",
    year: "2024",
    image: "https://i.ibb.co/tMM1LPZR/Depois.png"
  },
  {
    id: 3,
    title: "Projeto de Área gourmet",
    category: "Residencial",
    location: "Candeias",
    area: "42m²",
    year: "2024",
    image: "https://i.ibb.co/QFgQ98MF/Exemplo-2-2.png"
  },
  {
    id: 4,
    title: "Fachada Residencial",
    category: "Residencial",
    location: "Irecê - BA",
    area: "60m²",
    year: "2023",
    image: "https://i.ibb.co/rr7WGvK/Exemplo-3-1.png"
  }
];

const SocialProof = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const currentIndex = selectedId ? projects.findIndex(p => p.id === selectedId) : 0;

  const nextProject = useCallback(() => {
    if (selectedId === null) return;
    const newIndex = (currentIndex + 1) % projects.length;
    setSelectedId(projects[newIndex].id);
  }, [currentIndex, selectedId]);

  const prevProject = useCallback(() => {
    if (selectedId === null) return;
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedId(projects[newIndex].id);
  }, [currentIndex, selectedId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'Escape') setSelectedId(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, nextProject, prevProject]);

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50; 
    if (info.offset.x < -threshold) {
      nextProject();
    } else if (info.offset.x > threshold) {
      prevProject();
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-beige relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-technical-grid opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
               <span className="w-8 h-[2px] bg-terracotta"></span>
               <span className="text-terracotta font-bold uppercase tracking-widest text-xs">Portfólio Selecionado</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-charcoal">
              Transformando espaços,<br />concretizando sonhos.
            </motion.h2>
          </div>
          
          <motion.div variants={fadeInUp}>
             <a 
               href="https://www.instagram.com/constru.ae/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-charcoal font-bold uppercase tracking-widest border-b-2 border-terracotta pb-1 hover:text-terracotta transition-colors text-xs md:text-sm"
             >
               Ver mais no Instagram <ArrowUpRight className="w-4 h-4" />
             </a>
          </motion.div>
        </motion.div>

        {/* 
            GALLERY GRID - MODIFICADO 
            lg:grid-cols-4 -> Coloca 4 itens na mesma linha em telas grandes
        */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              layoutId={`project-container-${project.id}`} 
              variants={fadeInUp}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer"
            >
              {/* Image Container - Aspect Ratio mantido mas menor devido ao grid */}
              <div className="relative overflow-hidden aspect-[3/4] bg-charcoal rounded-sm mb-4 border-b-4 border-transparent group-hover:border-terracotta transition-all duration-300">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                
                <motion.img 
                  layoutId={`project-image-${project.id}`}
                  src={project.image} 
                  alt={project.title} 
                  width="600"
                  height="800"
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Info on Hover */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent">
                  <div className="flex gap-3 text-white/80 text-[10px] font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><MapPin size={10}/> {project.location}</span>
                    <span className="flex items-center gap-1"><Ruler size={10}/> {project.area}</span>
                  </div>
                </div>
              </div>
              
              {/* Text Info */}
              <div>
                <span className="text-terracotta text-[10px] font-bold uppercase tracking-widest block mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-terracotta" />
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* LIGHTBOX / MODAL */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Botão Fechar */}
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navegação */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevProject(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/20 hover:bg-terracotta text-white rounded-full transition-colors hidden md:flex"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); nextProject(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/20 hover:bg-terracotta text-white rounded-full transition-colors hidden md:flex"
            >
              <ChevronRight size={32} />
            </button>

            {/* Imagem Ampliada */}
            <motion.div 
              layoutId={`project-container-${selectedId}`}
              className="relative w-full max-w-5xl aspect-[4/5] md:aspect-video bg-black rounded-sm overflow-hidden shadow-2xl"
            >
              <motion.img 
                key={selectedId}
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title}
                className="w-full h-full object-contain bg-black cursor-grab active:cursor-grabbing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
              />

              {/* Legenda */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 md:p-10 pointer-events-none">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2 block">
                    {projects[currentIndex].category} — {projects[currentIndex].year}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <div className="flex gap-6 text-white/70 text-sm">
                     <span className="flex items-center gap-2"><MapPin size={16}/> {projects[currentIndex].location}</span>
                     <span className="flex items-center gap-2"><Ruler size={16}/> {projects[currentIndex].area}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-widest md:hidden animate-pulse">
               Deslize para navegar
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SocialProof;