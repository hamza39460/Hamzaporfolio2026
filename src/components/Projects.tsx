import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1764406562219-105937cc3f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcwMDE3Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "FinFlow",
      description: "Personal finance tracker with real-time insights and budget automation.",
      tags: ["Flutter", "Firebase", "Plaid API"]
    },
    {
      image: "https://images.unsplash.com/photo-1719464521902-4dc9595b182d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwYXBwJTIwc2NyZWVufGVufDF8fHx8MTc3MDA4NDYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "SolanaPay Wallet",
      description: "Crypto wallet for secure Solana transactions with QR code payments.",
      tags: ["Flutter", "Solana", "Node.js"]
    },
    {
      image: "https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMDU0MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "FitTrack Pro",
      description: "Workout tracking SaaS with subscription billing and team challenges.",
      tags: ["Flutter", "Firebase", "Stripe"]
    },
    {
      image: "https://images.unsplash.com/photo-1651055693398-0d66969cf759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzAxMDEyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "TaskSync",
      description: "Team collaboration tool with real-time sync and offline-first architecture.",
      tags: ["Flutter", "AWS", "GraphQL"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-slate-50">
      <div className="max-w-[1200px] w-full mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-[200px] h-[400px] bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
