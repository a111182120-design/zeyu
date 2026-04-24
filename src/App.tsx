import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Code2, Camera, Compass, BookOpen, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 border-b border-slate-200">
      <motion.div 
        style={{ y, opacity }}
        className="text-center z-10 px-4 max-w-4xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 border border-slate-200 bg-white"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Available for Summer Internships</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-tight text-slate-900 shadow-sm"
        >
          Ethan Chen.
          <br />
          <span className="text-slate-400">Creative Dev.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          A 19-year-old developer crafting beautiful and functional digital experiences. Bridging the gap between design and engineering.
        </motion.p>
      </motion.div>

      {/* Atmospheric Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

function SectionHeading({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-[10px] uppercase font-black text-indigo-600 tracking-widest mb-4">{subtitle}</h2>
      <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">{title}</h3>
    </div>
  );
}

function About() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-b border-slate-200 bg-slate-50" id="about">
      <SectionHeading subtitle="01. About" title="Background & Education" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 text-sm text-slate-600 leading-relaxed font-normal"
        >
          <p>
            Hello! I'm Ethan, a 19-year-old Computer Science undergraduate deeply passionate about web technologies and artificial intelligence. I enjoy building applications that live on the internet, focusing on clean code and pixel-perfect design.
          </p>
          <p>
            My journey into tech started when I realized that with code, I could bring the ideas in my head to life. Since then, I've been constantly learning and experimenting.
          </p>
          
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h4 className="text-[10px] uppercase font-black text-indigo-600 tracking-widest mb-4 flex items-center gap-2">
              <BookOpen size={16} className="text-indigo-600" /> Academic Life
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-bold text-slate-900 mb-1">National Tech University</div>
                <div className="text-xs text-slate-500 font-mono">B.S. in Computer Science / 2023 - 2027</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
           <h4 className="text-[10px] uppercase font-black text-indigo-600 tracking-widest mb-4">Interests & Hobbies</h4>
           <div className="grid grid-cols-2 gap-4">
             {[
               { icon: Code2, label: "Open Source", desc: "Contributing to React eco" },
               { icon: Camera, label: "Photography", desc: "Street & Architecture" },
               { icon: Sparkles, label: "AI Experiments", desc: "Playing with LLMs" },
               { icon: Compass, label: "Traveling", desc: "Exploring new cultures" },
             ].map((hobby, i) => (
               <div key={i} className="p-6 bg-white border border-slate-200 cursor-default group transition-shadow hover:shadow-xl">
                 <hobby.icon size={24} className="text-slate-400 mb-6 group-hover:text-indigo-600 transition-colors" />
                 <div className="text-sm font-bold text-slate-900 mb-1">{hobby.label}</div>
                 <div className="text-[10px] uppercase tracking-widest text-slate-500">{hobby.desc}</div>
               </div>
             ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      title: "Nova AI Analytics",
      description: "A dashboard for visualizing AI model performance. Built with React, Tailwind, and D3.js.",
      tech: ["React", "TypeScript", "D3.js", "Tailwind"],
      year: "2024"
    },
    {
      title: "Flow State Music",
      description: "A minimalist Pomodoro timer integrated with lo-fi beats, designed for developers.",
      tech: ["Next.js", "Framer Motion", "Supabase"],
      year: "2023"
    },
    {
      title: "Lingo Chatbot",
      description: "Multilingual translation agent using Gemini API for real-time collaboration chats.",
      tech: ["Vite", "Gemini API", "Tailwind"],
      year: "2024"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-b border-slate-200 bg-slate-50" id="work">
      <SectionHeading subtitle="02. Work" title="Selected Projects" />
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch cursor-pointer hover:shadow-xl transition-shadow bg-white border border-slate-200 p-6 md:p-10`}
          >
            {/* Image Placeholder */}
            <div className={`h-64 md:h-[320px] bg-slate-100 border border-slate-200 grayscale overflow-hidden relative flex flex-col items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs italic">Image Placeholder</div>
              <Terminal size={48} className="text-slate-300 absolute" />
            </div>
            
            {/* Content */}
            <div className={`flex flex-col justify-center gap-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="text-xs font-mono text-slate-400 mb-2">0{index + 1} / {project.year}</div>
              <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h4>
              <div className="text-slate-500 text-sm leading-relaxed mb-6">
                {project.description}
              </div>
              <ul className={`flex flex-wrap gap-2`}>
                {project.tech.map((tech, i) => (
                  <li key={i} className="px-3 py-1 bg-white border border-slate-200 text-[10px] uppercase font-bold tracking-wider text-slate-900">{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center relative z-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionHeading subtitle="03. What's Next?" title="Get In Touch" />
        <p className="text-sm text-slate-500 leading-relaxed mb-12 max-w-xl mx-auto font-normal">
          Currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-6 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-colors">
          <Mail size={16} />
          Start Discussion
        </a>
        
        <div className="mt-24 pt-12 border-t border-slate-200">
          <div className="flex gap-4 justify-center mb-8">
             <a href="#" className="p-3 bg-white border border-slate-200 text-slate-400 hover:text-slate-900 transition-colors">
                <Github size={18} />
             </a>
             <a href="#" className="p-3 bg-white border border-slate-200 text-slate-400 hover:text-slate-900 transition-colors">
                <Linkedin size={18} />
             </a>
          </div>
          <p className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-2">
            Designed & Built by Ethan Chen © 2026
          </p>
          <p className="text-[10px] text-slate-400">
            Ask my AI assistant using the button below for immediate answers in any language.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600/30 selection:text-indigo-900">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-sm border-b border-slate-200 py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
          <span className="font-bold tracking-widest text-sm uppercase text-slate-900">Ethan Chen / 2026</span>
        </div>
        <div className="hidden md:flex space-x-6 text-[11px] font-bold uppercase tracking-tighter">
          <a href="#about" className="px-3 py-1 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors bg-white">01. About</a>
          <a href="#work" className="px-3 py-1 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors bg-white">02. Work</a>
          <a href="#contact" className="px-3 py-1 border border-slate-900 bg-slate-900 text-white hover:opacity-80 transition-all">03. Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <ChatWidget />
    </div>
  );
}

