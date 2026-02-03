import React from 'react';
import { ExternalLink } from 'lucide-react';
import munitecImage from 'figma:asset/9ea1314b4bde7bda202da2869f6550d7df54ed6e.png';
import mindMasteredImage from 'figma:asset/6540b0304a1666a134a07f995c9b52768efd054e.png';
import houseOfPadelImage from 'figma:asset/b73e74e4a713da0a056a2b84a58fdee0c8156faa.png';

const projects = [
  {
    title: 'Munitec',
    subtitle: 'School Driver Tracking & Parent Communication System',
    summary: '15K+ daily active parents using real-time GPS tracking with 99.8% uptime',
    highlights: [
      'Offline-first architecture for poor network conditions',
      'RTL support (Hebrew) with Firebase Realtime Database',
      'Background location tracking with push notifications',
      'Eliminated missed pickups, reduced support tickets by 70%'
    ],
    tech: 'Flutter · Firebase · Realtime Database · Background Location',
    links: {
      appStore: 'https://apps.apple.com/us/app/munitec-online/id1621265392',
      playStore: 'https://play.google.com/store/apps/details?id=com.interuse.niture',
    },
    image: munitecImage,
  },
  {
    title: 'Mind Mastered',
    subtitle: 'Hypnosis & Meditation Subscription App',
    summary: 'Full rebuild with audio streaming, subscriptions, and user-generated content',
    highlights: [
      'Built Flutter mobile app + Node.js backend from scratch',
      'Audio playback, downloads, and streaming infrastructure',
      'Subscription-based premium access with in-app purchases',
      'Product designer handled UI/UX, developer implemented all features'
    ],
    tech: 'Flutter · Node.js · REST APIs · In-App Subscriptions · Audio Streaming',
    links: {
      upwork: 'https://www.upwork.com/freelancers/hamza39460?p=1892174065027727360',
      appStore: 'https://apps.apple.com/us/app/mind-mastered/id1538477550',
      playStore: 'https://play.google.com/store/apps/details?id=com.audiohypnosis.app',
    },
    image: mindMasteredImage,
  },
  {
    title: 'House of Padel',
    subtitle: 'Real-Time Court Booking & Payments App',
    summary: 'Cross-platform booking and matchmaking with real-time availability',
    highlights: [
      'Real-time slot booking using Firebase + Riverpod state management',
      'Stripe integration with Apple Pay and Google Pay',
      'Deep linking for booking and match flows',
      'Optimized UI/UX for speed and clarity'
    ],
    tech: 'Flutter · Firebase · Riverpod · Stripe · Apple Pay · Google Pay',
    links: {
      appStore: 'https://apps.apple.com/us/app/play-padel-matchmaking/id6471353079',
      playStore: 'https://play.google.com/store/apps/details?id=com.play.padel',
    },
    image: houseOfPadelImage,
  },
];

export function SelectedWork() {
  return (
    <section className="bg-zinc-950 py-32 px-8 border-b border-zinc-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[1200px] mb-24">
          <h2 className="text-5xl font-bold text-white mb-6">
            Selected Production Work
          </h2>
          <p className="text-xl text-zinc-400">
            Real systems built for real businesses. Not demos.
          </p>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="relative py-20"
              >
                {/* Subtle background contrast */}
                <div className={`absolute inset-0 ${isEven ? 'bg-zinc-950' : 'bg-zinc-900/30'}`} />
                
                <div className={`relative grid grid-cols-1 ${isEven ? 'lg:grid-cols-[40%_60%]' : 'lg:grid-cols-[60%_40%]'} gap-12 items-center`}>
                  {/* Text Content */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-6 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-lg text-zinc-400 mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-zinc-300 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-zinc-400 flex items-start gap-3">
                          <span className="text-white mt-1 text-xs">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <p className="text-sm text-zinc-500 font-mono mb-2">Stack</p>
                      <p className="text-zinc-400 text-sm">{project.tech}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.links.upwork && (
                        <a
                          href={project.links.upwork}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                          Case Study
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={project.links.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        App Store
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        Play Store
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Image Area */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                    <div className="w-full max-w-[700px] min-h-[500px] flex items-center justify-center p-8">
                      <img
                        src={project.image}
                        alt={`${project.title} app screenshots`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}