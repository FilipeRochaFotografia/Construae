import React from 'react';
// Substituindo Lucide pelos ícones centralizados e leves
import { IconMapPin, IconPhone, IconInstagram, IconArrowUp } from '../components/ui/Icons';

const GoogleMapEmbed = () => {
  // LINK ATUALIZADO PARA O ENDEREÇO EXATO
  const mapLink = "https://maps.app.goo.gl/T9CJHnPUjmThaGvn7";

  return (
    <a 
      href={mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative w-full h-[300px] md:h-[400px] bg-charcoal rounded-sm overflow-hidden border border-white/10 shadow-2xl mb-12 group cursor-pointer"
    >
      {/* 
         IMAGEM DO MAPA - OTIMIZADA
         Lazy loading para não pesar no carregamento inicial da página
      */}
      <img 
        src="https://i.ibb.co/ymkQr7N3/Mapa.png" 
        alt="Localização Construaê" 
        width="600"
        height="400"
        loading="lazy"
        className="w-full h-full object-cover transition-all duration-700 filter grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105"
      />

      {/* Overlay Sutil */}
      <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-500"></div>
      
      {/* Botão Visual no Canto */}
      <div className="absolute bottom-5 right-5 z-20">
        <div className="bg-terracotta text-white px-5 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest shadow-lg group-hover:bg-terracotta-dark transition-colors border border-white/10 flex items-center gap-2">
          <IconMapPin size={14} />
          Ver no GPS
        </div>
      </div>
    </a>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cement pt-20 pb-10 border-t-4 border-terracotta relative overflow-hidden">
      
      {/* Texture Background */}
      <div className="absolute inset-0 bg-black/20 opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Seção Superior */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 border-b border-white/5 pb-12">
            <div className="flex flex-col justify-center">
                 <h3 className="text-white font-bold text-2xl md:text-3xl mb-6 uppercase tracking-wide">
                    Do esboço à realidade: <br/> <span className="text-terracotta">Vamos começar?</span>
                 </h3>
                 <p className="text-cement mb-8 max-w-md leading-relaxed">
                    Entre em contato para agendar uma reunião técnica no nosso escritório ou solicitar um orçamento.
                 </p>
                 
                 <a 
                    href="https://wa.me/5577988098956" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white border border-white/20 px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-terracotta hover:border-terracotta transition-all duration-300 w-fit rounded-sm"
                 >
                    <IconPhone size={18} />
                    Fale com a gente
                 </a>
            </div>
            <div>
                <GoogleMapEmbed />
            </div>
        </div>

        {/* Seção Inferior */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
              <img 
                src="https://i.ibb.co/xxtCXrF/logo-2.png" 
                alt="Construaê Logo" 
                width="40"
                height="40"
                loading="lazy"
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-wide leading-none">Construa<span className="text-terracotta">ê</span></span>
                <span className="text-[0.55rem] uppercase tracking-[0.15em] text-cement/60 font-medium leading-none mt-1">Arquitetura e Engenharia</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-terracotta pl-3">Menu</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-terracotta transition-colors block">Início</a></li>
              <li><a href="#services" className="hover:text-terracotta transition-colors block">Nossos Serviços</a></li>
              <li><a href="#team" className="hover:text-terracotta transition-colors block">Quem Somos</a></li>
              <li><a href="#portfolio" className="hover:text-terracotta transition-colors block">Projetos</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-terracotta pl-3">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <IconMapPin className="w-5 h-5 text-terracotta shrink-0 group-hover:text-white transition-colors mt-1" />
                <span>
                  Ed. Gil Moreira - Sala 5<br/>
                  Praça Gil Moreira, 01<br/>
                  Recreio, Vitória da Conquista - BA
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <IconPhone className="w-5 h-5 text-terracotta shrink-0 group-hover:text-white transition-colors" />
                <a href="https://wa.me/5577988098956" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  (77) 98809-8956
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <IconInstagram className="w-5 h-5 text-terracotta shrink-0 group-hover:text-white transition-colors" />
                <a href="https://www.instagram.com/constru.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @constru.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Expediente */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-terracotta pl-3">Expediente</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Segunda - Sexta</span>
                <span className="text-white font-medium">08:00 – 18:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sábado</span>
                <span className="text-white font-medium">08:00 – 12:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cement/60 uppercase tracking-wider">
          <p>&copy; {currentYear} Construaê Arquitetura e Engenharia. Todos os direitos reservados.</p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 hover:text-terracotta transition-colors font-bold group"
          >
            Voltar ao topo 
            <IconArrowUp size={14} className="group-hover:-translate-y-1 transition-transform text-terracotta" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;