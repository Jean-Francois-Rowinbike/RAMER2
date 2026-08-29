import React, { useEffect } from 'react';
import { X, Info, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageAsset } from '../types';

interface ImageModalProps {
  image: ImageAsset | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          id="image-lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            id="image-lightbox-content"
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/80">
              <div className="flex items-center space-x-3">
                {image.tag && (
                  <span className="px-3 py-1 text-xs font-bold rounded-full text-neutral-900 bg-neutral-200">
                    {image.tag}
                  </span>
                )}
                <span className="text-sm font-bold text-neutral-900 truncate max-w-md">
                  {image.alt}
                </span>
              </div>
              <button
                id="close-lightbox-btn"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 min-h-0 bg-neutral-900 flex items-center justify-center p-4 sm:p-8 overflow-auto">
              <img
                src={image.src}
                alt={image.alt}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Caption */}
            {image.caption && (
              <div className="px-6 py-4 bg-white border-t border-neutral-100 flex items-start space-x-3 text-neutral-700 text-xs sm:text-sm">
                <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-medium">{image.caption}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
