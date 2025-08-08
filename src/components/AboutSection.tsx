"use client";

import React from "react";
import { Users, Target, Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in facility management excellence across the UAE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
              alt="About Maqaam Alamer team at work"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-4">
              Maqaam Alamer is a premier facility management company based in
              the UAE, dedicated to providing comprehensive and innovative
              solutions for properties across the Emirates. With over 15 years
              of industry expertise, we have established ourselves as a trusted
              partner for commercial, residential, and industrial facilities.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of skilled professionals is committed to delivering
              exceptional service quality, ensuring that every property we
              manage operates at peak efficiency while maintaining the highest
              standards of safety, cleanliness, and comfort.
            </p>
            <p className="text-gray-600 mb-6">
              We pride ourselves on our ability to understand and adapt to the
              unique needs of each client, providing tailored solutions that not
              only meet but exceed expectations. Our integrated approach
              combines cutting-edge technology with proven management practices
              to deliver sustainable and cost-effective facility management
              services.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Expert Team
                </p>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Goal Oriented
                </p>
              </div>
              <div className="text-center">
                <Briefcase className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Professionalism
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
