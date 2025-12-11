import React, { useState, useEffect, Suspense, lazy } from 'react';
import Hero from './sections/Hero';

// Lazy Loading das seções
const Features = lazy(() => import('./sections/Features'));
const Team = lazy(() => import('./sections/Team'));
const SocialProof = lazy(() => import('./sections/SocialProof'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Footer = lazy(() => import('./sections/Footer'));

// --- ÍCONE SVG NATIVO (Substituindo Lucide para evitar erro de versão) ---
const IconInstagram = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
// -----------------------------------------------------------------------

const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center bg-white">
    <div className="w-2 h-2 bg-terracotta animate-pulse rounded-sm"></div>
  </div>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-screen bg-white text-charcoal font-sans selection:bg-terracotta selection:text-white overflow-x-hidden">
      
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] h-24
          ${isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20' 
            : 'bg-transparent border-b border-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full flex items-center justify-between">
          
          {/* Logo Area */}
          <div 
            className="flex items-center gap-3 md:gap-4 cursor-pointer group"
            onClick={(e) => handleScrollTo(e, 'home')}
          >
            {/* Novo Logo */}
            <img 
              src="https://i.ibb.co/xxtCXrF/logo-2.png" 
              alt="Construaê Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Texto da Marca */}
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-bold text-charcoal tracking-wide leading-none">
                Construa<span className="text-terracotta">ê</span>
              </span>
              <span className="text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.15em] md:tracking-[0.2em] text-cement font-bold leading-none mt-1">
                Arquitetura e Engenharia
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-medium text-charcoal text-sm uppercase tracking-widest">
            {[
              { label: 'Início', id: 'home' },
              { label: 'Serviços', id: 'services' },
              { label: 'Quem Somos', id: 'team' },
              { label: 'Projetos', id: 'portfolio' },
            ].map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleScrollTo(e, link.id)}
                className="hover:text-terracotta transition-colors cursor-pointer relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a 
            href="https://www.instagram.com/constru.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 rounded-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105
              bg-terracotta text-white px-6 py-3 text-xs md:text-sm
            `}
          >
            {/* Usando o Ícone SVG Nativo */}
            <IconInstagram size={18} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </nav>

      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Team />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SocialProof />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>

    </main>
  );
}

export default App;