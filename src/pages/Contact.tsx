import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-12 md:py-24">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-foreground"
      >
        Get in <span className="text-accent">Touch</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>

          <div className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow">
            <div className="p-4 bg-primary/10 text-primary rounded-full">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Email</h3>
              <p className="text-foreground/70">yashwantkaushik2003@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow">
            <div className="p-4 bg-secondary/10 text-secondary rounded-full">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Phone</h3>
              <p className="text-foreground/70">+918708945722</p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow">
            <div className="p-4 bg-accent/10 text-accent rounded-full">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Location</h3>
              <p className="text-foreground/70">New Delhi, India</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border p-8 rounded-3xl space-y-6 shadow-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-foreground"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-all text-foreground resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            Send Message <Send size={20} />
          </button>
        </motion.form>
      </div>
    </div>
  );
}
