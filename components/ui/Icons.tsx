import React from 'react';

// Interface padrão
interface IconProps {
  size?: number;
  className?: string;
}

// Wrapper padrão (ViewBox 24x24)
const IconBase = ({ size = 24, className, children }: IconProps & { children: React.ReactNode }) => (
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
    {children}
  </svg>
);

// --- NAVEGAÇÃO & UI ---

export const IconArrowRight = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconBase>
);

export const IconArrowLeft = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </IconBase>
);

export const IconArrowUp = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </IconBase>
);

export const IconArrowUpRight = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </IconBase>
);

export const IconChevronLeft = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m15 18-6-6 6-6" />
  </IconBase>
);

export const IconChevronRight = (props: IconProps) => (
  <IconBase {...props}>
    <path d="m9 18 6-6-6-6" />
  </IconBase>
);

export const IconPlus = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </IconBase>
);

export const IconMinus = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
  </IconBase>
);

export const IconX = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 18 18" />
  </IconBase>
);

export const IconLoader2 = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </IconBase>
);

export const IconHelpCircle = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </IconBase>
);

// --- SERVIÇOS E TÉCNICOS ---

// Compasso (Arquitetura)
export const IconDraftingCompass = (props: IconProps) => (
  <IconBase {...props} strokeWidth="1.5">
    <circle cx="12" cy="5" r="2" />
    <path d="m4.74 20.31 5.38-11.53" />
    <path d="m19.26 20.31-5.38-11.53" />
    <path d="M8 17h8" />
  </IconBase>
);

// Box (3D/Modelagem)
export const IconBox = (props: IconProps) => (
  <IconBase {...props} strokeWidth="1.5">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="M3.27 6.96 12 12.01l8.73-5.05" />
    <path d="M12 22.08V12" />
  </IconBase>
);

export const IconArmchair = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
    <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
    <path d="M5 18v2" />
    <path d="M19 18v2" />
  </IconBase>
);

export const IconBrickWall = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
    <path d="M9 9v6" />
    <path d="M15 3v6" />
    <path d="M15 15v6" />
  </IconBase>
);

export const IconFileText = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </IconBase>
);

export const IconHardHat = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
    <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
    <path d="M14 6h0a6 6 0 0 1 6 6v3" />
  </IconBase>
);

export const IconFileCheck = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m9 15 2 2 4-4" />
  </IconBase>
);

export const IconFuel = (props: IconProps) => (
  <IconBase {...props}>
    <line x1="3" x2="15" y1="22" y2="22" />
    <path d="M4 9h10" />
    <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
    <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
  </IconBase>
);

export const IconRuler = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0l-2.6-2.6a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0Z" />
    <path d="m2 2 7.29 7.29" />
    <path d="M12 7 8 11" />
    <path d="m8 11 6 6" />
    <path d="M4 15 2 17l1 4 4 1 2-2" />
    <path d="m10 21 4-4" />
    <path d="m2 17 6 6" />
  </IconBase>
);

// --- REDES SOCIAIS & CONTATO ---

export const IconInstagram = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </IconBase>
);

export const IconMapPin = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);

export const IconPhone = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </IconBase>
);

export const IconMail = (props: IconProps) => (
  <IconBase {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconBase>
);