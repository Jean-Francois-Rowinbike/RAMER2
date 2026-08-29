import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ZoomIn, 
  ArrowUpRight, 
  Layers, 
  Zap, 
  Wind, 
  Activity, 
  Sparkles,
  Gauge,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { images, pageContent } from '../data/content';
import { ImageAsset } from '../types';

interface InnovationSectionProps {
  onImageClick: (image: ImageAsset) => void;
}

export const InnovationSection: React.FC<InnovationSectionProps> = ({ onImageClick }) => {
  const [powerMode, setPowerMode] = useState<'standard' | 'rowing'>('rowing');

  return (
    <section id="innovation" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-neutral-200 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                Chapter II &middot; Modern Engineering
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-neutral-950">
              Derk Thijs &amp; The 209 Model
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 inline-block">
              30+ Years of Refinement &middot; 50+ Gears
            </span>
          </div>
        </div>

        {/* Lead Quote Card with Modern Clean Aesthetic */}
        <div className="bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-200/80 mb-12 shadow-xs">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-2xl bg-neutral-950 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Core Design Philosophy
              </span>
              <p className="text-lg sm:text-xl text-neutral-900 leading-relaxed font-medium">
                &ldquo;{pageContent.exactParagraphs.p3}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Model 209 Hero Showcase Card */}
        <div className="mb-12">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden bg-neutral-950 text-white shadow-xl cursor-pointer group border border-neutral-800"
            onClick={() => onImageClick(images.model209)}
          >
            <div className="relative aspect-[16/9] max-h-[500px] w-full overflow-hidden">
              <img
                src={images.model209.src}
                alt={images.model209.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-3">
                      <Zap className="w-3.5 h-3.5 text-amber-300" />
                      <span>Thijs 209 Carbon &middot; High Speed</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
                      &ldquo;As addictive as rowing itself&rdquo;
                    </h3>
                  </div>
                  <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-bold shadow-lg group-hover:bg-neutral-100 transition-all">
                    <ZoomIn className="w-4 h-4" />
                    <span>Inspect Model 209</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modern 3-Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-7 rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-neutral-950 font-display">
              Biomechanical Equivalence
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              The movement itself bears many similarities to rowing itself. Just like in a skiff, everyone can proceed at their own pace. Therefore, it can be exercised very leisurely as well as extremely intensively. Suitable for all ages.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Wind className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-neutral-950 font-display">
              Asphalt Independence
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              An advantage over rowing is that one is not dependent on navigable water. The rowingbike can go anywhere there is asphalt. It has proven to be an excellent solution for people who can only use one leg.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-neutral-950 font-display">
              Global Dispersion
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Derk Thijs has sold more than 600 bikes to every corner of the world, even Korea and Costa Rica. The continuous CVT transmission with 50+ ratios delivers unmatched ergonomic versatility.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
