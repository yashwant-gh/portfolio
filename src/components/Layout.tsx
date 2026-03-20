import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, Mail, Moon, Sun, Twitter, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export function Layout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Navbar (Desktop & Tablet) */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        {/* Nav Links Pill */}
        <nav className="pointer-events-auto hidden md:flex items-center bg-card/80 backdrop-blur-md px-2 py-2 rounded-full border border-border shadow-sm">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300',
                      isActive
                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                        : 'text-foreground/70 hover:bg-primary/10 hover:text-primary'
                    )
                  }
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Independent Social & Theme Icons (Top Right) */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-5 pointer-events-auto">
        <div className="hidden md:flex items-center gap-5">
          <a href="https://www.linkedin.com/in/yashwant-kaushik/"target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:scale-110 transition-transform drop-shadow-sm" aria-label="LinkedIn">
            <Linkedin size={26} className="fill-current" />
          </a>
          <a href="https://github.com/yashwant-gh/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:scale-110 transition-transform drop-shadow-sm" aria-label="GitHub">
            <Github size={26} className="fill-current" />
          </a>
          <a href="https://x.com/imyash_x/" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:scale-110 transition-transform drop-shadow-sm" aria-label="Twitter">
            <Twitter size={26} className="fill-current" />
          </a>
          <a href="https://leetcode.com/u/yashwant_lc/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:scale-110 transition-transform drop-shadow-sm" aria-label="Instagram">
            <Instagram size={26} />
          </a>
        </div>
        <button
          onClick={toggleTheme}
          className="bg-foreground text-background p-2.5 rounded-full hover:scale-110 transition-all shadow-md"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={22} strokeWidth={2.5} /> : <Sun size={22} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 z-50 bg-card/80 backdrop-blur-md border border-border rounded-full shadow-lg px-4 py-3">
        <ul className="flex justify-between items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex flex-col items-center gap-1 p-3 rounded-full transition-all duration-300',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  )
                }
              >
                <item.icon size={24} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 px-6 md:px-12 pt-32 pb-32 md:pb-12 overflow-hidden relative flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="max-w-7xl mx-auto w-full h-full flex-1 flex flex-col"
          >
            {/* Page Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="flex-1"
            >
              <Outlet />
            </motion.div>

            {/* Secondary Wipe (Dark) */}
            <motion.div
              className="fixed inset-0 bg-foreground z-[90] pointer-events-none"
              initial={{ scaleY: 1, transformOrigin: "top" }}
              animate={{ 
                scaleY: 0, 
                transformOrigin: "top",
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 } 
              }}
              exit={{ 
                scaleY: 1, 
                transformOrigin: "bottom",
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } 
              }}
            />
            
            {/* Primary Wipe (Brand Color) */}
            <motion.div
              className="fixed inset-0 bg-primary z-[100] pointer-events-none"
              initial={{ scaleY: 1, transformOrigin: "top" }}
              animate={{ 
                scaleY: 0, 
                transformOrigin: "top",
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } 
              }}
              exit={{ 
                scaleY: 1, 
                transformOrigin: "bottom",
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 } 
              }}
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
