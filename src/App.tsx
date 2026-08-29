import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { InnovationSection } from './components/InnovationSection';
import { CommunitySection } from './components/CommunitySection';
import { StorySection } from './components/StorySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { ImageAsset } from './types';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<ImageAsset | null>(null);

  const handleImageClick = (image: ImageAsset) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 flex flex-col antialiased selection:bg-amber-300 selection:text-neutral-950">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onImageClick={handleImageClick} />
        <HistorySection onImageClick={handleImageClick} />
        <InnovationSection onImageClick={handleImageClick} />
        <CommunitySection onImageClick={handleImageClick} />
        <StorySection onImageClick={handleImageClick} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox / High-resolution Image Modal */}
      <ImageModal image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
}
