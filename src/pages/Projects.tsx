import React from 'react';
import { motion } from 'motion/react';
import { Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Sunny Day App',
      description: 'A beautiful weather application with smooth animations and accurate forecasts. Built with a focus on fluid user experience and real-time data visualization.',
      image: 'https://picsum.photos/seed/sunny/800/600',
      tags: ['React', 'Tailwind', 'API'],
      gradient: 'from-blue-600 via-sky-500 to-cyan-400',
      tagClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20',
      buttonGradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Pink Blossom',
      description: 'An elegant e-commerce platform for boutique floral arrangements. Features seamless checkout and stunning product showcases.',
      image: 'https://picsum.photos/seed/blossom/600/600',
      tags: ['Next.js', 'Stripe', 'Framer'],
      gradient: 'from-rose-500 via-orange-500 to-amber-500',
      tagClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20',
      buttonGradient: 'from-rose-500 to-orange-500',
    },
    {
      title: 'Green Leaf',
      description: 'A minimalist habit tracker to help you grow your daily routines. Track your progress with beautiful, interactive charts.',
      image: 'https://picsum.photos/seed/leaf/600/600',
      tags: ['Vue', 'Firebase', 'PWA'],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      tagClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20',
      buttonGradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <div className="py-12 md:py-24 relative">
      {/* Background ambient glow for the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6 relative z-10"
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary/60 rounded-full" />
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl max-w-xl font-medium">
            A collection of my recent work, blending vibrant design with robust engineering to create unforgettable digital experiences.
          </p>
        </div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors group">
          View all projects 
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group ${isFeatured ? 'md:col-span-2' : ''}`}
            >
              {/* Vibrant Glowing Aura */}
              <div className={`absolute -inset-0.5 md:-inset-1 rounded-3xl blur-xl opacity-40 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r ${project.gradient} group-hover:scale-105`} />

              {/* Glass Card */}
              <div className={`relative h-full bg-background/90 dark:bg-background/80 backdrop-blur-2xl border border-foreground/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl overflow-hidden flex flex-col ${isFeatured ? 'p-5 sm:p-6 md:p-8 md:flex-row items-center gap-6 lg:gap-10' : 'p-5 sm:p-6 gap-5'}`}>
                
                {/* Image Container */}
                <div className={`relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-foreground/10 ${isFeatured ? 'w-full md:w-1/2 aspect-video' : 'w-full aspect-[2/1]'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Colorful Tags */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-lg text-xs font-bold border backdrop-blur-md shadow-sm ${project.tagClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Container */}
                <div className={`flex flex-col relative z-20 ${isFeatured ? 'w-full md:w-1/2' : 'w-full flex-grow'}`}>
                  <h3 className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} tracking-tight ${isFeatured ? 'mb-3 text-3xl lg:text-4xl' : 'mb-2 text-2xl'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-foreground/80 font-medium leading-relaxed ${isFeatured ? 'text-base mb-6' : 'text-sm mb-5'}`}>
                    {project.description}
                  </p>

                  <div className={`mt-auto flex items-center justify-between border-t border-foreground/10 ${isFeatured ? 'pt-6' : 'pt-5'}`}>
                    <a href="#" className={`rounded-xl text-white font-bold bg-gradient-to-r ${project.buttonGradient} shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 text-sm ${isFeatured ? 'px-5 py-2.5' : 'px-4 py-2'}`}>
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </a>
                    
                    <a href="#" className={`rounded-xl bg-foreground/5 hover:bg-foreground hover:text-background transition-colors duration-300 text-foreground ${isFeatured ? 'p-2.5' : 'p-2'}`}>
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="mt-16 text-center md:hidden">
        <a href="#" className="inline-flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors group">
          View all projects 
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </div>
  );
}
