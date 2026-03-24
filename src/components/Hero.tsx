import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="px-6 md:px-10 pt-32 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-bold tracking-widest uppercase text-xs mb-6 block"
        >
          Capabilities & Expertise
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-text-main font-bold tracking-tighter"
        >
          ENGINEERED <br /> 
          <span className="text-text-muted opacity-50">PRECISION.</span>
        </motion.h1>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="lg:col-span-4 pb-4"
      >
        <p className="text-text-muted text-lg leading-relaxed max-w-sm">
          Monolith is an industrial design consultancy bridging the gap between physical mass and digital fluidity. We build for the next century of hardware.
        </p>
      </motion.div>
    </section>
  );
};
