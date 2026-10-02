import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PROJECTS_DATA } from '../../data/content';
import type { ProjectCategory } from '../../types';
import { MapPin, Tag, Clock, ArrowUpRight, AlertCircle } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Opportunities', value: 'all' },
    { label: 'Land Acquisition', value: 'land' },
    { label: 'SRA Projects', value: 'sra' },
    { label: 'Redevelopment', value: 'redevelopment' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Portfolio & Pipeline"
          title="Projects & Opportunities"
          subtitle="A disciplined portfolio spanning strategic land holdings, municipal slum rehabilitation, and cooperative housing transformations."
          align="center"
          theme="light"
          className="mb-10 sm:mb-12"
        />

        {/* Client Transparency Notice Box */}
        <div className="max-w-2xl mx-auto mb-10 p-3.5 bg-burgundy/5 border border-gold/40 rounded-sm flex items-center justify-center gap-2.5 text-xs text-charcoal-secondary text-center">
          <AlertCircle className="w-4 h-4 text-gold-dark shrink-0" />
          <span>
            <strong>Editorial Notice:</strong> Project titles, geographical locations, and milestones below use clearly identified placeholders until final client-verified disclosures are provided.
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 rounded-xs cursor-pointer border ${
                  isActive
                    ? 'bg-burgundy text-white border-gold shadow-md'
                    : 'bg-white text-charcoal border-ivory-border hover:border-gold/60 hover:text-burgundy'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-sm overflow-hidden border border-ivory-border hover:border-gold shadow-subtle hover:shadow-luxury transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="relative h-64 overflow-hidden bg-burgundy-deep">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.9] group-hover:brightness-100"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-burgundy-deep/85 backdrop-blur-md text-gold text-[10px] uppercase tracking-widest font-semibold border border-gold/30 rounded-xs">
                      <Tag className="w-3 h-3 text-gold" />
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Status Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-burgundy-deep via-burgundy-deep/60 to-transparent flex items-center gap-2 text-ivory text-xs">
                    <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="font-light tracking-wide truncate">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-charcoal-secondary mb-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                      <span className="font-light truncate">{project.location}</span>
                    </div>

                    {/* Project Name */}
                    <h3 className="font-serif text-xl sm:text-2xl text-burgundy group-hover:text-burgundy-secondary transition-colors font-medium leading-snug">
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-xs sm:text-sm text-charcoal-secondary font-light leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-ivory-border flex items-center justify-between">
                    <span className="text-[11px] text-gold-dark font-medium italic">
                      [Placeholder Record]
                    </span>

                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-burgundy group-hover:text-gold-dark transition-colors cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
