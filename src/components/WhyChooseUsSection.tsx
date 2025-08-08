"use client";

import React from "react";
import { Award, Clock, Globe, CheckCircle } from "lucide-react";

interface WhyChooseUsSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function WhyChooseUsSection({
  scrollToSection,
}: WhyChooseUsSectionProps) {
  const whyChooseUs = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Industry Expertise",
      description:
        "Over 15 years of experience in facility management across the UAE",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance and emergency response teams",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Comprehensive Solutions",
      description: "One-stop solution for all your facility management needs",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring highest service standards",
    },
  ];

  return (
    <section id="whychooseus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for integrated facility management solutions in
            the UAE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-teal-50 rounded-full p-6 w-24 h-24 mx-auto mb-4 group-hover:bg-teal-100 transition-colors flex items-center justify-center">
                <div className="text-teal-600">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Facility Management?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Maqaam Alamer for reliable, efficient, and innovative
            facility management solutions
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
