"use client";

import React, { useState } from "react";
import {
  Compass,
  Eye,
  Heart,
  CheckCircle,
  Lightbulb,
  Leaf,
  Users,
} from "lucide-react";

interface MissionVisionSectionProps {
  scrollToSection: (sectionId: string) => void;
}

type Tab = "mission" | "vision" | "values";

export default function MissionVisionSection({
  scrollToSection,
}: MissionVisionSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>("mission");

  const stats = [
    { number: "500+", label: "Properties Managed" },
    { number: "15+", label: "Years of Experience" },
    { number: "1000+", label: "Skilled Professionals" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const missionVisionContent: Record<
    Tab,
    {
      title: string;
      blurb: string;
      bullets: { icon: React.JSX.Element; text: string }[];
      image: string;
      label: string;
    }
  > = {
    mission: {
      title: "Our Mission",
      blurb:
        "To elevate the everyday experience of people and businesses by operating smarter, safer, and more sustainable spaces across the UAE.",
      bullets: [
        {
          icon: <CheckCircle className="w-5 h-5 text-teal-600" />,
          text: "Deliver reliable, end-to-end FM services you can trust.",
        },
        {
          icon: <Lightbulb className="w-5 h-5 text-teal-600" />,
          text: "Empower clients with transparent, data-driven insights.",
        },
        {
          icon: <CheckCircle className="w-5 h-5 text-teal-600" />,
          text: "Uphold safety and compliance as non‑negotiables.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=960&h=720&fit=crop",
      label: "Mission",
    },
    vision: {
      title: "Our Vision",
      blurb:
        "To be the UAE's most trusted facilities partner, setting the benchmark for innovation, sustainability, and customer-centric service.",
      bullets: [
        {
          icon: <Eye className="w-5 h-5 text-teal-600" />,
          text: "Lead with smart, IoT‑driven operations and automation.",
        },
        {
          icon: <Leaf className="w-5 h-5 text-teal-600" />,
          text: "Champion sustainability to reduce environmental impact.",
        },
        {
          icon: <CheckCircle className="w-5 h-5 text-teal-600" />,
          text: "Continuously raise service benchmarks across the region.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=960&h=720&fit=crop",
      label: "Vision",
    },
    values: {
      title: "Our Values",
      blurb:
        "Principles that guide our people and our work—at every site, every shift, and every interaction.",
      bullets: [
        {
          icon: <Heart className="w-5 h-5 text-teal-600" />,
          text: "Integrity and respect for people and property.",
        },
        {
          icon: <Users className="w-5 h-5 text-teal-600" />,
          text: "Teamwork, accountability, and ownership.",
        },
        {
          icon: <Lightbulb className="w-5 h-5 text-teal-600" />,
          text: "A culture of learning and continuous improvement.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=960&h=720&fit=crop",
      label: "Values",
    },
  };

  return (
    <section id="mission-vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear purpose today and a bold ambition for tomorrow—guided by
            enduring values.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Content */}
          <div className="flex flex-col">
            {/* Tabs */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setActiveTab("mission")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                  activeTab === "mission"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-teal-400 hover:text-teal-700"
                }`}
                aria-pressed={activeTab === "mission"}
              >
                <Compass className="w-4 h-4" /> Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                  activeTab === "vision"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-teal-400 hover:text-teal-700"
                }`}
                aria-pressed={activeTab === "vision"}
              >
                <Eye className="w-4 h-4" /> Vision
              </button>
              <button
                onClick={() => setActiveTab("values")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                  activeTab === "values"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-teal-400 hover:text-teal-700"
                }`}
                aria-pressed={activeTab === "values"}
              >
                <Heart className="w-4 h-4" /> Values
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {missionVisionContent[activeTab].title}
              </h3>
              <p className="text-gray-700 mb-6">
                {missionVisionContent[activeTab].blurb}
              </p>
              <ul className="space-y-3 mb-6">
                {missionVisionContent[activeTab].bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5">{b.icon}</span>
                    <span className="text-gray-700">{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3 rounded-full transition-colors"
                >
                  Request a Proposal
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-white border border-gray-300 text-gray-700 hover:border-teal-400 hover:text-teal-700 font-semibold px-5 py-3 rounded-full transition-colors"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={missionVisionContent[activeTab].image}
                alt={`${missionVisionContent[activeTab].label} illustration`}
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <span className="absolute top-4 left-4 bg-white text-teal-700 text-sm font-semibold px-3 py-1 rounded-full shadow">
                {missionVisionContent[activeTab].label}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Leaf className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Sustainable
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Lightbulb className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Innovative
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <Users className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  People-first
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional quick stats strip */}
        <div className="mt-12 bg-white rounded-2xl shadow p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold text-teal-700">
                  {s.number}
                </div>
                <div className="text-sm text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
