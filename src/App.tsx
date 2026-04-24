import React, { useState, createContext, useContext } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, Code2, Camera, Compass, BookOpen, Terminal, Sparkles, X, ChevronRight, Check, ExternalLink } from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';
import { translations, Locale } from './i18n';

// Language Context
type LangContextType = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: typeof translations.en;
};
const LangContext = createContext<LangContextType>({} as LangContextType);

const useLang = () => useContext(LangContext);

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useLang();

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
          <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">{t.hero.available}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-tight text-slate-900 shadow-sm"
        >
          {t.hero.name}
          <br />
          <span className="text-slate-400">{t.hero.role}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>
      </motion.div>

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
  const { t } = useLang();
  
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-b border-slate-200 bg-slate-50" id="about">
      <SectionHeading subtitle={t.about.subtitle} title={t.about.title} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 text-sm text-slate-600 leading-relaxed font-normal"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h4 className="text-[10px] uppercase font-black text-indigo-600 tracking-widest mb-4 flex items-center gap-2">
              <BookOpen size={16} className="text-indigo-600" /> {t.about.academicLife}
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-bold text-slate-900 mb-1">{t.about.uni}</div>
                <div className="text-xs text-slate-500 font-mono">{t.about.degree}</div>
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
           <h4 className="text-[10px] uppercase font-black text-indigo-600 tracking-widest mb-4">{t.about.interests}</h4>
           <div className="grid grid-cols-2 gap-4">
             {t.about.hobbies.map((hobby, i) => {
               const icons = [Code2, Camera, Sparkles, Compass];
               const Icon = icons[i % icons.length];
               return (
                 <div key={i} className="p-6 bg-white border border-slate-200 cursor-default group transition-shadow hover:shadow-xl">
                   <Icon size={24} className="text-slate-400 mb-6 group-hover:text-indigo-600 transition-colors" />
                   <div className="text-sm font-bold text-slate-900 mb-1">{hobby.label}</div>
                   <div className="text-[10px] uppercase tracking-widest text-slate-500">{hobby.desc}</div>
                 </div>
               )
             })}
           </div>
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { t } = useLang();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = t.work.projects;

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-b border-slate-200 bg-slate-50" id="work">
      <SectionHeading subtitle={t.work.subtitle} title={t.work.title} />
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onClick={() => setSelectedProject(index)}
            className={`group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch cursor-pointer hover:shadow-xl transition-all bg-white border border-slate-200 p-6 md:p-10`}
          >
            <div className={`h-64 md:h-[320px] bg-slate-100 border border-slate-200 grayscale overflow-hidden relative flex flex-col items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''} group-hover:grayscale-0 transition-all duration-500`}>
              <div className="absolute inset-0 bg-indigo-600/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Terminal size={48} className="text-slate-300 absolute group-hover:scale-110 transition-transform duration-500 group-hover:text-indigo-300" />
            </div>
            
            <div className={`flex flex-col justify-center gap-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="text-xs font-mono text-slate-400 mb-2">0{index + 1} / {project.year}</div>
              <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors flex items-center gap-3">
                {project.title}
                <ChevronRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-600" />
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

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 flex justify-between items-center z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-900">Project Details</div>
                <button onClick={() => setSelectedProject(null)} className="p-2 text-slate-500 hover:text-slate-900 transition-colors bg-slate-100 hover:bg-slate-200 rounded-sm">
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="h-64 sm:h-96 w-full bg-slate-100 border border-slate-200 flex items-center justify-center relative overflow-hidden mb-12">
                  <Terminal size={64} className="text-slate-300" />
                  <div className="absolute bottom-4 right-4 bg-white px-3 py-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase border border-slate-200 shadow-sm">
                    {projects[selectedProject].year}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{projects[selectedProject].title}</h3>
                    <div className="space-y-4">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {projects[selectedProject].description} 
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        This project was built from the ground up focusing on performance and scalability.
                        The architecture relies heavily on modern frontend tools allowing a highly optimized user experience.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black text-indigo-600 tracking-widest mb-4">Technologies</div>
                    <ul className="flex flex-wrap gap-2 mb-8">
                      {projects[selectedProject].tech.map((tech, i) => (
                        <li key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 text-[10px] uppercase font-bold tracking-wider text-slate-900">{tech}</li>
                      ))}
                    </ul>
                    
                    <a href="#" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-600 hover:text-indigo-800 transition-colors group">
                      {t.work.viewProject}
                      <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto relative z-20" id="contact">
      <SectionHeading subtitle={t.contact.subtitle} title={t.contact.title} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <p className="text-sm text-slate-500 leading-relaxed mb-12 font-normal">
            {t.contact.desc}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-slate-900">
              <div className="w-10 h-10 border border-slate-200 bg-white flex items-center justify-center text-slate-400">
                <Mail size={16} />
              </div>
              <a href="mailto:hello@example.com" className="font-bold hover:text-indigo-600 transition-colors">hello@kaichen.me</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                  <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                  <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Animated Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 p-8 shadow-sm relative overflow-hidden"
        >
          {formStatus === 'success' ? (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="absolute inset-0 bg-white flex flex-col items-center justify-center z-10 p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mb-6">
                <Check size={32} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">{t.contact.formSuccess}</h4>
            </motion.div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'name' ? '-top-2.5 text-[10px] bg-white px-1 text-indigo-600 font-bold uppercase' : 'top-3.5 text-xs text-slate-400 font-medium'}`}>
                  {t.contact.formName}
                </label>
                <input 
                  type="text" 
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => setFocusedField(e.target.value ? 'name' : null)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                />
              </div>
              <div className="relative">
                <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'email' ? '-top-2.5 text-[10px] bg-white px-1 text-indigo-600 font-bold uppercase' : 'top-3.5 text-xs text-slate-400 font-medium'}`}>
                  {t.contact.formEmail}
                </label>
                <input 
                  type="email" 
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={(e) => setFocusedField(e.target.value ? 'email' : null)}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                />
              </div>
            </div>
            
            <div className="relative">
              <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'subject' ? '-top-2.5 text-[10px] bg-white px-1 text-indigo-600 font-bold uppercase' : 'top-3.5 text-xs text-slate-400 font-medium'}`}>
                {t.contact.formSubject}
              </label>
              <input 
                type="text" 
                required
                onFocus={() => setFocusedField('subject')}
                onBlur={(e) => setFocusedField(e.target.value ? 'subject' : null)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors"
              />
            </div>

            <div className="relative">
              <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'message' ? '-top-2.5 text-[10px] bg-white px-1 text-indigo-600 font-bold uppercase' : 'top-3.5 text-xs text-slate-400 font-medium'}`}>
                {t.contact.formMessage}
              </label>
              <textarea 
                rows={4}
                required
                onFocus={() => setFocusedField('message')}
                onBlur={(e) => setFocusedField(e.target.value ? 'message' : null)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full bg-slate-900 text-white py-4 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:bg-slate-900"
            >
              {formStatus === 'submitting' ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t.contact.formSending}
                </>
              ) : t.contact.formSend}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-24 pt-12 border-t border-slate-200 text-center">
        <p className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-2">
          {t.contact.designedBy}
        </p>
        <p className="text-[10px] text-slate-400">
          {t.contact.aiTip}
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState<Locale>('en');

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600/30 selection:text-indigo-900">
        
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-sm border-b border-slate-200 py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
            <span className="font-bold tracking-widest text-sm uppercase text-slate-900">Ethan Chen / 2026</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 text-[11px] font-bold uppercase tracking-tighter">
              <a href="#about" className="text-slate-500 hover:text-slate-900 transition-colors uppercase">{translations[lang].nav.about}</a>
              <a href="#work" className="text-slate-500 hover:text-slate-900 transition-colors uppercase">{translations[lang].nav.work}</a>
              <a href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors uppercase">{translations[lang].nav.contact}</a>
            </div>
            <div className="flex space-x-2 border-l border-slate-200 pl-8">
              {(['en', 'zh', 'es'] as Locale[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                    lang === l ? 'bg-slate-900 text-white border-slate-900' : 'bg-transparent text-slate-400 border-slate-200 hover:text-slate-900'
                  }`}
                >
                  {l === 'en' ? 'EN' : l === 'zh' ? '中文' : 'ES'}
                </button>
              ))}
            </div>
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
    </LangContext.Provider>
  );
}
