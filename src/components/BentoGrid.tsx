import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../types';
import { Cpu } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="px-6 md:px-10 mb-48">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-auto">
        {SERVICES.map((service, index) => {
          if (service.variant === 'dark') {
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${service.id === 'design-strategy' ? 'md:col-span-4 lg:col-span-2' : 'md:col-span-2 lg:col-span-3'} bg-surface p-12 flex flex-col justify-between group overflow-hidden relative min-h-[400px]`}
              >
                <div className="relative z-10">
                  <span className="text-primary font-black text-6xl mb-4 block">{service.number}</span>
                  <h3 className="font-headline text-4xl font-bold mb-6">{service.title}</h3>
                  <p className="text-text-muted max-w-xs leading-relaxed">{service.description}</p>
                </div>
                {service.tags && (
                  <div className="mt-12 relative z-10">
                    <ul className="space-y-3 font-mono text-[10px] uppercase tracking-widest text-text-main">
                      {service.tags.map(tag => (
                        <li key={tag} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary"></span> {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Cpu size={200} />
                </div>
              </motion.div>
            );
          }

          if (service.variant === 'orange') {
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="md:col-span-2 lg:col-span-3 bg-primary p-12 flex flex-col justify-between text-white group min-h-[400px]"
              >
                <div>
                  <span className="text-primary-muted font-black text-6xl mb-4 block">{service.number}</span>
                  <h3 className="font-headline text-4xl font-bold mb-6">{service.title}</h3>
                  <p className="text-white/80 max-w-xs leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-12">
                  <button className="border border-white px-6 py-3 uppercase font-bold tracking-widest text-[10px] hover:bg-white hover:text-primary transition-colors">
                    View Systems
                  </button>
                </div>
              </motion.div>
            );
          }

          if (service.variant === 'image') {
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="md:col-span-4 lg:col-span-4 relative overflow-hidden group min-h-[400px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={service.image} 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-10 left-10 z-20">
                  <h3 className="font-headline text-3xl font-bold">{service.title}</h3>
                  <p className="text-text-muted text-xs uppercase tracking-widest mt-2">{service.description}</p>
                </div>
              </motion.div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
};
