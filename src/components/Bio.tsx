import React from 'react';
import { motion } from 'motion/react';

export const Bio: React.FC = () => {
  return (
    <section className="py-48 px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 -z-10"></div>
        <img 
          className="w-full grayscale filter brightness-75 hover:grayscale-0 transition-all duration-700" 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
          alt="Erik Vörst"
          referrerPolicy="no-referrer"
        />
        <div className="mt-8">
          <h4 className="font-headline text-3xl font-bold">Erik Vörst</h4>
          <p className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold mt-2">Principal Designer & Engineer</p>
        </div>
      </motion.div>

      <div className="space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-5xl font-bold leading-tight"
        >
          Design is an act of <span className="text-primary italic">resistance</span> against the temporary.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-6 text-text-muted leading-relaxed text-lg"
        >
          <p>With over 15 years in high-precision manufacturing and interface design, Erik leads Monolith with a philosophy of "Architectural Utility."</p>
          <p>His work has been featured in the Design Monograph Review and recognized with three Red Dot awards for industrial excellence. He believes that the objects we live with should be as permanent as the buildings we reside in.</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline">
          <div>
            <span className="text-text-main font-black block text-2xl">142+</span>
            <span className="text-text-muted text-[10px] uppercase tracking-widest">Products Launched</span>
          </div>
          <div>
            <span className="text-text-main font-black block text-2xl">08</span>
            <span className="text-text-muted text-[10px] uppercase tracking-widest">Global Patents</span>
          </div>
        </div>
      </div>
    </section>
  );
};
