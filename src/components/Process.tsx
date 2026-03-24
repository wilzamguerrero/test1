import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_PHASES } from '../types';
import { Ruler, Cpu, CheckCircle } from 'lucide-react';

const icons: Record<string, any> = {
  Architecture: Ruler,
  ModelTraining: Cpu,
  Verified: CheckCircle
};

export const Process: React.FC = () => {
  return (
    <section className="bg-surface py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-headline text-5xl md:text-7xl font-bold tracking-tighter"
          >
            THE <br /> PROCESS.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-muted max-w-md font-mono uppercase text-[10px] tracking-widest leading-loose"
          >
            Our methodology is subtractive. We remove the noise until only the essential structure remains. Precision is not an option; it is our foundation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-outline">
          {PROCESS_PHASES.map((phase, index) => {
            const Icon = icons[phase.icon];
            return (
              <motion.div 
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`py-16 ${index === 0 ? 'pr-12 lg:border-r' : index === 1 ? 'px-12 lg:border-r bg-background/30' : 'pl-12'} border-outline group`}
              >
                <div className="mb-12 flex justify-between items-center">
                  <span className="text-primary font-black text-2xl">{phase.number}</span>
                  <Icon className="text-text-muted opacity-30 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
                <h4 className="font-headline text-2xl mb-4">{phase.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
