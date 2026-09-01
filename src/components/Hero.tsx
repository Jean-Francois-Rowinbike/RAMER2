import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Activity, 
  MapPin, 
  Zap, 
  Compass, 
  Gauge, 
  Play, 
  RotateCcw,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { images, pageContent } from '../data/content';
import { ImageAsset } from '../types';

interface HeroProps {
  onImageClick: (image: ImageAsset) => void;
}

export const Hero: React.FC<HeroProps> = ({ onImageClick }) => {
  const [activeTab, setActiveTab] = useState<'commute' | 'specs' | 'history'>('commute');
  const [isSimulating, setIsSimulating] = useState(false);
  const [watts, setWatts] = useState(285);

  const toggleSimulation = () => {
    setIsSimulating(!isSimulating);
    if (!isSimulating) {
      setWatts(340);
    } else {
      setWatts(285);
    }
  };

  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle soft background gradient ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50/60 to-purple-50/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-amber-50/50 to-emerald-50/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Brand Banner (Option 1) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 w-full"
        >
          <div className="relative overflow-hidden bg-white/95 rounded-3xl p-6 sm:p-8 md:p-10 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-300">
            
            {/* Subtle Background Ambient Light */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none" />

            {/* Main Full-Width Logo Display */}
            <div className="relative z-10 flex items-center justify-center py-2 sm:py-4">
              <img
                src="./images/rowbike_logo.png"
                alt="RowBIKE - ROW. RIDE. REPEAT."
                className="w-full max-w-4xl h-auto max-h-[340px] md:max-h-[380px] object-contain mx-auto transition-transform duration-300 hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Footer Grounding Bar inside the Frame */}
            <div className="relative z-10 mt-6 pt-5 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-900 font-display">RowBIKE 209 Official</span>
                <span className="text-neutral-300">&bull;</span>
                <span className="text-xs font-semibold text-neutral-500">Est. 1898</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-neutral-50 text-[11px] font-semibold text-neutral-600 border border-neutral-200/70">
                  Derk Thijs Engineering
                </span>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-[11px] font-bold text-teal-800 border border-teal-200/60">
                  ROW. RIDE. REPEAT.
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Main Grid: Left Overlapping Device Frames | Right Modern Copy & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Clean, Separated Showcase Cards (No overlapping/hidden images) */}
          <div className="lg:col-span-6 space-y-4 py-2">
            
            {/* 1. Main Artwork Showcase Card - Fully visible, non-obscured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-neutral-200/90 shadow-card-modern group"
            >
              {/* Header with Title and Zoom Action */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Jean-François &middot; Rowingbike 209
                  </span>
                </div>
                <button
                  onClick={() => onImageClick(images.jeanFrancois)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Agrandir</span>
                </button>
              </div>

              {/* Full Unobstructed Image View */}
              <div 
                onClick={() => onImageClick(images.jeanFrancois)}
                className="relative rounded-2xl overflow-hidden bg-neutral-50 aspect-[16/10] sm:aspect-[16/9] cursor-pointer border border-neutral-100"
              >
                <img
                  src={images.jeanFrancois.src}
                  alt={images.jeanFrancois.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-bold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    <span>Cliquez pour voir en grand</span>
                  </span>
                </div>
              </div>

              {/* Image Description Footer */}
              <div className="mt-3 pt-2.5 flex items-center justify-between text-xs text-neutral-500">
                <span className="font-medium text-neutral-700">Illustration originale &middot; Propulseur à rame</span>
                <span className="text-neutral-400">Trajet Utrecht &mdash; Amsterdam</span>
              </div>
            </motion.div>

            {/* 2. Interactive Telemetry & Route Companion Card (Distinctly Separated) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-neutral-950 text-white rounded-3xl p-5 sm:p-6 border border-neutral-800 shadow-xl space-y-4"
            >
              {/* Route & GPS Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-800 text-xs">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white">Trajet quotidien direct : Utrecht &rarr; Amsterdam</span>
                </div>
                <span className="font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60 self-start sm:self-auto">
                  35.2 km &middot; 1h 05min
                </span>
              </div>

              {/* Live Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-neutral-900/90 rounded-2xl p-3 border border-neutral-800/80">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-400 block mb-1">
                    Vitesse moyenne
                  </span>
                  <div className="text-xl font-extrabold font-display text-white">
                    38.4 <span className="text-xs font-normal text-neutral-400">km/h</span>
                  </div>
                </div>

                <div className="bg-neutral-900/90 rounded-2xl p-3 border border-neutral-800/80">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-400 block mb-1">
                    Puissance générée
                  </span>
                  <div className="text-xl font-extrabold font-display text-amber-400">
                    {watts} <span className="text-xs font-normal text-neutral-400">Watts</span>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 bg-neutral-900/90 rounded-2xl p-3 border border-neutral-800/80 flex flex-col justify-between">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-400 block mb-1">
                    Masse musculaire
                  </span>
                  <div className="text-xl font-extrabold font-display text-emerald-400">
                    85% <span className="text-xs font-normal text-neutral-400">active</span>
                  </div>
                </div>
              </div>

              {/* Power Simulation Control Button */}
              <button 
                onClick={toggleSimulation}
                id="hero-simulate-btn"
                className="w-full py-2.5 px-4 bg-neutral-800 hover:bg-neutral-750 text-white font-semibold rounded-full text-xs flex items-center justify-center space-x-2 transition-all border border-neutral-700 active:scale-98"
              >
                <Play className={`w-3.5 h-3.5 ${isSimulating ? 'text-amber-400 fill-amber-400' : 'text-neutral-400'}`} />
                <span>
                  {isSimulating ? 'Coup de rame intensif : 340W simulés (Cliquez pour relâcher)' : 'Simuler un coup de rame puissant (340 Watts)'}
                </span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT: Modern Typography & High-Impact Copy (Matching reference layout style) */}
          <div className="lg:col-span-6 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Bold High-Impact Modern Title (Modern App style from screenshot) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-neutral-950 leading-[1.08]">
                RowBike With Jean-François
              </h1>

              {/* Clean, crystal-clear paragraph matching the modern app narrative style */}
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                A bicycle and rowing machine in one with over a century of history. It combines sliding-seat propulsion, CVT continuous drive with 50+ gear ratios, and aerodynamic efficiency to transform any asphalt road into a high-speed, full-body training route.
              </p>
            </motion.div>

            {/* Modern CTA Buttons with Black Pill design from Reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {/* Primary Black Pill Button matching the reference screenshot "Download App" button */}
              <a
                href="#innovation"
                id="hero-explore-btn"
                className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Model 209</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Soft Pill Button */}
              <a
                href={`mailto:${pageContent.email}?subject=Interested%20in%20Viewing%20the%20Rowingbike`}
                id="hero-email-btn"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>Contact Jean-François</span>
              </a>
            </motion.div>

            {/* Modern Metric Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-200/80"
            >
              <div className="bg-white p-3.5 rounded-2xl border border-neutral-100 shadow-xs">
                <div className="text-2xl font-bold font-display text-neutral-950">1898</div>
                <div className="text-[11px] font-medium text-neutral-400 mt-0.5">Origin Patent</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-neutral-100 shadow-xs">
                <div className="text-2xl font-bold font-display text-neutral-950">50+</div>
                <div className="text-[11px] font-medium text-neutral-400 mt-0.5">Snek Gears</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-neutral-100 shadow-xs">
                <div className="text-2xl font-bold font-display text-neutral-950">600+</div>
                <div className="text-[11px] font-medium text-neutral-400 mt-0.5">Built by Thijs</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-neutral-100 shadow-xs">
                <div className="text-2xl font-bold font-display text-neutral-950">35 km</div>
                <div className="text-[11px] font-medium text-neutral-400 mt-0.5">Daily Route</div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
