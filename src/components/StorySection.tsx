import React from 'react';
import { motion } from 'motion/react';
import { ZoomIn, MapPin, HeartPulse, Shield, FastForward, CheckCircle2 } from 'lucide-react';
import { images, pageContent } from '../data/content';
import { ImageAsset } from '../types';

interface StorySectionProps {
  onImageClick: (image: ImageAsset) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onImageClick }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F8F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-neutral-200 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                Chapter IV &middot; Daily Commute
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-neutral-950">
              Personal Account &amp; Daily Commute
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-neutral-700 border border-neutral-200/80 shadow-xs inline-block">
              Utrecht &mdash; Amsterdam Route &middot; 35 km
            </span>
          </div>
        </div>

        {/* Story Part 1: Ownership Since 2015 & Morning Ride */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-card-modern space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Personal Account
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Commuter Since 2015
                </span>
              </div>

              {/* Exact Paragraph 6 verbatim */}
              <div className="space-y-4 text-neutral-900 text-lg leading-relaxed font-medium">
                <p>
                  {pageContent.exactParagraphs.p6.split('\n')[0]}
                </p>
                <p className="border-l-2 border-neutral-950 pl-4 italic text-neutral-800 text-base">
                  &ldquo;{pageContent.exactParagraphs.p6.split('\n')[1]}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-neutral-950">
                    Jean-François
                  </p>
                  <p className="text-xs text-neutral-500">
                    Utrecht &mdash; Amsterdam Daily Commuter
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-neutral-400">
                  35 km Daily
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-4 rounded-3xl border border-neutral-200/80 shadow-card-modern group cursor-pointer"
              onClick={() => onImageClick(images.commute)}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 flex items-center justify-center border border-neutral-100">
                <img
                  src={images.commute.src}
                  alt={images.commute.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-bold shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    <span>Examine Commute Plate</span>
                  </span>
                </div>
              </div>
              <div className="mt-3.5 px-2 flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-900">Plate 05 &mdash; Canal Towpath Commute</span>
                <span className="text-neutral-400">35 km Route</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Story Part 2: The Decisive Advantages (Exact Paragraph 7) */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/80 shadow-card-modern space-y-8">
          
          <div className="border-b border-neutral-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
              Comparative Analysis &amp; Musculature
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-950">
              Why I Would Never Trade My Daily Mode of Transport
            </h3>
          </div>

          {/* Exact paragraph 7 verbatim */}
          <div className="text-neutral-800 text-base sm:text-lg leading-relaxed">
            <p className="whitespace-pre-line leading-relaxed">
              {pageContent.exactParagraphs.p7}
            </p>
          </div>

          {/* Three-Column Modern Analysis Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-100">
            
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                <HeartPulse className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-neutral-950">
                01 &middot; Muscular Harmony
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Unlike traditional cycling that creates disproportionate strain, rowing engages calves, thighs, glutes, core, back, shoulders, and arms simultaneously.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-neutral-950">
                02 &middot; Low Center of Gravity
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Because the riding position is significantly lower to the pavement, accidental loss of balance carries virtually zero severe trajectory impact.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                <FastForward className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-neutral-950">
                03 &middot; Daily Time Savings
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                15 minutes faster over 35 kilometers between Utrecht and Amsterdam, providing extra rest and continuous aerobic vitality every morning.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
