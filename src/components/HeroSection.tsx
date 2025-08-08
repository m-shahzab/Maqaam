"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-700/80 to-blue-800/80"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Maqaam Alamer
        </h1>
        <p className="text-xl md:text-3xl text-teal-100 mb-8">
          Premier Facility Management Services in UAE
        </p>
        <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto">
          Delivering excellence in integrated facility management solutions for
          commercial, residential, and industrial properties across the Emirates
        </p>
        <button
          onClick={() => scrollToSection("services")}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 inline-flex items-center gap-2"
        >
          Explore Our Services
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
