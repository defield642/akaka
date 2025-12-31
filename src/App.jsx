
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaChevronDown, FaShieldAlt, FaAward, FaCertificate, FaUsers,FaBook, FaPenFancy, FaChalkboardTeacher } from "react-icons/fa";
import akakaLogo from "./assets/Akaka.jpeg";
import { useMemo } from "react";
// Import images
import bg1 from './background/pexels-enginakyurt-1435752.jpg';
import bg2 from './background/pexels-francesco-ungaro-673648.jpg';
import bg3 from './background/pexels-pixabay-268533.jpg';
import bg4 from './background/pexels-pixabay-356056.jpg';
import bg6 from './background/pexels-pixabay-531880.jpg';
import bg7 from './background/pexels-veeterzy-303383.jpg';
import { div } from "framer-motion/client";
import person1 from './person/pexels-anastasia-shuraeva-7278884.jpg';

const backgrounds = [bg1, bg2, bg3, bg4, bg6, bg7];

export default function AkakaWebsite() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  const phoneNumber = "+1(432)323-9533";
  const whatsappNumber = "+1(432)323-9533";
  const whatsappMessage = encodeURIComponent(
    "Hello Akaka, I’m interested in your academic and technical writing services and would love to discuss how you can support my project successfully."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const emailAddress = "akakawriters@gmail.com";

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "services", label: "SERVICES" },
    { id: "why", label: "WHY CHOOSE US" },
    { id: "contact", label: "CONTACT US" },
    { id: "faq", label: "FAQ" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    // update border color when navigating to a section
    pickRandomBorderColor();
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const randomBg = useMemo(() => {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
  }, []);

  const borderColors = ['#FBBF24', '#60A5FA', '#34D399', '#F472B6', '#A78BFA', '#F59E0B', '#FCD34D'];
  const [borderColor, setBorderColor] = useState(borderColors[Math.floor(Math.random() * borderColors.length)]);

  const pickRandomBorderColor = () => {
    const available = borderColors.filter((c) => c !== borderColor);
    const next = available[Math.floor(Math.random() * available.length)];
    setBorderColor(next);
  };

  const lastBorderChangeRef = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const now = Date.now();
      if (now - lastBorderChangeRef.current > 800) {
        pickRandomBorderColor();
        lastBorderChangeRef.current = now;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [borderColor]);

  return (
    <div
      className="font-sans text-gray-800 scroll-smooth relative min-h-screen"
      style={{
        backgroundImage: `url(${randomBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0 min-h-screen"></div>
      <div className="relative z-10 w-full">
      {/* Premium Black Header */}
      <header className="fixed inset-x-0 top-0 bg-black z-50 shadow-2xl border-b border-gray-800 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo with premium styling */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <img
              src={akakaLogo}
              alt="Akaka Logo"
              className="h-11 w-11 object-cover rounded-full border-2 border-white/20 group-hover:border-blue-400 transition-all duration-300 shadow-lg"
            />
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Akaka Academic</span>
          </div>

          {/* Desktop Nav - premium spacing */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide group rounded-lg hover:bg-white/10 backdrop-blur-sm"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-6 transition-all duration-300 rounded-full"></span>
              </button>
            ))}
          </nav>

          {/* Hamburger - premium styling */}
          <div className="lg:hidden">
            <button
              className="text-white text-2xl focus:outline-none hover:text-blue-400 transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - premium styling */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 border-t border-gray-800 px-6 py-4 space-y-3 shadow-2xl backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 text-white/90 hover:text-blue-400 font-medium transition-colors duration-300 border-b border-gray-800 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Ultra-Professional Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"  
        >
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-indigo-600/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 backdrop-blur-sm mb-8"
          >
            <FaCertificate className="text-blue-400 mr-2 text-sm" />
            <span className="text-blue-300 text-sm font-medium">Certified Professional Writer • Professional Excellence</span>
          </motion.div>

          {/* Main Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}>
              Elite <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Writers</span>
              <br />
            </h1>
            <p className="mb-10 text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold" style={{ textShadow: '0 3px 10px rgba(0,0,0,0.9)' }}>
              Transforming ideas into impactful words through <span className="text-cyan-300 font-bold text-2xl">essays</span>, <span className="text-blue-300 font-bold text-2xl">research papers</span>, <span className="text-sky-300 font-bold text-2xl">article publishing</span>, <span className="text-cyan-400 font-bold text-2xl">theses</span>, <span className="text-blue-400 font-bold text-2xl">dissertations</span>, <span className="text-purple-300 font-bold text-2xl">PowerPoint</span> and <span className="text-purple-400 font-bold text-2xl">Canvas</span> support, while solving technical problems in <span className="text-emerald-300 font-bold text-2xl">mathematics</span>, <span className="text-green-400 font-bold text-2xl">taxation</span>, <span className="text-teal-300 font-bold text-2xl">accounting</span>, <span className="text-emerald-400 font-bold text-2xl">data analysis</span>, and providing <span className="text-pink-300 font-bold text-2xl">professional class management services</span>.
            </p>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {[
              { icon: FaUsers, number: "500+", label: "Clients Served" },
              { icon: FaAward, number: "10+", label: "Years Experience" },
              { icon: FaShieldAlt, number: "100%", label: "Compliance Rate" },
              { icon: FaCertificate, number: "24hrs", label: "Response Time" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-4 rounded-2xl border border-blue-500/20 backdrop-blur-sm group-hover:border-blue-400/40 transition-all duration-300 mb-3">
                  <stat.icon className="text-3xl text-blue-300 mx-auto" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1" style={{ textShadow: '0 6px 18px rgba(0,0,0,0.85)' }}>{stat.number}</div>
                <div className="text-gray-200 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col md:flex-row gap-4 justify-center mb-16"
          >
            <a 
              href={`mailto:${emailAddress}`} 
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center gap-3 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" /> Email Us
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 text-white flex items-center justify-center gap-3 hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1"
            >
              <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" /> Chat on WhatsApp
            </a>
            <a 
              href={`tel:${phoneNumber}`} 
              className="group px-8 py-4 rounded-2xl border-2 border-white/20 text-white flex items-center justify-center gap-3 hover:border-blue-400 hover:bg-blue-600/10 transition-all duration-300 font-semibold text-lg backdrop-blur-sm transform hover:-translate-y-1"
            >
              <FaPhoneAlt className="text-xl group-hover:scale-110 transition-transform" /> Call Now
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-400" />
              <span className="text-sm font-medium">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCertificate className="text-blue-400" />
              <span className="text-sm font-medium">Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <FaAward className="text-yellow-400" />
              <span className="text-sm font-medium">Award</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium About Section */}
<section id="about" className="py-20">
  <div className="container mx-auto px-0 max-w-1xl">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center justify-center mb-6">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider">About Us</span>
        </div>
      </div>
      <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}>
        Who <span className="text-yellow-300 font-black">We Are</span>
      </h3>
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-0.5 bg-blue-300 rounded-full"></div>
        <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="w-8 h-0.5 bg-blue-300 rounded-full"></div>
      </div>
      <p className="text-gray-50 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-md" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
        Professional writing services built on trust, expertise, and dedication to your success.
      </p>
    </motion.div>
    <div className="grid gap-8 md:grid-cols-2 items-stretch">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-2xl"></div>
        <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative flex flex-col h-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white">Located in Texas, USA</h3>
              <div className="mt-4 flex justify-center flex-1 items-stretch w-full">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 shadow-lg" style={{ borderColor: borderColor }}>
                  <img src={person1} alt="Located in Texas" className="w-full h-full object-cover block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/60 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text"><b>Our Mission</b></h4>
            </div>
            <p className="text-gray-700 font-medium">To deliver <span className="text-emerald-600 font-bold">accurate, high-quality, and personalized academic and technical writing services that empower</span> <span className="text-green-900 font-medium">our clients to achieve</span> <span className="text-teal-600 font-semibold">their educational and professional goals</span>.</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-violet-200/60 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text"><b>Our Vision</b></h4>
            </div>
            <p className="text-gray-700 font-medium">To <span className="text-violet-600 font-bold">empower students, researchers,</span> <span className="text-blue-800 font-bold">and professionals with high-quality academic and technical writing</span><span className="text-purple-600 font-semibold"> setting the standard for reliability and expertise.</span></p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-rose-200/60 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-700 bg-clip-text">Our Core Values</h4>
            </div>
            <ul className="space-y-3">
              {[
                { icon: "🛡️", label: "Integrity", desc: "Honesty and transparency in all our writing", color: "from-blue-500 to-cyan-500" },
                { icon: "⭐", label: "Professionalism", desc: "Maintaining high standards in every assignment", color: "from-emerald-500 to-teal-500" },
                { icon: "🔒", label: "Confidentiality", desc: "Your work and ideas are always secure with us", color: "from-violet-500 to-purple-500" },
                { icon: "📋", label: "Accountability", desc: "We ensure precise and well researched content", color: "from-orange-500 to-red-500" },
                { icon: "🏆", label: "Excellence", desc: "Striving to deliver exceptional writing every time", color: "from-pink-500 to-rose-500" }
              ].map((value, index) => (
                <li key={index} className="flex items-start gap-3 group/item hover:bg-gradient-to-r hover:from-gray-50 hover:to-white p-2 rounded-lg transition-all duration-200">
                  <div className={`w-8 h-8 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover/item:scale-110 transition-transform duration-200`}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <span className={`font-bold text-transparent bg-gradient-to-r ${value.color} bg-clip-text`}>{value.label}:</span>
                    <span className="text-gray-700 ml-2">{value.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* Elegant Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-0 max-w-1xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-emerald-700 text-sm font-semibold uppercase tracking-wider">Services</span>
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}>
              Our <span className="text-yellow-300 font-black">Services</span>
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-emerald-300 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-300 rounded-full animate-pulse"></div>
              <div className="w-8 h-0.5 bg-emerald-300 rounded-full"></div>
            </div>
            <p className="text-gray-50 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-md" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
              Comprehensive writing solutions tailored to your academic and professional needs
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                title: "Academic Writing Services", 
                points: ["Essay", "Paper", "Thesis", "Research", "Dissertation","Article Publishing","PowerPoint and Canvas"],
                bg: "bg-gradient-to-br from-blue-50 via-indigo-25 to-white",
                border: "border-blue-200"
              },
              { 
                title: "Technical Writing Services", 
                points: ["Mathematics", "Microsoft Excel, SPSS, etc.", "Computer", "Accounting and Finance", "Taxation"],
                bg: "bg-gradient-to-br from-emerald-50 via-green-25 to-white",
                border: "border-emerald-200"
              },
              { 
                title: "Class Management Services", 
                points: ["Academic planning and tutoring", "Classroom organization and support", "Student performance tracking", "Learning resource management", ],
                bg: "bg-gradient-to-br from-violet-50 via-purple-25 to-white",
                border: "border-violet-200"
              },
            ].map((service, index) => {
              const serviceIcons = {
                "Academic Writing Services": {
                  icon: FaBook,
                  colors: "from-blue-500 to-indigo-600",
                  hoverColors: "hover:from-blue-600 hover:to-indigo-700"
                },
                "Technical Writing Services": {
                  icon: FaPenFancy,
                  colors: "from-emerald-500 to-teal-600",
                  hoverColors: "hover:from-emerald-600 hover:to-teal-700"
                },
                "Class Management Services": {
                  icon: FaChalkboardTeacher,
                  colors: "from-violet-500 to-purple-600",
                  hoverColors: "hover:from-violet-600 hover:to-purple-700"
                },
              };
              const currentService = serviceIcons[service.title];
              const Icon = currentService.icon;
          
              return (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative group bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden hover:scale-105 hover:-translate-y-2`}
                >
                  {/* Background decoration */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentService.colors} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white text-3xl" />
                  </div>  
                  {/* Title */}
                  <h4 className="text-2xl font-black mb-6 text-gray-900 group-hover:text-black transition-all duration-300">
                    {service.title}
                  </h4>
                  
                  {/* Services list */}
                  <ul className="space-y-4 text-gray-900 flex-grow">
                    {service.points.map((point, pointIndex) => (
                      <motion.li 
                        key={point} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (pointIndex * 0.05) }}
                        className="flex items-start gap-3 group/item hover:bg-white/60 p-2 rounded-lg transition-all duration-200"
                      >
                        <div className={`w-6 h-6 bg-gradient-to-br ${currentService.colors} rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform duration-200`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-bold text-gray-900 group-hover/item:text-black transition-colors duration-200">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentService.colors} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>      
      </section>

      {/* Sophisticated Why Choose Us Section */}
      <section id="why" className="py-20">
        <div className="container mx-auto px-0 max-w-1xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
          >
            {/* Background decoration */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 left-1/4 w-16 h-16 bg-gradient-to-br from-violet-300/40 to-indigo-300/40 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 right-1/4 w-20 h-20 bg-gradient-to-br from-fuchsia-300/30 to-purple-300/30 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-100 via-violet-100 to-fuchsia-100 bg-opacity-90 px-6 py-3 rounded-full border border-white/30 shadow-lg backdrop-blur-sm">
                  <span className="text-purple-800 text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full animate-pulse"></div>
                    Why Choose Us
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-pulse animation-delay-300"></div>
                  </span>
                </div>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}>
                Why Choose{' '}
                <span className="text-yellow-300 font-black">Akaka</span>
              </h3>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full animate-ping opacity-40"></div>
                </div>
                <div className="w-6 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full animate-bounce"></div>
                <div className="w-6 h-0.5 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></div>
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-spin animation-delay-500"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full animate-ping opacity-40 animation-delay-500"></div>
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
              </div>
              <p className="text-white font-semibold max-w-3xl mx-auto text-lg leading-relaxed drop-shadow-md" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                Discover the unique advantages that make us{' '}
                <span className="text-yellow-300 font-black">your trusted partner</span>{' '}
                in achieving academic and professional excellence.
              </p>
            </div>
          </motion.div>
          
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[ 
              "Affordable pricing tailored to your budget",
              "Expert writers with advanced degrees",
              "Plagiarism-free content with thorough checks",
              "24/7 customer support for your convenience",
              "Timely delivery to meet your deadlines",
              "Customized solutions for unique requirements",
              "Confidentiality and data security guaranteed",
              "Revisions to ensure your satisfaction",
              "Wide range of services covering various subjects",
              "Transparent communication throughout the process"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-100 text-sm drop-shadow-md" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-end Contact Section */}
<section id="contact" className="py-1 relative overflow-hidden">
        <div className="container mx-auto px-0.0001 max-w-0.01xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-1 relative"
          >
            {/* Background decorations */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 left-1/3 w-24 h-24 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-2xl"></div>
            <div className="absolute -top-8 right-1/3 w-28 h-28 bg-gradient-to-br from-red-300/25 to-pink-300/25 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-orange-100 via-amber-100 to-red-100 px-6 py-3 rounded-full border border-orange-200/60 shadow-xl backdrop-blur-sm">
                  <span className="text-orange-700 text-sm font-bold uppercase tracking-[0.15em] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                    Contact Us
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse animation-delay-200"></div>
                  </span>
                </div>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
                Get in{' '}
                <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-red-300 bg-clip-text text-transparent relative">
                  Touch
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60"></div>
                </span>{' '}
                Today
              </h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-5 h-0.1 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
                <div className="relative">
                  <div className="w-5 h-1 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-5 h-1 border-2 border-amber-300 rounded-full animate-spin"></div>
                </div>
                <div className="w-8 h-0.1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                <div className="w-4 h-1 bg-gradient-to-br from-red-400 to-pink-400 rounded-full animate-bounce"></div>
                <div className="w-8 h-0.1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
                <div className="relative">
                  <div className="w-5 h-1 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full animate-pulse animation-delay-400"></div>
                  <div className="absolute inset-0 w-5 h-5 border-2 border-red-300 rounded-full animate-spin animation-delay-400"></div>
                </div>
                <div className="w-5 h-0.1 bg-gradient-to-r from-orange-400 to-transparent rounded-full"></div>
              </div>
              <p className="text-orange-100 max-w-3xl mx-auto text-xl leading-relaxed font-medium drop-shadow-md">
               Ready to elevate your writing projects?{' '}
                <span className="text-amber-300 font-bold">Connect with our experts</span>{' '}
                and experience unparalleled service and support.
              </p>
            </div>
          </motion.div>
          
          {/* Enhanced Contact Cards */}
          <div className="grid md:grid-cols-3 gap-1 mb-1">
            <motion.a 
              href={`mailto:${emailAddress}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden bg-gradient-to-br from-blue-600/90 to-blue-700/90 backdrop-blur-sm p-4 rounded-2xl border border-blue-400/30 hover:border-blue-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-blue-100 transition-colors">
                Email Us
                </h4>
                <div className="text-blue-200 text-sm font-mono bg-blue-800/30 px-4 py-2 rounded-lg">
                  {emailAddress}
                </div>
              </div>
            </motion.a>
            
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden bg-gradient-to-br from-green-600/90 to-green-700/90 backdrop-blur-sm p-4 rounded-2xl border border-green-400/30 hover:border-green-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-green-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <FaWhatsapp className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-green-100 transition-colors">
                Whatsapp
                </h4>
                <div className="text-green-200 text-sm font-mono bg-green-800/30 px-4 py-2 rounded-lg">
                  +{whatsappNumber}
                </div>
              </div>
            </motion.a>
            
            <motion.a 
              href={`tel:${phoneNumber}`}
              onClick={() => alert('Calling Akaka')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-700/90 to-gray-800/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-500/30 hover:border-gray-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-gray-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-slate-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <FaPhoneAlt className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-gray-100 transition-colors">
                Click Here
                </h4>
                <div className="text-gray-200 text-sm font-mono bg-gray-800/30 px-4 py-2 rounded-lg">
                  {phoneNumber}
                </div>
              </div>
            </motion.a>
          </div>
          
          {/* Office Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-100/10 to-red-100/10 backdrop-blur-sm border border-orange-300/20 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h4 className="text-2xl font-bold text-amber-200 mb-4 flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Available 24/7
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium FAQ Section */}
<section id="faq" className="py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
          >
            {/* Background decorations */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 left-1/4 w-32 h-32 bg-gradient-to-br from-teal-300/25 to-cyan-300/25 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 right-1/4 w-36 h-36 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-cyan-100 via-teal-100 to-blue-100 bg-opacity-90 px-6 py-3 rounded-full border border-white/30 shadow-2xl backdrop-blur-sm">
                  <span className="text-cyan-800 text-sm font-bold uppercase tracking-[0.18em] flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full animate-pulse animation-delay-100"></div>
                    FAQ
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse animation-delay-300"></div>
                  </span>
                </div>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}>
                Frequently Asked{' '}
                <span className="text-yellow-300 font-black">Questions</span>
              </h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-14 h-0.5 bg-gradient-to-r from-transparent to-cyan-500 rounded-full"></div>
                <div className="relative">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0.5 w-5 h-5 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full animate-spin"></div>
                  <div className="absolute inset-1 w-4 h-4 bg-white rounded-full animate-pulse animation-delay-300"></div>
                </div>
                <div className="w-10 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
                <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full animate-bounce"></div>
                <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
                <div className="relative">
                  <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full animate-pulse animation-delay-500"></div>
                  <div className="absolute inset-0.5 w-5 h-5 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full animate-spin animation-delay-500"></div>
                  <div className="absolute inset-1 w-4 h-4 bg-white rounded-full animate-pulse animation-delay-800"></div>
                </div>
                <div className="w-14 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
              </div>
              <p className="text-white font-semibold max-w-3xl mx-auto text-lg leading-relaxed drop-shadow-md" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                Find instant answers to your questions about our{' '}
                <span className="text-yellow-300 font-black">academic writing services</span>{' '}
                and how we can assist you in achieving your goals.
              </p>
            </div>
          </motion.div>
          
          <div className="space-y-3">
            {[
              { 
                q: "What types of writing services do you offer?", 
                a: "We provide a wide range of writing services including essays, research papers, theses, dissertations, technical writing, and class management support. Our team of expert writers can handle projects across various academic disciplines and professional fields."
              },
              { 
                q: "How do you ensure the quality of your work?", 
                a: "Quality is our top priority. We have a rigorous quality assurance process that includes thorough research, multiple rounds of editing, and plagiarism checks using advanced software. Additionally, our writers are highly qualified professionals with expertise in their respective fields."
              },
              { 
                q: "What is your pricing structure?", 
                a: "Our pricing is competitive and varies based on the type of service, complexity, and deadline. We offer transparent pricing with no hidden fees. You can request a custom quote based on your specific requirements."
              },
              { 
                q: "How do I place an order?", 
                a: "Placing an order is easy! Simply contact us via email or WhatsApp with your project details, and our team will guide you through the process. We'll discuss your requirements, provide a quote, and set a timeline for delivery."
              },
              { 
                q: "Can I request revisions if I'm not satisfied?", 
                a: "Absolutely! We offer free revisions to ensure that you are completely satisfied with the final product. If there are any aspects of the work that need adjustment, simply let us know, and our team will make the necessary changes."
              },
              { 
                q: "Is my personal information kept confidential?", 
                a: "Yes, we take your privacy seriously. All personal information and project details are kept strictly confidential. We use secure communication channels and data protection measures to safeguard your information."
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-400/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white/10 backdrop-blur-sm"
              >
                <button
                  className="w-full px-5 py-3 text-left flex items-center justify-between focus:outline-none bg-white/5 hover:bg-white/10 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-black text-white text-sm drop-shadow-md" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>{item.q}</span>
                  <FaChevronDown 
                    className={`text-blue-300 transition-transform duration-200 text-xs ${activeFaq === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-4 pt-1 text-white font-semibold text-sm drop-shadow-md" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
                  >
                    {item.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-0.1">
        <div className="container mx-auto px-2 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
              <img
                src={akakaLogo}
                alt="Akaka Logo"
                className="h-8 w-8 object-cover rounded-full border-2 border-blue-200 group-hover:border-blue-300 transition-all"
              />
              <span className="text-lg font-bold group-hover:text-blue-300 transition-colors">Akaka Academic</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-2 pt-2 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs mb-2 md:mb-0">
              © {new Date().getFullYear()} Akaka Academic & Technical Writing Services. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-base" />
              </a>
              <a 
                href={`mailto:${emailAddress}`} 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                aria-label="Email"
              >
                <FaEnvelope className="text-base" />
              </a>
              <a 
                href={`tel:${phoneNumber}`} 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                aria-label="Phone"
              >
                <FaPhoneAlt className="text-base" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
