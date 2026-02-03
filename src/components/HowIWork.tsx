import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Understand the product and constraints',
    description: 'I ask questions. What are the real problems? What can break? What matters to users?',
  },
  {
    number: '02',
    title: 'Design scalable Flutter architecture',
    description: 'Clean separation of concerns. State management that makes sense. Architecture that grows with the product.',
  },
  {
    number: '03',
    title: 'Build, test, and ship production-ready code',
    description: 'Every commit is deployable. Tests cover critical paths. No hacks, no shortcuts that become debt.',
  },
  {
    number: '04',
    title: 'Support, optimize, and iterate',
    description: 'I stick around. Monitor performance. Fix issues fast. Help scale when traffic grows.',
  },
];

export function HowIWork() {
  return (
    <section className="bg-zinc-950 py-32 px-8 border-b border-zinc-800">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-bold text-white mb-24">
          How I Work
        </h2>
        
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-2">
                <span className="text-6xl font-bold text-zinc-800 font-mono">
                  {step.number}
                </span>
              </div>
              <div className="lg:col-span-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-[700px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
