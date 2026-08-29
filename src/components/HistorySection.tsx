import React from 'react';
import { motion } from 'motion/react';
import { ZoomIn, BookOpen, Clock, Award } from 'lucide-react';
import { images, pageContent } from '../data/content';
import { ImageAsset } from '../types';

interface HistorySectionProps {
  onImageClick: (image: ImageAsset) => void;
}

export const HistorySection: React.FC<HistorySectionProps> = ({ onImageClick }) => {
  return (
    <section id="history" className="py-20 md:py-28 bg-[#F8F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-neutral-200 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                Chapter I &middot; Historic Heritage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-neutral-950">
              The Origin &amp; Historical Precedents
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-neutral-700 border border-neutral-200/80 shadow-xs inline-block">
              Patent Registry 1898 &middot; Land Skiff 1930
            </span>
          </div>
        </div>

        {/* Part 1: The 1898 Drawing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            
            {/* Exact verbatim paragraph 1 */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-card-modern space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-neutral-950" />
                <span>Foundational Blueprint</span>
              </div>
              <p className="text-lg text-neutral-900 leading-relaxed font-medium">
                &ldquo;{pageContent.exactParagraphs.p1}&rdquo;
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed px-2">
              This bicycle and altogether rowing machine has a long history; an original idea can be found in this drawing from 1898. Many concepts and designs have emerged over decades of engineering trial and ergonomic exploration.
            </p>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-4 rounded-3xl border border-neutral-200/80 shadow-card-modern group cursor-pointer"
              onClick={() => onImageClick(images.drawing1898)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-neutral-50 aspect-[4/3] flex items-center justify-center border border-neutral-100">
                <img
                  src={images.drawing1898.src}
                  alt={images.drawing1898.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-bold shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    <span>Examine 1898 Patent</span>
                  </span>
                </div>
              </div>
              <div className="mt-3.5 px-2 flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900">Plate 01 &mdash; Original Blueprint Drawing</span>
                <span className="text-neutral-400 font-medium">Circa July 5, 1898</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Part 2: Sport Emergence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-4 rounded-3xl border border-neutral-200/80 shadow-card-modern group cursor-pointer"
              onClick={() => onImageClick(images.landSkiff)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-neutral-50 aspect-[4/3] flex items-center justify-center border border-neutral-100">
                <img
                  src={images.landSkiff.src}
                  alt={images.landSkiff.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white text-neutral-950 text-[11px] font-bold shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Skiff Race</span>
                  </span>
                </div>
              </div>
              <div className="mt-3 px-1 flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900">Plate 02A &mdash; Land Skiff</span>
                <span className="text-neutral-400">England</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-4 rounded-3xl border border-neutral-200/80 shadow-card-modern group cursor-pointer"
              onClick={() => onImageClick(images.roeihistorie1930)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-neutral-50 aspect-[4/3] flex items-center justify-center border border-neutral-100">
                <img
                  src={images.roeihistorie1930.src}
                  alt={images.roeihistorie1930.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white text-neutral-950 text-[11px] font-bold shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Document</span>
                  </span>
                </div>
              </div>
              <div className="mt-3 px-1 flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900">Plate 02B &mdash; Roeihistorie</span>
                <span className="text-neutral-400">London 1930</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            
            {/* Exact verbatim paragraph 2 */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-card-modern space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">
                <Award className="w-4 h-4 text-neutral-950" />
                <span>Evolution into a Sport</span>
              </div>
              <p className="text-lg text-neutral-900 leading-relaxed font-medium">
                &ldquo;{pageContent.exactParagraphs.p2}&rdquo;
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed px-2">
              From early four-wheel land skiffs on English coastal tracks to European velodrome time trials, athletes proved that sliding-seat rowing mechanics on solid ground deliver extraordinary cardiovascular and muscular efficiency.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
