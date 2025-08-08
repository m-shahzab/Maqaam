"use client";

import React, { JSX, useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Award,
  Clock,
  Globe,
  CheckCircle,
  Star,
  Users,
  Target,
  Briefcase,
  Compass,
  Eye,
  Heart,
  Lightbulb,
  Leaf,
  TrendingUp,
} from "lucide-react";

export default function MaqaamAlamerWebsite(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  type Tab = "mission" | "vision" | "values";
  const [activeTab, setActiveTab] = useState<Tab>("mission");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

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
      bullets: { icon: JSX.Element; text: string }[];
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
          icon: <ShieldCheck />,
          text: "Uphold safety and compliance as non‑negotiables.",
        },
      ].map((b) => b),
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=960&h=720&fit=crop",
      label: "Mission",
    },
    vision: {
      title: "Our Vision",
      blurb:
        "To be the UAE’s most trusted facilities partner, setting the benchmark for innovation, sustainability, and customer-centric service.",
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
          icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
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

  function ShieldCheck() {
    return <CheckCircle className="w-5 h-5 text-teal-600" />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
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

      {/* Hero Section */}
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
            Delivering excellence in integrated facility management solutions
            for commercial, residential, and industrial properties across the
            Emirates
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

      {/* About Us Section */}
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
                of industry expertise, we have established ourselves as a
                trusted partner for commercial, residential, and industrial
                facilities.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of skilled professionals is committed to delivering
                exceptional service quality, ensuring that every property we
                manage operates at peak efficiency while maintaining the highest
                standards of safety, cleanliness, and comfort.
              </p>
              <p className="text-gray-600 mb-6">
                We pride ourselves on our ability to understand and adapt to the
                unique needs of each client, providing tailored solutions that
                not only meet but exceed expectations. Our integrated approach
                combines cutting-edge technology with proven management
                practices to deliver sustainable and cost-effective facility
                management services.
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

      {/* Mission & Vision Section */}
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

      {/* Services Section */}
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
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

      {/* Why Choose Us Section */}
      <section id="whychooseus" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for integrated facility management solutions
              in the UAE
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

      {/* Testimonials Section */}
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
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
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
                  "{testimonial.content}"
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

      {/* Contact Section */}
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
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you for contacting Maqaam Alamer. We will get back to you soon."
                );
              }}
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

      {/* Footer Section */}
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
    </div>
  );
}
