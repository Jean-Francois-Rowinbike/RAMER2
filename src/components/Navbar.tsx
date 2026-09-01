import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { pageContent } from '../data/content';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'The 209 Model', href: '#innovation' },
    { label: 'Heritage 1898', href: '#history' },
    { label: 'Community', href: '#community' },
    { label: 'Daily Commute', href: '#experience' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - ROWBIKE */}
        <a
          href="#"
          className="flex items-center space-x-3.5 group"
          id="nav-logo-link"
        >
          <div className="h-14 sm:h-18 flex items-center bg-white px-3 py-1.5 rounded-2xl border border-neutral-200 shadow-sm group-hover:border-teal-500/80 group-hover:shadow-md transition-all">
            <img
              src="./images/rowbike_logo.png"
              alt="RowBIKE - ROW. RIDE. REPEAT."
              className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight font-display text-neutral-950">
                Row<span className="text-teal-600">BIKE</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                Est. 1898 &bull; 209
              </span>
            </div>
            <span className="text-xs text-neutral-500 font-medium tracking-wide block leading-tight">
              with Jean-François &middot; Row. Ride. Repeat.
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button - Clean Black Pill Button from Reference */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            id="nav-contact-button"
            href={`mailto:${pageContent.email}?subject=Rowingbike%20Information`}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-medium transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Jean-François</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`mailto:${pageContent.email}?subject=Rowingbike%20Information`}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-full bg-neutral-950 text-white text-xs font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>Contact ({pageContent.email})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
