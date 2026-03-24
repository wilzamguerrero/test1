export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  variant: 'dark' | 'orange' | 'image';
}

export interface ProcessPhase {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ArchiveItem {
  id: string;
  number: string;
  category: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'product-design',
    number: '01',
    title: 'Product Design',
    description: 'From initial sketch to CAD-ready assemblies. We focus on materiality, ergonomics, and structural integrity.',
    tags: ['Rapid Prototyping', 'CMF Strategy', 'DFM Analysis'],
    variant: 'dark'
  },
  {
    id: 'industrial-ui',
    number: '02',
    title: 'Industrial UI',
    description: 'Designing the software that powers the hardware. Complex interfaces for high-stakes industrial environments.',
    variant: 'orange'
  },
  {
    id: 'design-strategy',
    number: '03',
    title: 'Design Strategy',
    description: 'Aligning market needs with manufacturing reality to define the next generation of industrial monoliths.',
    variant: 'dark'
  },
  {
    id: 'aesthetic-permanence',
    number: '04',
    title: 'Aesthetic Permanence',
    description: 'Visual Identity for Hardware',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    variant: 'image'
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: 'PHASE I',
    title: 'Discovery & Blueprint',
    description: 'Audit of existing technical constraints and market mapping. We define the \'Monolith\' before we sketch it.',
    icon: 'Architecture'
  },
  {
    number: 'PHASE II',
    title: 'Machined Iteration',
    description: 'Rapid 3D modeling and high-fidelity rendering. We test form factors against ergonomic mandates.',
    icon: 'ModelTraining'
  },
  {
    number: 'PHASE III',
    title: 'Industrial Handover',
    description: 'Production-ready CAD files and UI systems integrated with hardware specs. Ready for the floor.',
    icon: 'Verified'
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'v9-series',
    number: '01',
    category: 'Heavy Robotics',
    year: '2024',
    title: 'V-9 SERIES CORE',
    description: 'Structural chassis for autonomous mining drones operating in high-pressure subterranean environments.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'mk-iv-turbine',
    number: '02',
    category: 'Propulsion',
    year: '2023',
    title: 'MK-IV TURBINE',
    description: 'Direct injection housing for sub-orbital delivery systems.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'iso-cell-ti',
    number: '03',
    category: 'Materials',
    year: '2023',
    title: 'ISO-CELL TI',
    description: 'Titanium cellular mesh developed for ballistic shielding.',
    image: 'https://images.unsplash.com/photo-1558444479-c8f02e627c05?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'obsidian-shell',
    number: '04',
    category: 'Architecture',
    year: '2022',
    title: 'OBSIDIAN SHELL',
    description: 'Monolithic research facility designed for the Arctic Circle, utilizing thermal mass as a primary structural driver.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
  }
];
