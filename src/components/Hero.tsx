import React from 'react';
import { ArrowRight } from 'lucide-react';
import developerPhoto from 'figma:asset/1dd27d7edaaf3c170991fbae4c9b9dd60471d031.png';

export function Hero() {
  return (
    <section className="relative bg-zinc-950 py-40 px-8 border-b border-zinc-800 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-[900px]">
            <h1 className="text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Senior Flutter Engineer for Production-Ready Apps
            </h1>
            <p className="text-2xl text-zinc-300 mb-10 leading-relaxed">
              I help startups ship fast, scale safely, and avoid costly architectural mistakes.
            </p>
            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-12 font-mono">
              <span>5+ years in production</span>
              <span className="text-zinc-700">·</span>
              <span>Top Rated Freelancer</span>
              <span className="text-zinc-700">·</span>
              <span>Apps used by real businesses</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.upwork.com/freelancers/~01aaf214297b237cb9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-zinc-950 rounded-lg font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:flex justify-end items-center">
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 rounded-2xl" />
              <img
                src={developerPhoto}
                alt="Developer"
                className="relative w-full h-full object-cover object-center rounded-2xl"
                style={{
                  mixBlendMode: 'lighten',
                  filter: 'contrast(1.1) brightness(0.95)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}