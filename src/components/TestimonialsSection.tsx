"use client";

import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Al Rashid",
      position: "CEO, Emirates Properties",
      company: "Emirates Properties Group",
      content:
        "Maqaam Alamer has transformed our facility management operations. Their professional team and innovative solutions have significantly improved our property maintenance efficiency. Highly recommended for any organization seeking top-tier facility management services.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Sarah Abdullah",
      position: "Operations Director",
      company: "Dubai Mall Complex",
      content:
        "Working with Maqaam Alamer has been exceptional. Their attention to detail and prompt response to our needs has made them an invaluable partner. The quality of their services consistently exceeds our expectations.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Mohammed Khalil",
      position: "Facilities Manager",
      company: "Al Nahda Towers",
      content:
        "The comprehensive facility management solutions provided by Maqaam Alamer have streamlined our operations remarkably. Their technical expertise and professional approach make them stand out in the industry.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
      name: "Fatima Al Maktoum",
      position: "Property Manager",
      company: "Jumeirah Beach Residences",
      content:
        "Maqaam Alamer's dedication to excellence is evident in every aspect of their service. From routine maintenance to emergency response, they handle everything with utmost professionalism.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      name: "Khalid Hassan",
      position: "General Manager",
      company: "Abu Dhabi Business Park",
      content:
        "We've been partnering with Maqaam Alamer for three years now, and their consistency in delivering high-quality facility management services is remarkable. They truly understand our needs.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      name: "Aisha Ibrahim",
      position: "Head of Operations",
      company: "Sharjah International Airport",
      content:
        "The level of expertise and commitment shown by Maqaam Alamer is outstanding. They have significantly improved our facility operations while reducing overall maintenance costs.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                  width={150}
                  height={150}
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 flex-grow">
                {testimonial.content}
              </p>

              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
