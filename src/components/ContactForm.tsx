import React from 'react';
import { motion } from 'motion/react';

export const ContactForm: React.FC = () => {
  return (
    <section className="px-6 md:px-10 py-32 bg-surface" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">New Projects</span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold">BEGIN THE <br /> BUILD.</h2>
        </div>
        
        <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2 group-focus-within:text-primary transition-colors">Client Identity</label>
              <input 
                className="w-full bg-transparent border-b border-outline focus:ring-0 focus:border-primary placeholder:text-text-muted/20 text-lg py-4 transition-all outline-none" 
                placeholder="FULL NAME" 
                type="text" 
              />
            </div>
            <div className="relative group">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2 group-focus-within:text-primary transition-colors">Digital Channel</label>
              <input 
                className="w-full bg-transparent border-b border-outline focus:ring-0 focus:border-primary placeholder:text-text-muted/20 text-lg py-4 transition-all outline-none" 
                placeholder="EMAIL ADDRESS" 
                type="email" 
              />
            </div>
          </div>
          
          <div className="relative group">
            <label className="block text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2 group-focus-within:text-primary transition-colors">Project Scope</label>
            <select className="w-full bg-transparent border-b border-outline focus:ring-0 focus:border-primary text-lg py-4 transition-all appearance-none cursor-pointer outline-none">
              <option className="bg-surface">PRODUCT DESIGN</option>
              <option className="bg-surface">UI/UX SYSTEMS</option>
              <option className="bg-surface">FULL SCALE DEVELOPMENT</option>
              <option className="bg-surface">CONSULTATION</option>
            </select>
          </div>
          
          <div className="relative group">
            <label className="block text-[10px] uppercase tracking-[0.3em] text-text-muted mb-2 group-focus-within:text-primary transition-colors">Inquiry Details</label>
            <textarea 
              className="w-full bg-transparent border-b border-outline focus:ring-0 focus:border-primary placeholder:text-text-muted/20 text-lg py-4 transition-all resize-none outline-none" 
              placeholder="DESCRIBE THE SPECIFICATIONS" 
              rows={4}
            ></textarea>
          </div>
          
          <div className="flex justify-center pt-10">
            <motion.button 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-16 py-6 font-black uppercase tracking-[0.4em] text-xs shadow-2xl transition-transform"
              type="submit"
            >
              TRANSMIT INQUIRY
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};
