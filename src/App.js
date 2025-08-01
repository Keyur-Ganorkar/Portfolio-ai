import React, { useState, useEffect } from 'react';
import {
  Menu as MenuIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  X as CloseIcon,
} from 'lucide-react';

const SKILLS = [
  { category: 'Programming Languages', skills: [
    { name: 'Python', level: 90 },
    { name: 'C++', level: 85 },
    { name: 'SQL', level: 85 }
  ]},
  { category: 'Cybersecurity', skills: [
    { name: 'Ethical Hacking', level: 90 },
    { name: 'Penetration Testing', level: 85 },
    { name: 'Network Security', level: 85 },
    { name: 'Vulnerability Assessment', level: 80 }
  ]},
  { category: 'IoT Technologies', skills: [
    { name: 'Arduino', level: 85 },
    { name: 'NodeMCU', level: 80 },
    { name: 'MQTT Protocol', level: 75 },
    { name: 'IoT Sensors', level: 70 }
  ]},
  { category: 'Security Tools', skills: [
    { name: 'Kali Linux', level: 90 },
    { name: 'Wireshark', level: 85 },
    { name: 'Metasploit', level: 80 },
    { name: 'Burp Suite', level: 75 }
  ]},
];

const CERTIFICATIONS = [
  {
    title: 'Cisco Certified - Ethical Hacking',
    url: '#',
  },
  {
    title: 'Cisco Certified - CCNA Enterprise Networking & Security',
    url: '#',
  },
  {
    title: 'AWS Cloud Foundations (AWS Academy)',
    url: '#',
  },
  {
    title: 'Linux Fundamentals (Hack The Box)',
    url: '#',
  },
  {
    title: 'AICTE Cisco Virtual Internship Program 2023',
    url: '#',
  },
];

const PROJECTS = [
  {
    title: 'Smart Irrigation System',
    description: 'IoT-based Smart Irrigation System with Government patent no. 413505-001.',
    technologies: ['IoT', 'Arduino', 'NodeMCU', 'MQTT'],
    patent: true,
  },
  {
    title: 'Scholarship Management System',
    description: 'Complete automation of scholarship process at Kognivera Technologies.',
    technologies: ['.NET', 'SQL Server'],
    patent: false,
  },
  {
    title: 'Advanced CCTV Analytic Solutions',
    description: 'Research and development presented at MDAI-2023 conference.',
    technologies: ['Python', 'OpenCV'],
    patent: false,
  },
];

const App = () => {
  // Theme state: respect system preference, persist in localStorage
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
      const userMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMediaQuery.matches) {
        return 'dark';
      }
    }
    return 'dark'; // default
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    window.localStorage.setItem('color-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphic backdrop-blur-md bg-white/10 dark:bg-black/30 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold cursor-pointer select-none">Keyur Ganorkar</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-[var(--accent-primary)]">About</a>
          <a href="#projects" className="hover:text-[var(--accent-primary)]">Projects</a>
          <a href="#skills" className="hover:text-[var(--accent-primary)]">Skills</a>
          <a href="#certifications" className="hover:text-[var(--accent-primary)]">Certifications</a>
          <a href="#contact" className="hover:text-[var(--accent-primary)]">Contact</a>
          <button 
            aria-label="Toggle Theme" 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] transition-colors"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5 text-black"/> : <MoonIcon className="w-5 h-5 text-white"/>}
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          aria-label="Menu" 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded hover:bg-white/20 dark:hover:bg-black/30 transition-colors"
        >
          {menuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 inset-x-0 bg-[var(--bg-primary)] border-t border-gray-500 dark:border-gray-700 z-40 flex flex-col text-center space-y-4 py-6">
          <a onClick={() => setMenuOpen(false)} href="#about" className="block hover:text-[var(--accent-primary)]">About</a>
          <a onClick={() => setMenuOpen(false)} href="#projects" className="block hover:text-[var(--accent-primary)]">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#skills" className="block hover:text-[var(--accent-primary)]">Skills</a>
          <a onClick={() => setMenuOpen(false)} href="#certifications" className="block hover:text-[var(--accent-primary)]">Certifications</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="block hover:text-[var(--accent-primary)]">Contact</a>
          <button 
            aria-label="Toggle Theme" 
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="mx-auto mt-2 p-2 rounded-full bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] transition-colors"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5 text-black"/> : <MoonIcon className="w-5 h-5 text-white"/>}
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Entry-Level Cybersecurity Engineer | Open to Work
          </h1>
          <p className="text-lg md:text-xl text-[var(--accent-primary)] font-semibold max-w-2xl mx-auto leading-relaxed">
            B.Tech Computer Science and Engineering with specialization in IoT, Cybersecurity & Blockchain.  
            Government Patent Holder | Skilled in Python, C++, SQL, Ethical Hacking
          </p>
        </header>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 border-l-4 border-[var(--accent-primary)] pl-3">
            About Me
          </h2>
          <p>
            I am an aspiring cybersecurity engineer passionate about combining IoT and blockchain technologies to build secure, innovative systems.
            I hold a government patent for an IoT-based Smart Irrigation System and have industry certifications in ethical hacking and network security.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 border-l-4 border-[var(--accent-primary)] pl-3">
            Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((p, idx) => (
              <div key={idx} className="glassmorphic-card p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-[0_0_10px_var(--accent-primary)] transition-shadow">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                  {p.title}
                  {p.patent && <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-semibold">Patent</span>}
                </h3>
                <p className="mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/40 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 border-l-4 border-[var(--accent-primary)] pl-3">
            Skills
          </h2>
          {SKILLS.map(({category, skills}, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="space-y-3">
                {skills.map(({name, level}, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1 font-medium">{name}</div>
                    <div className="w-full bg-gray-400 rounded-full h-4">
                      <div 
                        className="bg-[var(--accent-primary)] h-4 rounded-full transition-all"
                        style={{width: `${level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 border-l-4 border-[var(--accent-primary)] pl-3">
            Certifications
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            {CERTIFICATIONS.map(({title, url}, idx) => (
              <li key={idx}>
                {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">{title}</a> : <>{title}</>}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 max-w-lg mx-auto">
          <h2 className="text-3xl font-semibold mb-6 border-l-4 border-[var(--accent-primary)] pl-3">
            Contact Me
          </h2>

          <form 
            className="flex flex-col space-y-4 bg-white/10 p-6 rounded-lg backdrop-blur-md border border-white/20"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for reaching out! I will get back to you soon.');
              e.target.reset();
            }}
          >
            <label className="flex flex-col">
              Name
              <input required type="text" name="name" className="mt-1 p-2 rounded bg-white/20 border border-white/30 focus:border-[var(--accent-primary)] focus:outline-none" />
            </label>
            <label className="flex flex-col">
              Email
              <input required type="email" name="email" className="mt-1 p-2 rounded bg-white/20 border border-white/30 focus:border-[var(--accent-primary)] focus:outline-none" />
            </label>
            <label className="flex flex-col">
              Message
              <textarea required name="message" rows="4" className="mt-1 p-2 rounded bg-white/20 border border-white/30 focus:border-[var(--accent-primary)] focus:outline-none"></textarea>
            </label>
            <button 
              type="submit" 
              className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-black font-bold py-2 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm border-t border-gray-600">
        &copy; {new Date().getFullYear()} Keyur Ganorkar | All rights reserved
      </footer>
    </div>
  );
};

export default App;
