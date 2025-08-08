"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-teal-900 text-teal-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Maqaam Alamer</h3>
          <p className="text-gray-300 max-w-xs">
            Leading facility management company in the UAE, committed to
            delivering excellence in service and operational efficiency.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-white transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("mission-vision")}
                className="hover:text-white transition-colors"
              >
                Mission & Vision
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-white transition-colors"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:text-white transition-colors"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-teal-400" />
              <span>+971 55 123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-teal-400" />
              <span>info@maqaalamer.ae</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-400" />
              <span>Dubai, UAE</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Maqaam Alamer. All rights reserved.
      </div>
    </footer>
  );
}
