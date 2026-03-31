import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import img9 from "../asset/img9.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full min-h-[80vh] gap-12 pt-12 md:pt-0">
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight"
        >
          Hi, I'm <span className="text-primary">Yashwant</span>
          <br />
          I build <span className="text-secondary underline decoration-wavy decoration-4 underline-offset-8">beautiful</span> things.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-10 leading-relaxed"
        >
          A creative developer crafting simple, eye-catching, and user-friendly digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1yN3rEEFjwA4ovASQKnbqbfiys4LLMAp6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30"
          >
            Resume <ExternalLink size={20} />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-card border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/10 hover:border-secondary hover:text-secondary transition-all"
          >
            Say hello
          </Link>
        </motion.div>
      </div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 relative w-full max-w-sm md:max-w-md mx-auto"
      >
        {/* Decorative Yellow Blob/Background */}
        <div className="absolute inset-0 bg-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] rotate-6 transform transition-transform hover:rotate-12"></div>
        
        {/* Profile Image */}
        <img
          src={img9}
          alt="Profile"
          className="relative z-10 w-full h-auto aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-card"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
}
