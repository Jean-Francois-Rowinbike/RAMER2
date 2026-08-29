import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles } from 'lucide-react';
import { pageContent } from '../data/content';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(pageContent.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Invitation Box */}
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="border-b border-neutral-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                  Direct Inquiries
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Connect with Jean-François
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800 inline-block">
                Utrecht &mdash; Amsterdam
              </span>
            </div>
          </div>

          {/* Exact verbatim closing paragraph from user prompt */}
          <div className="bg-neutral-900/80 rounded-2xl p-6 sm:p-8 border border-neutral-800 relative z-10">
            <p className="text-lg sm:text-xl text-neutral-100 leading-relaxed text-center font-medium">
              &ldquo;{pageContent.exactParagraphs.closing}&rdquo;
            </p>
          </div>

          {/* Email Interaction Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2 relative z-10">
            
            {/* Primary Action Card */}
            <div className="md:col-span-7 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                Official Correspondence Address
              </span>
              <div className="text-lg sm:text-xl font-bold font-mono text-white select-all">
                {pageContent.email}
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                id="direct-mailto-link"
                href={`mailto:${pageContent.email}?subject=Interested%20in%20Viewing%20the%20Rowingbike`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-bold shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <button
                id="copy-email-btn"
                onClick={copyEmail}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 text-neutral-200 text-xs font-bold transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
