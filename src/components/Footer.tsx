import React from 'react';
import { ArrowUp, Activity } from 'lucide-react';
import { pageContent } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center space-x-4 mb-3">
              <div className="h-16 sm:h-20 w-auto flex items-center bg-white px-3 py-1.5 rounded-2xl border border-neutral-700 shadow-md">
                <img
                  src="./images/rowbike_logo.png"
                  alt="RowBIKE - ROW. RIDE. REPEAT."
                  className="h-14 sm:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-2xl font-extrabold font-display text-white tracking-tight leading-none block">
                  Row<span className="text-teal-400">BIKE</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-teal-300 font-bold block mt-1">
                  ROW. RIDE. REPEAT.
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              Personal archive &amp; engineering overview with Jean-François &middot; Est. 1898 &middot; Thijs 209
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a href="#history" className="px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-850 text-xs font-semibold text-neutral-300 hover:text-white transition-colors">
              History
            </a>
            <a href="#innovation" className="px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-850 text-xs font-semibold text-neutral-300 hover:text-white transition-colors">
              Model 209
            </a>
            <a href="#community" className="px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-850 text-xs font-semibold text-neutral-300 hover:text-white transition-colors">
              Worldwide Peloton
            </a>
            <a href="#experience" className="px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-850 text-xs font-semibold text-neutral-300 hover:text-white transition-colors">
              Daily Commute
            </a>
            <a href="#contact" className="px-4 py-1.5 rounded-full bg-white text-neutral-950 text-xs font-bold hover:bg-neutral-100 transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            id="scroll-to-top-btn"
            className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Rowingbike with Jean-François. All rights reserved.</span>
          <span className="font-mono text-neutral-400">{pageContent.email}</span>
        </div>
      </div>
    </footer>
  );
};
