import React from 'react';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { HowIWork } from './components/HowIWork';
import { TechArchitecture } from './components/TechArchitecture';
import { Proof } from './components/Proof';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Hero />
      <SelectedWork />
      <HowIWork />
      <TechArchitecture />
      <Proof />
      <Contact />
    </div>
  );
}
