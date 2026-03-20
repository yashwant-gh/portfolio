import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, FileText, Calendar, Code, Globe, Terminal, Cpu, ExternalLink, Zap, BadgeCheck } from 'lucide-react';
import img2 from "../asset/img2.jpeg";
import img3 from "../asset/img3.jpeg";
import img4 from "../asset/img4.jpeg";
const experiences = [
  {
    title: "AI Trainer Specialist",
    company: "SoftAge Information Technology Ltd.",
    date: "2025 - 2026",
    description: "Worked on improving AI behavior by simulating real user tasks across tools like browsers, editors, and productivity apps. Focused on breaking down tasks clearly and helping AI learn how to interact more naturally and effectively.",
    icon: Terminal,
    logo: "https://ui-avatars.com/api/?name=SoftAge+Information&background=0ea5e9&color=fff&size=128&font-size=0.4&bold=true",
    color: "primary"
  },
  {
    title: "Software Developer",
    company: "AirDawg Labs",
    date: "2026 - Present",
    description: "Working on LLM evaluation pipelines using CLI-based workflows across multiple GitHub repositories. Contributing through pull requests, debugging failures, and improving test cases, primarily on Anthropic AI projects.",
    icon: Code,
    logo: "https://ui-avatars.com/api/?name=AirDawg+Labs&background=8b5cf6&color=fff&size=128&font-size=0.4&bold=true",
    color: "secondary"
  }
];

const education = [
  {
    title: "Bachelor Of Technology In Computer Science",
    institution: "Lovely Professional University",
    date: "2023 - 2027",
    description: "Focusing on software engineering, data structures, and full-stack web technologies. CGPA: 8.75",
    icon: GraduationCap,
    color: "primary"
  },
  {
    title: "Senior Secondary (11th-12th)",
    institution: "High School Name",
    date: "2020 - 2022",
    description: "Majored in Science and Mathematics. Percentage: 93%",
    icon: GraduationCap,
    color: "secondary"
  }
];

const achievements = [
  "Solved more than 500+ questions across various problem-solving platforms.",
  "SIH 2025: Team rank among top 10 and got selected for SIH 2025 finale round out of 600 teams.",
  "Binary Blitz Hackathon: First runner up in hackathon by Coding Ninjas in 2023.",
  "5-Star HackerRank: Problem Solving, C++"
];

const certificates = [
  "Full Stack Development in React and Node",
  "Oracle Cloud Database Services 2025 Certified Professional",
  "Deloitte Australia Data Analayst Certificate",
  "Cloud Computing by IIT Kharagpur",
  "Introduction to Hardware and Operating Systems by IBM"
];

const skills = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "ts" },
  { name: "JavaScript", icon: "js" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "Figma", icon: "figma" },
  { name: "GraphQL", icon: "graphql" },
  { name: "REST APIs", icon: "postman" },
  { name: "Redux", icon: "redux" }
];

const hoverColors = [
  { border: 'hover:border-blue-500/50', bg: 'hover:bg-blue-500/5', shadow: 'hover:shadow-blue-500/10', text: 'group-hover:text-blue-500', dot: 'group-hover:bg-blue-500' },
  { border: 'hover:border-emerald-500/50', bg: 'hover:bg-emerald-500/5', shadow: 'hover:shadow-emerald-500/10', text: 'group-hover:text-emerald-500', dot: 'group-hover:bg-emerald-500' },
  { border: 'hover:border-violet-500/50', bg: 'hover:bg-violet-500/5', shadow: 'hover:shadow-violet-500/10', text: 'group-hover:text-violet-500', dot: 'group-hover:bg-violet-500' },
  { border: 'hover:border-amber-500/50', bg: 'hover:bg-amber-500/5', shadow: 'hover:shadow-amber-500/10', text: 'group-hover:text-amber-500', dot: 'group-hover:bg-amber-500' },
  { border: 'hover:border-rose-500/50', bg: 'hover:bg-rose-500/5', shadow: 'hover:shadow-rose-500/10', text: 'group-hover:text-rose-500', dot: 'group-hover:bg-rose-500' },
  { border: 'hover:border-cyan-500/50', bg: 'hover:bg-cyan-500/5', shadow: 'hover:shadow-cyan-500/10', text: 'group-hover:text-cyan-500', dot: 'group-hover:bg-cyan-500' },
  { border: 'hover:border-fuchsia-500/50', bg: 'hover:bg-fuchsia-500/5', shadow: 'hover:shadow-fuchsia-500/10', text: 'group-hover:text-fuchsia-500', dot: 'group-hover:bg-fuchsia-500' },
];

const TimelineCard = ({ title, subtitle, company, institution, date, description, icon: Icon, logo, color }: any) => {
  const colorMap: Record<string, string> = {
    primary: "text-primary bg-primary/10 border-primary/20 hover:border-primary/50",
    secondary: "text-secondary bg-secondary/10 border-secondary/20 hover:border-secondary/50",
    accent: "text-accent bg-accent/10 border-accent/20 hover:border-accent/50",
  };
  
  const textMap: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  const displaySubtitle = subtitle || company || institution;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative bg-card border rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden ${colorMap[color]}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-10">
        <div className="flex items-start gap-4">
          {logo ? (
            <div className="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border border-border/50 bg-background">
              <img src={logo} alt={`${displaySubtitle} logo`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ) : (
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${colorMap[color].split(' ')[1]} ${textMap[color]}`}>
              {Icon && <Icon size={24} />}
            </div>
          )}
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">{title}</h4>
            {displaySubtitle && (
              <p className={`text-base md:text-lg font-semibold ${textMap[color]}`}>{displaySubtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm text-foreground/80 text-sm font-semibold shrink-0 border border-border/50">
          <Calendar size={16} />
          {date}
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed relative z-10 text-base md:text-lg pl-0 sm:pl-16">
        {description}
      </p>
    </motion.div>
  );
};

export default function About() {
  return (
    <div className="py-12 md:py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      
      {/* Bento Grid Hero */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
        {/* Main Intro */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 bg-card rounded-[2.5rem] p-8 md:p-12 border border-border relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-1000"></div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-8 relative z-10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span>About Me</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1] relative z-10">
            I Build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Experiences.</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed relative z-10 font-medium">
            Hi, I'm a passionate web developer and I enjoy turning random ideas into things people can actually use.
          </p>
        </motion.div>

        {/* Photo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="md:col-span-1 relative rounded-[2.5rem] overflow-hidden group min-h-[300px] border border-border"
        >
          <img 
            src={img2}
            alt="Portrait" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="text-white font-black text-2xl mb-1">Yashwant</div>
            <div className="text-white/80 font-medium text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Available for work
            </div>
          </div>
        </motion.div>
        
        {/* Projects Stat */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 relative rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden group border border-primary/20"
        >
          <img 
            src={img4}
            alt="Coding" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] group-hover:backdrop-blur-sm transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <Cpu className="w-12 h-12 mb-12 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="text-7xl font-black mb-2 tracking-tighter text-white">30+</div>
            <div className="text-white/90 font-semibold text-xl leading-tight">Projects<br/>Completed</div>
          </div>
        </motion.div>

        {/* Experience Stat */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 relative rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden group border border-secondary/20"
        >
          <img 
            src={img3}
            alt="Network" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] group-hover:backdrop-blur-sm transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <Code className="w-12 h-12 mb-12 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="text-7xl font-black mb-2 tracking-tighter text-white">7+</div>
            <div className="text-white/90 font-semibold text-xl leading-tight">Hackathons<br/>Participated</div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 bg-card rounded-[2.5rem] p-8 md:p-12 border border-border flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-10 -mb-10 transition-transform group-hover:scale-110 duration-1000"></div>
          <h3 className="text-3xl font-black mb-6 flex items-center gap-3 relative z-10">
            <Globe className="text-secondary w-8 h-8" /> My Philosophy
          </h3>
          <div className="space-y-4 relative z-10">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
              I don’t see design as decoration. If something looks good but is confusing to use, it’s broken.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
            I try to keep things simple, fast, and clear — so people don’t have to think too much while using what I build.            </p>
          </div>
        </motion.div>
      </div>

      {/* Tech Arsenal Section */}
      <div className="mb-32 relative">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6"
          >
            <Zap size={32} />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Tech Arsenal
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 font-medium max-w-2xl mx-auto"
          >
            A comprehensive list of tools, languages, and frameworks I use to build exceptional digital experiences.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => {
            const color = hoverColors[i % hoverColors.length];
            return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-card border border-border transition-all cursor-default flex items-center gap-3 group hover:shadow-lg ${color.border} ${color.bg} ${color.shadow}`}
            >
              <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt={skill.name} className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
              <span className={`text-base md:text-lg font-bold text-foreground/80 transition-colors ${color.text}`}>{skill.name}</span>
            </motion.div>
          )})}
        </div>
      </div>

      {/* Experience Section */}
      <div className="grid lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6"
            >
              <Briefcase size={32} />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            >
              Experience
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 font-medium"
            >
              My professional journey and the amazing companies I've had the pleasure to work with.
            </motion.p>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {experiences.map((exp, i) => (
            <TimelineCard key={i} {...exp} />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="grid lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-6"
            >
              <GraduationCap size={32} />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            >
              Education
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 font-medium"
            >
              My academic background and the foundation of my technical knowledge.
            </motion.p>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {education.map((edu, i) => (
            <TimelineCard key={i} {...edu} />
          ))}
        </div>
      </div>

      {/* Achievements & Certificates */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-8">
        {/* Achievements */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Award size={28} />
            </div>
            <h3 className="text-3xl font-black tracking-tight">Achievements</h3>
          </motion.div>
          
          <div className="space-y-4">
            {achievements.map((ach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold shrink-0 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <p className="font-semibold text-foreground/90 text-lg">{ach}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <FileText size={28} />
            </div>
            <h3 className="text-3xl font-black tracking-tight">Certificates</h3>
          </motion.div>
          
          <div className="space-y-4">
            {certificates.map((cert, i) => (
              <motion.a 
                href="#"
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between p-5 rounded-2xl bg-card border border-border hover:border-accent/30 hover:bg-accent/5 hover:shadow-md hover:shadow-accent/5 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform">
                    <BadgeCheck size={18} />
                  </div>
                  <p className="font-semibold text-foreground/90 text-lg">{cert}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-foreground/30 group-hover:text-accent transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
