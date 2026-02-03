import React from 'react';

const metrics = [
  { value: '20+', label: 'Production Apps' },
  { value: '5+', label: 'Years in Production' },
  { value: 'Top Rated', label: 'Freelancer Status' },
  { value: '99.9%', label: 'Average Uptime' },
];

const testimonials = [
  {
    quote: "Fantastic developer. Code quality exceeded all expectations - easy to read, well-organized, extensible - it will be easy for me to maintain, edit, and extend. He was extremely responsive to solving all bugs. Will hire again for ongoing development needs. Highly recommended!",
    author: 'Bill',
    role: 'CEO, Dirkes Medical LLC',
  },
  {
    quote: "We did a full booking flutter app connected to a booking system run by a wordpress plugin. Hamza developed everything really fast. But the most impressive thing is his pixel-perfect skills. I handed him a figma and he just made it 100% the same. Absolutely recommended!",
    author: 'Joaquin Reyes',
    role: 'CEO, BookAndGo.app',
  },
  {
    quote: "Hamza was great choice for us to develop mobile application on Flutter. He was able to understand our requirements easily and implement those very efficiently. He followed our time constraints very well. It was curicial part for us since We are a fast-paced working startup. It was also very good part about Hamza that It is very easy to communicate with him",
    author: 'Enis Yildiz',
    role: 'CEO, Bkody Software',
  },
];

export function Proof() {
  return (
    <section className="bg-zinc-950 py-32 px-8 border-b border-zinc-800">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-zinc-500 font-mono text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-16 max-w-[900px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-l-2 border-zinc-700 pl-8">
              <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-white font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-zinc-500 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}