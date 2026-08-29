import React from 'react';
import { motion } from 'motion/react';
import { ZoomIn, MapPin, Globe, Users, ShieldCheck } from 'lucide-react';
import { images, pageContent } from '../data/content';
import { ImageAsset } from '../types';

interface CommunitySectionProps {
  onImageClick: (image: ImageAsset) => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onImageClick }) => {
  return (
    <section id="community" className="py-20 md:py-28 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-neutral-800 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                Chapter III &middot; Global Community
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              A Worldwide Fellowship on Wheels
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800 inline-block">
              600+ Crafted &middot; Global Distribution
            </span>
          </div>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Verbatim Text Box */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-card-modern">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Adaptive &amp; Inclusive Propulsion</span>
              </div>

              {/* Exact paragraph 5 verbatim */}
              <div className="space-y-5 text-white/95 text-base sm:text-lg leading-relaxed">
                <p className="border-l-2 border-emerald-400 pl-4 font-medium text-white">
                  {pageContent.exactParagraphs.p5.split('\n')[0]}
                </p>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {pageContent.exactParagraphs.p5.split('\n')[1]}
                </p>
              </div>
            </div>

            {/* Quick stats columns */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white">600+</div>
                <div className="text-[10px] uppercase font-semibold text-neutral-400 mt-1">Bikes Built</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white">Every</div>
                <div className="text-[10px] uppercase font-semibold text-neutral-400 mt-1">Continent</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">Single-Leg</div>
                <div className="text-[10px] uppercase font-semibold text-neutral-400 mt-1">Adaptive Drive</div>
              </div>
            </div>
          </div>

          {/* Worldwide Coastline Photo */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-4 group cursor-pointer flex-1 flex flex-col justify-between shadow-card-modern"
              onClick={() => onImageClick(images.coast)}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-black border border-neutral-800">
                <img
                  src={images.coast.src}
                  alt={images.coast.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-bold shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Examine Coastline Plate</span>
                  </span>
                </div>
              </div>
              <div className="mt-3.5 px-1 flex items-center justify-between text-xs text-neutral-300">
                <span className="font-bold text-white">Plate 04 &mdash; Coastal Touring</span>
                <span className="text-neutral-400">Korea &amp; Costa Rica</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Dual Peloton & Coastal Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="relative rounded-3xl border border-neutral-800 bg-neutral-900 group cursor-pointer aspect-[16/9] w-full overflow-hidden shadow-card-modern"
            onClick={() => onImageClick(images.pelotonFront)}
          >
            <img
              src={images.pelotonFront.src}
              alt={images.pelotonFront.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-6">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">
                Synchronized Stroke Action
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Five-Rider Formation in Motion
                </h3>
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="relative rounded-3xl border border-neutral-800 bg-neutral-900 group cursor-pointer aspect-[16/9] w-full overflow-hidden shadow-card-modern"
            onClick={() => onImageClick(images.peloton)}
          >
            <img
              src={images.peloton.src}
              alt={images.peloton.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-6">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">
                Annual International Gathering &middot; Zeeland
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Peloton on the Delta Works Barrier
                </h3>
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
