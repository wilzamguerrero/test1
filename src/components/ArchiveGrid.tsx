import React from 'react';
import { motion } from 'motion/react';
import { ARCHIVE_ITEMS } from '../types';
import { ArrowRight } from 'lucide-react';

export const ArchiveGrid: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <header className="mb-24 max-w-5xl">
        <div className="flex items-center space-x-4 mb-6">
          <span className="w-12 h-[1px] bg-primary"></span>
          <span className="font-mono uppercase tracking-[0.3em] text-[10px] text-primary">Systems Archive</span>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-bold text-text-main mb-8 leading-tight">
          PRECISION <br /> CHRONOLOGY.
        </h1>
        <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
          A documented lineage of industrial breakthroughs. From tactical hardware to kinetic structures, these entries represent our commitment to the uncompromising monolith.
        </p>
      </header>

      <div className="flex flex-wrap gap-4 mb-16 border-b border-outline pb-8">
        {['All Works', 'Machinery', 'Aerospace', 'Robotics', 'Tactical'].map((cat, i) => (
          <button 
            key={cat}
            className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-surface text-text-muted hover:text-text-main'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Project 01 - Large Featured */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 group cursor-pointer"
        >
          <div className="relative overflow-hidden aspect-[16/9] mb-6 bg-surface">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100" 
              src={ARCHIVE_ITEMS[0].image} 
              alt={ARCHIVE_ITEMS[0].title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 right-0 bg-primary p-6">
              <span className="text-white font-black text-2xl">{ARCHIVE_ITEMS[0].number}</span>
            </div>
          </div>
          <div className="-mt-12 ml-10 relative z-10 bg-background p-8 max-w-md border-b-2 border-primary">
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-2 block">
              {ARCHIVE_ITEMS[0].category} / {ARCHIVE_ITEMS[0].year}
            </span>
            <h3 className="font-headline text-3xl font-bold mb-4">{ARCHIVE_ITEMS[0].title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{ARCHIVE_ITEMS[0].description}</p>
          </div>
        </motion.div>

        {/* Project 02 - Vertical */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 group cursor-pointer pt-20"
        >
          <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-surface">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70 group-hover:opacity-100" 
              src={ARCHIVE_ITEMS[1].image} 
              alt={ARCHIVE_ITEMS[1].title}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="px-2">
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-2 block">
              {ARCHIVE_ITEMS[1].category} / {ARCHIVE_ITEMS[1].year}
            </span>
            <h3 className="font-headline text-2xl font-bold mb-4">{ARCHIVE_ITEMS[1].title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{ARCHIVE_ITEMS[1].description}</p>
          </div>
        </motion.div>

        {/* Project 03 - Square */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4 group cursor-pointer"
        >
          <div className="relative overflow-hidden aspect-square mb-6 bg-surface">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70 group-hover:opacity-100" 
              src={ARCHIVE_ITEMS[2].image} 
              alt={ARCHIVE_ITEMS[2].title}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="px-2">
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-2 block">
              {ARCHIVE_ITEMS[2].category} / {ARCHIVE_ITEMS[2].year}
            </span>
            <h3 className="font-headline text-2xl font-bold mb-4">{ARCHIVE_ITEMS[2].title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{ARCHIVE_ITEMS[2].description}</p>
          </div>
        </motion.div>

        {/* Project 04 - Offset Large */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-8 group cursor-pointer md:-mt-24"
        >
          <div className="relative overflow-hidden aspect-[16/10] mb-6 bg-surface">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70 group-hover:opacity-100" 
              src={ARCHIVE_ITEMS[3].image} 
              alt={ARCHIVE_ITEMS[3].title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
          </div>
          <div className="ml-auto mr-10 relative z-10 bg-surface p-8 max-w-lg border-l-4 border-primary">
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary mb-2 block">
              {ARCHIVE_ITEMS[3].category} / {ARCHIVE_ITEMS[3].year}
            </span>
            <h3 className="font-headline text-3xl font-bold mb-4">{ARCHIVE_ITEMS[3].title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{ARCHIVE_ITEMS[3].description}</p>
          </div>
        </motion.div>

        {/* Case Study Feature */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div className="order-2 md:order-1">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">Case Study 08</h4>
            <h3 className="font-headline text-5xl font-bold mb-6 text-text-main">KINETIC <br /> INTERFACE</h3>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Rethinking the tactile response of heavy control panels. We engineered a switch system that utilizes magnetic resistance to provide absolute operator certainty.
            </p>
            <button className="flex items-center space-x-4 group text-text-main">
              <span className="font-bold text-[10px] uppercase tracking-widest border-b border-primary pb-1">Read Protocol</span>
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" size={16} />
            </button>
          </div>
          <div className="order-1 md:order-2 bg-surface p-1">
            <img 
              className="w-full h-full object-cover grayscale" 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
              alt="Circuit Board"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Capabilities Deck CTA */}
      <section className="mt-40 bg-gradient-to-r from-primary-muted to-primary p-20 text-center flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-8 max-w-3xl">READY TO ENGINEER THE FUTURE?</h2>
        <button className="bg-white text-primary px-12 py-5 font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all">
          Download Capabilities Deck
        </button>
      </section>
    </div>
  );
};
