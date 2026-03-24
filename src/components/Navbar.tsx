import React from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'archive') => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-10 py-6 border-b border-outline">
      <div 
        className="text-2xl font-bold tracking-tighter text-text-main font-headline cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        MONOLITH
      </div>
      
      <div className="hidden md:flex gap-12">
        <button 
          onClick={() => onNavigate('archive')}
          className={`font-medium tracking-widest uppercase text-[10px] transition-all duration-300 hover:text-primary ${currentPage === 'archive' ? 'text-primary border-b border-primary' : 'text-text-muted'}`}
        >
          Work
        </button>
        <button 
          onClick={() => onNavigate('home')}
          className={`font-medium tracking-widest uppercase text-[10px] transition-all duration-300 hover:text-primary ${currentPage === 'home' ? 'text-primary border-b border-primary' : 'text-text-muted'}`}
        >
          Services
        </button>
        <button className="text-text-muted font-medium tracking-widest uppercase text-[10px] hover:text-primary transition-all duration-300">
          About
        </button>
        <button className="text-text-muted font-medium tracking-widest uppercase text-[10px] hover:text-primary transition-all duration-300">
          Contact
        </button>
      </div>

      <motion.button 
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="bg-primary text-white px-6 md:px-8 py-3 font-bold uppercase tracking-widest text-[10px] transition-transform"
      >
        Inquire
      </motion.button>
    </nav>
  );
};
