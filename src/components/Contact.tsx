import React from 'react';
import { Github } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-zinc-950 py-32 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[800px]">
          <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
            Have a product to build?
          </h2>
          <p className="text-2xl text-zinc-300 mb-12 leading-relaxed">
            If you care about code quality, scalability, and clear communication, we'll work well together.
          </p>
          
          <div className="flex gap-4 mb-16">
            <a
              href="https://www.upwork.com/freelancers/~01aaf214297b237cb9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-zinc-950 rounded-lg font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/hamza39460"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold border border-zinc-700 hover:border-zinc-500 transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="text-zinc-500 font-mono text-sm space-y-2">
            <p>Response time: Within 24 hours</p>
            <p>Availability: Open for projects starting March 2026</p>
            <p>Time zones: US, Europe, Middle East</p>
          </div>
        </div>
      </div>
    </section>
  );
}