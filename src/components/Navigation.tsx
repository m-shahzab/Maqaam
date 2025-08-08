"use client";

import React from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}: NavigationProps) {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1
              className={`text-2xl font-bold ${
                isScrolled ? "text-teal-700" : "text-white"
              }`}
            >
              Maqaam Alamer
            </h1>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-teal-600"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-teal-600"
                  : "text-white hover:text-teal-200"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("mission-vision")}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-teal-600"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Mission & Vision
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-teal-600"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-teal-600"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-teal-600"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Contact Us
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? "text-gray-700" : "text-white"}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("mission-vision")}
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 w-full text-left"
            >
              Mission & Vision
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 w-full text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 w-full text-left"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
