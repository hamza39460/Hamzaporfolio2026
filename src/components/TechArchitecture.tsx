import React from 'react';

const tools = [
  'Flutter',
  'Dart',
  'Firebase',
  'Node.js',
  'REST APIs',
  'Stripe',
  'CI/CD',
  'Git',
  'PostgreSQL',
  'AWS',
];

const patterns = [
  'MVVM',
  'BLoC',
  'Riverpod',
  'Clean Architecture',
  'Repository Pattern',
  'Dependency Injection',
];

export function TechArchitecture() {
  return (
    <section className="bg-zinc-950 py-32 px-8 border-b border-zinc-800">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-bold text-white mb-6">
          Tools I Trust in Production
        </h2>
        <p className="text-xl text-zinc-400 mb-20 max-w-[700px]">
          No experiments in client projects. Only proven tools with strong communities.
        </p>
        
        <div className="mb-16">
          <h3 className="text-sm text-zinc-500 font-mono mb-6 uppercase tracking-wider">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="text-xl text-zinc-300 font-medium"
              >
                {tool}
                {index < tools.length - 1 && <span className="text-zinc-700 ml-4">·</span>}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm text-zinc-500 font-mono mb-6 uppercase tracking-wider">
            Architecture Patterns
          </h3>
          <div className="flex flex-wrap gap-4">
            {patterns.map((pattern, index) => (
              <span
                key={index}
                className="text-xl text-zinc-300 font-medium"
              >
                {pattern}
                {index < patterns.length - 1 && <span className="text-zinc-700 ml-4">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
