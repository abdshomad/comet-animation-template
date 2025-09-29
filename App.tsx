import React, { useState, useEffect, useRef } from 'react';
import { SunIcon, MoonIcon, FileIcon, MicIcon } from './constants';

// --- Helper Components ---

interface ThemeSwitcherProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, onToggle }) => (
  <button
    onClick={onToggle}
    className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
    aria-label="Switch theme"
  >
    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
  </button>
);

// --- Main App Component ---

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [prompt, setPrompt] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Theme management
  useEffect(() => {
    const isDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const initialTheme = isDarkMode ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  
  // Textarea auto-resize
  useEffect(() => {
      if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
  }, [prompt]);

  const wrapperClasses = `relative p-px rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500`;

  return (
    <main className="relative bg-gray-50 dark:bg-[#0d1117] min-h-screen flex justify-center items-center p-4 overflow-hidden">
        <div className="relative w-[90%] max-w-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-3xl blur opacity-60"></div>
            
            <div className="p-px rounded-2xl comet-container">
                <div className="relative bg-white dark:bg-black/90 backdrop-blur-xl rounded-[15px] shadow-2xl p-8 text-gray-900 dark:text-gray-200 flex flex-col box-border min-h-[600px]">
                    <header className="flex justify-between items-center mb-5 text-sm animate-fade-in">
                        <div className="text-gray-500 dark:text-gray-400 truncate max-w-xs h-5 flex items-center">
                            Welcome
                        </div>
                        <div className="flex items-center gap-2">
                           <ThemeSwitcher theme={theme} onToggle={handleThemeToggle} />
                        </div>
                    </header>

                    <section className="flex justify-center items-center gap-4 my-8 animate-fade-in" style={{animationDelay: '100ms'}}>
                        <span className="text-6xl" role="img" aria-label="Sparkles Icon">✨</span>
                        <div className="flex flex-col items-center">
                            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-wider text-center">
                                Comet Template
                            </h1>
                        </div>
                    </section>
                    
                    <section className="flex flex-col gap-4 animate-fade-in" style={{animationDelay: '300ms'}}>
                        <div id="prompt-input-wrapper" className={wrapperClasses}>
                            <div className="relative flex items-start bg-white dark:bg-[#0d1117] rounded-[7px] p-3">
                                <textarea 
                                    ref={textareaRef}
                                    id="prompt-input"
                                    rows={2}
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Start by typing something here..." 
                                    className="w-full bg-transparent border-none outline-none text-gray-800 dark:text-gray-100 text-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none leading-snug custom-scrollbar"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div id="upload-button-wrapper" className="rounded-full p-px bg-gradient-to-r from-gray-400 to-blue-500 dark:from-white dark:to-cyan-400 transition-transform duration-300 hover:-translate-y-0.5">
                                <button className="flex items-center gap-2 bg-white dark:bg-[#0d1117] text-gray-800 dark:text-white font-semibold text-sm py-2 px-4 rounded-full uppercase tracking-wider transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/20 dark:hover:to-cyan-400/20">
                                    <FileIcon />
                                    <span>Upload File</span>
                                </button>
                            </div>
                            <div className="rounded-full p-px bg-gradient-to-r from-gray-400 to-blue-500 dark:from-white dark:to-cyan-400 transition-transform duration-300 hover:-translate-y-0.5">
                                <button className="flex items-center gap-2 bg-white dark:bg-[#0d1117] text-gray-800 dark:text-white font-semibold text-sm py-2 px-4 rounded-full uppercase tracking-wider transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/20 dark:hover:to-cyan-400/20">
                                    <MicIcon />
                                    <span>Use Microphone</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    <div id="generate-button-wrapper" className="flex justify-center mt-auto pt-8 animate-fade-in" style={{animationDelay: '400ms'}}>
                        <div className="rounded-full p-px bg-gradient-to-r from-gray-400 to-blue-500 dark:from-white dark:to-cyan-400 hover:-translate-y-0.5 transition-transform duration-300">
                            <button
                                className="bg-white dark:bg-[#0d1117] text-gray-800 dark:text-white font-semibold text-lg py-4 px-12 rounded-full uppercase tracking-wider transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gradient-to-r dark:hover:from-blue-500/20 dark:hover:to-cyan-400/20 animate-pulse-glow"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}