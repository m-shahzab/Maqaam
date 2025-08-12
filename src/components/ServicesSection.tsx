"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Hard Services",
      description: "Technical and Infrastructure-related Services",
      details:
        "HVAC maintenance, electrical systems, plumbing, elevators, and building fabric maintenance",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    },
    {
      title: "Soft Services",
      description: "Cleanliness, Hygiene, and Comfort-related Services",
      details:
        "Cleaning, waste management, pest control, landscaping, and indoor plant maintenance",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop",
    },
    {
      title: "Security & Safety Services",
      description: "Comprehensive security and safety solutions",
      details:
        "24/7 security personnel, CCTV monitoring, access control, fire safety, and emergency response",
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
    },
    {
      title: "Specialized & Support Services",
      description: "Tailored technical and operational support",
      details:
        "Energy management, space planning, move management, and sustainability consulting",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
    {
      title: "Admin & Concierge Services",
      description: "Administrative and hospitality services",
      details:
        "Reception services, mail handling, help desk support, and concierge assistance",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive facility management solutions tailored to meet your
            unique requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-teal-600 font-semibold mb-3">
                  {service.description}
                </p>
                <p className="text-gray-600 mb-4">{service.details}</p>
                <button className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-1 group">
                  Learn More
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
