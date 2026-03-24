import React from 'react';
import { Settings, Hammer } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-10 py-20 w-full border-t border-outline">
      <div>
        <div className="text-lg font-black text-text-main mb-6 font-headline">MONOLITH</div>
        <p className="text-primary-muted font-sans tracking-widest uppercase text-[10px] max-w-xs leading-loose">
          ARCHITECTURAL UTILITY. INDUSTRIAL SCALE. ENGINEERED TO LAST LONGER THAN THE BUILDINGS THEY INHABIT.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-sans tracking-widest uppercase text-[10px]">Index</span>
          <a className="text-primary-muted font-sans tracking-widest uppercase text-[10px] hover:text-text-main transition-colors" href="#">Archive</a>
          <a className="text-primary-muted font-sans tracking-widest uppercase text-[10px] hover:text-text-main transition-colors" href="#">Privacy</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-primary font-sans tracking-widest uppercase text-[10px]">Methods</span>
          <a className="text-primary-muted font-sans tracking-widest uppercase text-[10px] hover:text-text-main transition-colors" href="#">Process</a>
          <a className="text-primary-muted font-sans tracking-widest uppercase text-[10px] hover:text-text-main transition-colors" href="#">Labs</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-primary font-sans tracking-widest uppercase text-[10px]">Social</span>
          <a className="text-primary-muted font-sans tracking-widest uppercase text-[10px] hover:text-text-main transition-colors" href="#">Instagram</a>
          <a className="text-primary-muted font-sans tracking-widest uppercase text-[10px] hover:text-text-main transition-colors" href="#">LinkedIn</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-primary font-sans tracking-widest uppercase text-[10px]">Contact</span>
          <a className="text-primary-muted font-sans tracking-widest uppercase text-[10px] hover:text-text-main transition-colors" href="#">Berlin</a>
          <a className="text-primary-muted font-sans tracking-widest uppercase text-[10px] hover:text-text-main transition-colors" href="#">New York</a>
        </div>
      </div>
      
      <div className="md:col-span-2 pt-12 border-t border-outline flex justify-between items-center">
        <p className="text-primary-muted font-sans tracking-widest uppercase text-[10px]">© 2024 MONOLITH INDUSTRIAL. ENGINEERED PRECISION.</p>
        <div className="flex gap-4">
          <Settings className="text-text-muted opacity-30" size={16} />
          <Hammer className="text-text-muted opacity-30" size={16} />
        </div>
      </div>
    </footer>
  );
};
