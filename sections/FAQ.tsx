import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const faqs = [
  {
    question: "Como funciona a regularização de um imóvel?",
    answer: "O processo envolve a análise da documentação atual, levantamento técnico no local e elaboração de projeto legal para aprovação na Prefeitura. Cuidamos de todas as etapas: Alvará de Construção, Habite-se e averbação em cartório."
  },
  {
    question: "Vocês realizam a execução completa da obra?",
    answer: "Sim! Trabalhamos no modelo 'Chave na Mão' ou Administração. Gerenciamos a compra de materiais, cronograma e mão de obra, garantindo que o executado seja fiel ao projeto e dentro do orçamento estipulado."
  },
  {
    question: "Qual o prazo médio para entrega de um projeto?",
    answer: "O prazo varia conforme a complexidade (residencial, comercial ou reforma). Em média, um projeto arquitetônico completo leva de 30 a 45 dias úteis, incluindo as etapas de estudo preliminar, anteprojeto e projeto executivo."
  },
  {
    question: "É possível contratar apenas o projeto de interiores?",
    answer: "Com certeza. Se o imóvel já está construído, desenvolvemos todo o design de interiores, luminotécnico, detalhamento de marcenaria e decoração para transformar o ambiente."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white">
      
      {/* Elementos de Fundo - Grid Técnico Discreto */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-beige to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-technical-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
             <HelpCircle className="w-5 h-5 text-terracotta" />
             <span className="text-terracotta font-bold uppercase tracking-widest text-xs">Suporte Técnico</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Perguntas Frequentes
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-charcoal/70">
            Entenda como transformamos seu projeto em realidade.
          </motion.p>
        </motion.div>

        {/* Accordion List - Estilo Técnico/Minimalista */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  border rounded-sm overflow-hidden transition-all duration-300 transform-gpu
                  ${isActive 
                    ? 'bg-beige/30 border-terracotta shadow-sm' 
                    : 'bg-white border-cement/20 hover:border-terracotta/30'
                  }
                `}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  aria-expanded={isActive}
                >
                  <span className={`font-bold text-sm md:text-base uppercase tracking-wide transition-colors ${isActive ? 'text-charcoal' : 'text-charcoal/80 group-hover:text-charcoal'}`}>
                    {item.question}
                  </span>
                  <span className={`
                    p-1 rounded-sm transition-colors shrink-0 ml-4 border
                    ${isActive ? 'bg-terracotta border-terracotta text-white' : 'bg-transparent border-cement/30 text-cement group-hover:border-terracotta group-hover:text-terracotta'}
                  `}>
                    {isActive ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-charcoal/70 leading-relaxed text-sm md:text-base border-t border-terracotta/10 mt-2">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;