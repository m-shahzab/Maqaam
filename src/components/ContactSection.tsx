"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for contacting Maqaam Alamer. We will get back to you soon."
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are here to help you. Reach out to Maqaam Alamer for your
            facility management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-700">
              <Phone className="w-6 h-6 text-teal-600" />
              <span className="text-lg">+971 55 123 4567</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <Mail className="w-6 h-6 text-teal-600" />
              <span className="text-lg">info@maqaamalamer.ae</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <MapPin className="w-6 h-6 text-teal-600" />
              <span className="text-lg">Dubai, United Arab Emirates</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
