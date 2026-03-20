import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Sunny Day App',
      description: 'A beautiful weather application with smooth animations and accurate forecasts.',
      image: 'https://picsum.photos/seed/sunny/600/400',
      tags: ['React', 'Tailwind', 'API'],
      color: 'bg-secondary/20',
      text: 'text-secondary',
    },
    {
      title: 'Pink Blossom',
      description: 'An elegant e-commerce platform for boutique floral arrangements.',
      image: 'https://picsum.photos/seed/blossom/600/400',
      tags: ['Next.js', 'Stripe', 'Framer'],
      color: 'bg-primary/20',
      text: 'text-primary',
    },
    {
      title: 'Green Leaf',
      description: 'A minimalist habit tracker to help you grow your daily routines.',
      image: 'https://picsum.photos/seed/leaf/600/400',
      tags: ['Vue', 'Firebase', 'PWA'],
      color: 'bg-accent/20',
      text: 'text-accent',
    },
  ];

  return (
    <div className="py-12 md:py-24">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-foreground"
      >
        My <span className="text-primary">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href="#" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </a>
                <a href="#" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
              <p className="text-foreground/70 mb-6 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${project.color} ${project.text}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
