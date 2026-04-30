import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Heart, 
  ShieldCheck, 
  BookOpen, 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  Baby,
  Smile,
  GraduationCap,
  Lock,
  Youtube
} from 'lucide-react';
import ProgramDetail from './ProgramDetail';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import MobileCTA from './components/MobileCTA';
import TopBanner from './components/TopBanner';
import WhatsAppWidget from './components/WhatsAppWidget';
import SEO from './components/SEO';

// --- Shared Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const NavLink = ({ href, children, ...props }: { href: string, children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isHash = href.startsWith('#');
    if (isHome && isHash) {
      return <a href={href} className="font-medium text-bloom-charcoal/70 hover:text-bloom-green transition-colors" {...props}>{children}</a>;
    }
    return <Link to={isHash ? `/${href}` : href} className="font-medium text-bloom-charcoal/70 hover:text-bloom-green transition-colors" {...props}>{children}</Link>;
  };

  return (
    <nav className="relative w-full bg-bloom-white/80 backdrop-blur-md border-b border-bloom-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-bloom-green p-2 rounded-xl">
              <Heart className="text-bloom-white w-6 h-6" fill="currentColor" />
            </div>
            <span className="text-2xl font-display font-extrabold text-bloom-charcoal tracking-tight">
              Little <span className="text-bloom-green">Blooms</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <Link 
              to="/contact" 
              className="bg-bloom-green text-bloom-white px-6 py-3 rounded-full font-bold hover:bg-bloom-green/90 transition-all shadow-lg shadow-bloom-green/20"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-bloom-charcoal">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-bloom-white border-b border-bloom-green/10 px-4 py-8 space-y-4 shadow-xl absolute top-full left-0 w-full"
          >
            <NavLink href="#programs" onClick={() => setIsOpen(false)}>Programs</NavLink>
            <NavLink href="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</NavLink>
            <NavLink href="/contact" onClick={() => setIsOpen(false)}>Book a Tour</NavLink>
            <div className="pt-4 px-4">
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-bloom-green text-bloom-white px-6 py-5 rounded-2xl font-bold text-center text-lg shadow-lg"
              >
                Schedule My Tour
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-bloom-cream to-bloom-white">
      {/* CSS-only Decorative Elements */}
      <div className="absolute top-40 left-10 opacity-20 animate-floating">
        <div className="w-12 h-12 bg-bloom-green rounded-full relative">
          <div className="absolute inset-0 border-4 border-bloom-white rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-1/2 right-20 opacity-20 animate-floating transition-all delay-700">
        <div className="w-16 h-16 bg-bloom-peach rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] rotate-45"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-10 animate-floating delay-1000">
        <div className="w-20 h-20 bg-bloom-lavender rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-bloom-green/10 text-bloom-green rounded-full text-sm font-bold uppercase tracking-wider mb-6"
            >
              Licensed & Family-Preferred
            </motion.span>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-bloom-charcoal leading-[1.1] mb-8">
              Where Little Ones Bloom Into <br />
              <span className="text-bloom-peach text-6xl lg:text-8xl block mt-2">Big Dreamers</span>
            </h1>
            <p className="text-lg lg:text-xl text-bloom-charcoal/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience a warm, sunshine-filled environment where safety meets discovery. Our nurturing curriculum is designed to foster love, curiosity, and joyful learning foundations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-5 bg-bloom-green text-bloom-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-bloom-green/30 flex items-center justify-center gap-2"
              >
                Schedule a Free Tour <ChevronRight size={20} />
              </Link>
              <a 
                href="#programs" 
                className="w-full sm:w-auto px-8 py-5 bg-bloom-white text-bloom-charcoal border-2 border-bloom-green/20 rounded-full font-bold text-lg hover:bg-bloom-green/5 transition-colors"
              >
                See Our Programs
              </a>
            </div>
            
            {/* Trust Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-bloom-green/10">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-bloom-green/10 p-2 rounded-lg text-bloom-green">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-sm text-bloom-charcoal">Licensed & Certified</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-bloom-green/10 p-2 rounded-lg text-bloom-green">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-sm text-bloom-charcoal">CCTV Monitored</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-bloom-green/10 p-2 rounded-lg text-bloom-green">
                  <Heart size={20} />
                </div>
                <span className="font-bold text-sm text-bloom-charcoal">Nutritious Meals Included</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] sm:aspect-square rounded-[3rem] overflow-hidden rotate-2 shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/childcare-hero/800/1000" 
                alt="Happy child playing" 
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Playful Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-bloom-white p-6 rounded-3xl shadow-xl z-20 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-bloom-green/10 p-2 rounded-xl">
                  <ShieldCheck className="text-bloom-green w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs text-bloom-charcoal/60 font-bold uppercase tracking-wider">Safety First</p>
                  <p className="font-display font-bold text-bloom-charcoal leading-tight">100% Secure <br />Facility</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-bloom-white p-6 rounded-3xl shadow-xl z-20 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-bloom-peach/10 p-2 rounded-xl">
                  <BookOpen className="text-bloom-peach w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs text-bloom-charcoal/60 font-bold uppercase tracking-wider">Curriculum</p>
                  <p className="font-display font-bold text-bloom-charcoal leading-tight">Play-Based <br />Development</p>
                </div>
              </div>
            </motion.div>

            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-bloom-green/5 -rotate-6 rounded-[5rem] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Infant Care",
      age: "6 Weeks – 12 Months",
      description: "A gentle, sensorially-rich environment focused on safe exploration and secure attachment.",
      color: "bg-bloom-green/10",
      accent: "text-bloom-green",
      benefits: ["1:3 Teacher Ratio", "Individualized Feeding", "Sensory Discovery"],
      icon: <Baby className="w-10 h-10" />
    },
    {
      title: "Toddler Program",
      age: "1 – 2 Years",
      description: "Supporting rapid curiosity and language through sensory play and social-emotional growth.",
      color: "bg-bloom-peach/10",
      accent: "text-bloom-peach",
      benefits: ["Potty Training Support", "Social Skill Building", "Outdoor Play"],
      icon: <Smile className="w-10 h-10" />
    },
    {
      title: "Preschool",
      age: "3 – 4 Years",
      description: "Igniting a love for learning with literacy, early math, and collaborative creative projects.",
      color: "bg-bloom-lavender/10",
      accent: "text-bloom-lavender",
      benefits: ["STEAM Projects", "Language Immersion", "Creative Express"],
      urgency: "Only 3 spots left!",
      icon: <GraduationCap className="w-10 h-10" />
    },
    {
      title: "Pre-Kindergarten",
      age: "4 – 5 Years",
      description: "Focused school readiness program ensuring a confident transition to elementary education.",
      color: "bg-bloom-green/10",
      accent: "text-bloom-green",
      benefits: ["Conflict Resolution", "Phonics & Writing", "Music & Movement"],
      icon: <BookOpen className="w-10 h-10" />
    },
    {
      title: "After School",
      age: "5 – 12 Years",
      description: "A safe, fun haven for older children after the school day, with homework help and active play.",
      color: "bg-bloom-peach/10",
      accent: "text-bloom-peach",
      benefits: ["Homework Studio", "Themed Clubs", "Healthy Snacks"],
      icon: <Heart className="w-10 h-10" />
    }
  ];

  return (
    <section id="programs" className="py-24 bg-bloom-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-bloom-charcoal mb-4">A Program for Every Stage of Their Journey</h2>
          <p className="text-lg text-bloom-charcoal/60 max-w-2xl mx-auto">
            Each program is thoughtfully designed to meet children where they are, fostering growth at their own natural pace.
          </p>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 hide-scrollbar">
          {programs.map((prog, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${prog.color} min-w-[300px] flex-none snap-center p-10 rounded-[2.5rem] relative overflow-hidden group border-2 border-transparent hover:border-bloom-charcoal/10 transition-all`}
            >
              {prog.urgency && (
                <div className="absolute top-6 right-6 bg-bloom-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-bloom-peach/20 flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 bg-bloom-peach rounded-full"></span>
                  <span className="text-[10px] font-bold text-bloom-peach uppercase tracking-widest">{prog.urgency}</span>
                </div>
              )}
              
              <div className={`${prog.accent} mb-6 inline-block transform group-hover:scale-110 transition-transform`}>
                {prog.icon}
              </div>
              
              <div className="mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-current opacity-70 ${prog.accent}`}>
                  {prog.age}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-bloom-charcoal mb-3">{prog.title}</h3>
              <p className="text-bloom-charcoal/70 leading-relaxed mb-6 text-sm line-clamp-2">
                {prog.description}
              </p>

              <ul className="space-y-3 mb-8 text-left">
                {prog.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-medium text-bloom-charcoal/60">
                    <div className={`w-1.5 h-1.5 rounded-full bg-current ${prog.accent}`} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link 
                to={`/program/${prog.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-2 font-bold text-bloom-charcoal hover:translate-x-1 transition-transform group/btn"
              >
                Learn More <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhySection = () => {
  const stats = [
    { label: "Happy Families", value: 500, suffix: "+" },
    { label: "Years of Excellence", value: 15, suffix: "+" },
    { label: "Satisfaction Rate", value: 98, suffix: "%" }
  ];

  const features = [
    {
      title: "Qualified Staff",
      desc: "All educators are background-checked and hold early childhood certifications.",
      icon: <ShieldCheck className="text-bloom-green" />
    },
    {
      title: "Low Ratios",
      desc: "We maintain a 1:4 ratio to ensure every child receives personalized attention.",
      icon: <Baby className="text-bloom-peach" />
    },
    {
      title: "Inspired Curriculum",
      desc: "Our Montessori-inspired programs foster independence and natural curiosity.",
      icon: <BookOpen className="text-bloom-lavender" />
    },
    {
      title: "Real-Time Updates",
      desc: "Stay connected through our parent app with daily photos and activity logs.",
      icon: <Smile className="text-bloom-green" />
    },
    {
      title: "Nutritious Meals",
      desc: "Enjoy organic, nutritionist-planned meals prepared fresh in our kitchen.",
      icon: <Heart className="text-bloom-peach" />
    },
    {
      title: "Safe Environment",
      desc: "Biometric security and CCTV ensure your little ones are always protected.",
      icon: <ShieldCheck className="text-bloom-lavender" />
    }
  ];

  return (
    <section className="py-24 bg-bloom-cream/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-bloom-charcoal mb-4">
            Why Thousands of Parents Trust Little Blooms
          </h2>
          <div className="w-24 h-1 bg-bloom-peach mx-auto rounded-full mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Stats */}
          <div className="lg:w-2/5 w-full grid gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-bloom-white p-8 rounded-[2rem] shadow-sm border border-bloom-green/5 flex flex-col items-center lg:items-start"
              >
                <div className="flex items-baseline gap-1 text-bloom-green font-display font-black text-5xl mb-2">
                  <Counter value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-bloom-charcoal/60 font-bold uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Features */}
          <div className="lg:w-3/5 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="bg-bloom-white p-3 rounded-2xl shadow-sm h-fit shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-bloom-charcoal text-lg mb-2">{feature.title}</h4>
                  <p className="text-bloom-charcoal/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accreditation Strip */}
        <div className="mt-24 pt-12 border-t border-bloom-charcoal/5">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-bloom-charcoal/40 mb-10">
            Our Certified Standards & Accreditations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-display font-black text-xl italic text-bloom-charcoal select-none">
              <ShieldCheck className="text-bloom-green" /> NAEYC
            </div>
            <div className="flex items-center gap-2 font-display font-black text-xl italic text-bloom-charcoal select-none">
              <Star className="text-bloom-peach" /> QRIS PLATINUM
            </div>
            <div className="flex items-center gap-2 font-display font-black text-xl italic text-bloom-charcoal select-none">
              <Baby className="text-bloom-lavender" /> CDC APPROVED
            </div>
            <div className="flex items-center gap-2 font-display font-black text-xl italic text-bloom-charcoal select-none">
              <Heart className="text-bloom-green" /> FIRST AID CERT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2000;
    const incrementTime = Math.max(duration / end, 10);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <span ref={ref}>{count}</span>;
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Rivera",
      child: "Sophie, Age 4",
      quote: "Little Blooms has been a blessing for our family. Our daughter wakes up excited to go to school every morning. The teachers are like second parents—my daughter runs into her classroom with a huge smile every day.",
      image: "https://picsum.photos/seed/parent1/100/100"
    },
    {
      name: "David Chen",
      child: "Leo, Age 2",
      quote: "The facility is spotless and the communication is fantastic. I love getting the daily photos and updates on what my son is learning. It's a huge relief for working parents.",
      image: "https://picsum.photos/seed/parent2/100/100"
    },
    {
      name: "Sarah Johnson",
      child: "Miles, 12 Months",
      quote: "The staff-to-child ratio in the infant room meant our baby boy got all the snuggles and attention he needed. We feel completely at peace leaving him here.",
      image: "https://picsum.photos/seed/parent3/100/100"
    },
    {
      name: "Marcus Thompson",
      child: "Maya, Age 3",
      quote: "I'm amazed by the curriculum. My 3-year-old is already excited about STEAM projects and can explain how plants grow. It's true exploration, not just care.",
      image: "https://picsum.photos/seed/parent4/100/100"
    },
    {
      name: "Jessica Wu",
      child: "Noah, Age 5",
      quote: "The nutritionist-planned meals are a huge plus—my son is eating more variety than he ever did at home! Professional, clean, and incredibly warm staff.",
      image: "https://picsum.photos/seed/parent5/100/100"
    },
    {
      name: "Elena Rodriguez",
      child: "Isabella, Age 4",
      quote: "We've seen such a transformation in Isabella's social skills. She's become so much more confident and empathetic towards her peers. The conflict resolution lessons really work.",
      image: "https://picsum.photos/seed/parent6/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-bloom-lavender/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-bloom-peach rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-bloom-green rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 bg-bloom-white rounded-full shadow-sm mb-6"
          >
            <div className="flex text-bloom-peach">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold text-bloom-charcoal uppercase tracking-widest">4.9 ★ Google (127 Reviews)</span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-bloom-charcoal mb-4">
            Real Words From Real <br />Little Blooms Families
          </h2>
        </div>

        {/* Featured Testimonial */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 bg-bloom-charcoal text-bloom-white p-8 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-bloom-green/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl group-hover:bg-bloom-green/20 transition-all"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <div className="flex text-bloom-peach mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={24} fill="currentColor" />)}
              </div>
              <p className="text-2xl lg:text-3xl font-display font-bold leading-relaxed mb-8 italic">
                "Little Blooms isn't just a daycare; it's a partner in our child's growth. From the organic meals to the STEAM-infused play, every detail is handled with love and excellence."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/featured/100/100" className="w-14 h-14 rounded-full object-cover border-2 border-bloom-green" alt="Parent" />
                <div>
                  <h4 className="font-bold text-xl">The Mitchell Family</h4>
                  <p className="text-bloom-white/60">Parents of Cooper (3) & Eliana (1)</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="aspect-video bg-bloom-white/5 rounded-3xl border border-bloom-white/10 flex flex-col items-center justify-center gap-4 group/video cursor-pointer hover:bg-bloom-white/10 transition-all overflow-hidden relative">
                <img src="https://picsum.photos/seed/video-thumb/400/225" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" />
                <div className="relative z-10 w-16 h-16 bg-bloom-green rounded-full flex items-center justify-center text-bloom-white shadow-xl group-hover:scale-110 transition-transform">
                  <Heart fill="currentColor" className="rotate-90 translate-x-0.5" />
                </div>
                <span className="relative z-10 font-bold uppercase tracking-widest text-xs">Watch Parent Story</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Masonry Grid (Desktop) / Carousel (Mobile) */}
        <div className="flex overflow-x-auto pb-12 gap-8 snap-x md:block md:columns-2 lg:columns-3 md:overflow-visible hide-scrollbar">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid mb-8 bg-bloom-white p-10 rounded-[2.5rem] shadow-xl shadow-bloom-lavender/5 border border-bloom-lavender/10 min-w-[300px] flex-none snap-center md:flex-initial"
            >
              <div className="flex text-bloom-peach mb-6 gap-0.5 text-xs">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" size={14} />)}
              </div>
              <p className="text-bloom-charcoal/80 leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-bloom-cream bg-bloom-cream flex items-center justify-center font-bold text-bloom-green">
                  {t.image ? (
                    <img src={t.image} className="w-full h-full object-cover" alt={t.name} referrerPolicy="no-referrer" />
                  ) : (
                    t.name.split(' ').map(n => n[0]).join('')
                  )}
                </div>
                <div>
                  <h5 className="font-bold text-bloom-charcoal">{t.name}</h5>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-bloom-charcoal/40">Parent of {t.child}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 pb-12">
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-bloom-white rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
            >
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
              <div className="h-4 w-px bg-bloom-charcoal/10"></div>
              <span className="font-bold text-bloom-charcoal group-hover:text-bloom-green transition-colors">Read all 127 Reviews</span>
              <ChevronRight size={18} className="text-bloom-peach group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const items = [
    { label: "Our Classroom", size: "aspect-[4/3]", color: "bg-bloom-green/20", icon: <Smile /> },
    { label: "Outdoor Play", size: "aspect-[3/4]", color: "bg-bloom-peach/20", icon: <Heart /> },
    { label: "Reading Nook", size: "aspect-square", color: "bg-bloom-lavender/20", icon: <BookOpen /> },
    { label: "Art Corner", size: "aspect-[3/2]", color: "bg-bloom-green/10", icon: <Star /> },
    { label: "Nap Area", size: "aspect-[4/5]", color: "bg-bloom-peach/10", icon: <Baby /> },
    { label: "Dining Area", size: "aspect-square", color: "bg-bloom-lavender/10", icon: <Heart /> },
    { label: "Bright Learning", size: "aspect-[4/3]", color: "bg-bloom-green/20", icon: <GraduationCap /> },
    { label: "Sensory Garden", size: "aspect-[3/2]", color: "bg-bloom-peach/20", icon: <Heart /> },
  ];

  return (
    <section className="py-24 bg-bloom-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-bloom-charcoal mb-4">
            Step Inside Little Blooms
          </h2>
          <p className="text-lg text-bloom-charcoal/60 max-w-xl mx-auto">
            See the spaces where your child will learn, play, and grow every single day.
          </p>
        </div>

        <div className="columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-[2.5rem] break-inside-avoid ${item.size} cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              {/* Image Placeholder with Gradient */}
              <div className={`absolute inset-0 ${item.color} flex items-center justify-center`}>
                {/* Simulated Photo Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/5"></div>
                <div className="text-bloom-charcoal/10 scale-[2] group-hover:scale-[2.5] transition-transform duration-700 opacity-50">
                  {item.icon}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bloom-charcoal/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <div className="text-bloom-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-bloom-green rounded-2xl">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                  </div>
                  <h4 className="text-xl font-display font-bold mb-1">{item.label}</h4>
                  <p className="text-sm text-bloom-white/70 font-medium">Click to explore area</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-bloom-green text-bloom-white rounded-full font-bold text-lg hover:bg-bloom-green/90 transition-all shadow-xl shadow-bloom-green/20 flex items-center gap-2 group"
            >
              Take the Full Virtual Tour <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="text-bloom-charcoal font-bold text-lg border-b-2 border-bloom-peach pb-1 hover:text-bloom-peach transition-colors"
            >
              Schedule an In-Person Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-12">
                <img 
                  src="https://picsum.photos/seed/about1/400/600" 
                  alt="Outdoor play" 
                  className="rounded-3xl h-[400px] w-full object-cover shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <img 
                  src="https://picsum.photos/seed/about2/400/500" 
                  alt="Creative arts" 
                  className="rounded-3xl h-[350px] w-full object-cover shadow-xl mb-4"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-bloom-peach p-8 rounded-3xl text-bloom-white">
                  <p className="text-4xl font-display font-black mb-1">12+</p>
                  <p className="font-bold text-sm uppercase tracking-wider opacity-80">Years of Care</p>
                </div>
              </div>
            </div>
            {/* Background Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-bloom-peach/10 rounded-full blur-3xl" />
          </div>

          <div className="lg:w-1/2 line-height-relaxed">
            <span className="font-accent text-3xl text-bloom-green mb-2 block">Our Philosophy</span>
            <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-bloom-charcoal mb-8 leading-tight">
              A Home Away from Home <br />Rooted in Play
            </h2>
            <div className="space-y-6 text-lg text-bloom-charcoal/70 leading-relaxed">
              <p>
                At Little Blooms, we believe that childhood should be a time of wonder. Our philosophy is rooted in the "Whole Child" approach, focusing on cognitive, emotional, social, and physical development.
              </p>
              <p>
                Our educators aren't just teachers; they're facilitators of discovery. We provide a prepared environment that encourages children to ask "Why?" and explore the answers through hands-on experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const [tourSent, setTourSent] = useState(false);
  const [guideSent, setGuideSent] = useState(false);

  return (
    <section id="enroll" className="py-24 relative overflow-hidden">
      {/* Background Section with Gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bloom-lead rounded-[3rem] p-8 lg:p-20 relative overflow-hidden shadow-2xl">
          
          {/* Decorative Floating Elements */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-floating blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/20 rounded-full animate-floating transition-all delay-1000 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-bloom-lavender/20 rounded-lg animate-slow-spin flex items-center justify-center opacity-30">
            <Heart size={32} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-bloom-peach/20 rounded-full animate-floating flex items-center justify-center opacity-40">
             <Star size={40} className="text-white" />
          </div>

          <div className="relative z-10 text-center text-bloom-white mb-20">
            <h2 className="text-4xl lg:text-7xl font-display font-extrabold mb-6 drop-shadow-sm">
              Give Your Child the Best Start in Life
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
              Limited spots available for {currentMonth}. Join our waitlist or schedule a free tour today.
            </p>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12">
            {/* Left: Schedule a Free Tour */}
            <div className="bg-bloom-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-black/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-bloom-green/10 p-3 rounded-2xl">
                  <Smile className="text-bloom-green" />
                </div>
                <h3 className="text-2xl font-display font-bold text-bloom-charcoal">Schedule a Free Tour</h3>
              </div>

              {tourSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-bloom-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="text-bloom-green" fill="currentColor" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-bloom-charcoal mb-2">Tour Requested!</h4>
                  <p className="text-bloom-charcoal/60">We'll call you within 24 hours to confirm your visit.</p>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setTourSent(true); }}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required type="text" placeholder="Your Name" className="w-full bg-bloom-cream border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                    <select defaultValue="" className="w-full bg-bloom-cream border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all appearance-none cursor-pointer">
                      <option value="" disabled>Child's Age</option>
                      <option>6 Weeks - 12 Months</option>
                      <option>1 - 2 Years</option>
                      <option>3 - 4 Years</option>
                      <option>4 - 5 Years</option>
                      <option>5 - 12 Years</option>
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required type="tel" placeholder="Phone Number" className="w-full bg-bloom-cream border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                    <input required type="date" className="w-full bg-bloom-cream border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                  </div>
                  <button type="submit" className="w-full bg-bloom-green text-bloom-white py-5 rounded-2xl font-bold text-lg hover:bg-bloom-green/90 transition-all shadow-xl shadow-bloom-green/20">
                    Book My Free Tour
                  </button>
                  <p className="text-center text-[10px] uppercase font-bold tracking-widest text-bloom-charcoal/40">
                    No commitment. 100% free. We'll call within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Download Program Guide */}
            <div className="bg-bloom-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-black/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-bloom-peach/10 p-3 rounded-2xl">
                  <BookOpen className="text-bloom-peach" />
                </div>
                <h3 className="text-2xl font-display font-bold text-bloom-charcoal">Download Program Guide</h3>
              </div>

              {guideSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-bloom-peach/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="text-bloom-peach" fill="currentColor" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-bloom-charcoal mb-2">Guide Sent!</h4>
                  <p className="text-bloom-charcoal/60">Check your email for your 12-page PDF guide.</p>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setGuideSent(true); }}>
                  <input required type="text" placeholder="Full Name" className="w-full bg-bloom-cream border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-bloom-cream border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                  <button type="submit" className="w-full bg-bloom-peach text-bloom-white py-5 rounded-2xl font-bold text-lg hover:bg-bloom-peach/90 transition-all shadow-xl shadow-bloom-peach/20">
                    Send Me the Guide
                  </button>
                  <p className="text-center text-[10px] uppercase font-bold tracking-widest text-bloom-charcoal/40">
                    Free 12-page PDF. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest leading-loose">
            <Lock size={12} />
            Your information is safe. We never share your data.
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [newsletterSent, setNewsletterSent] = useState(false);

  return (
    <footer className="bg-bloom-charcoal text-bloom-cream relative mt-32">
      {/* Wavy Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-bloom-charcoal">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C53.7,117.07,135.25,123.6,214,103.11,260,91.13,307,63.13,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Newsletter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-1/2">
        <div className="bg-bloom-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-bloom-green/10">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-display font-black text-bloom-charcoal mb-2">Get Parenting Tips & Center Updates</h3>
            <p className="text-bloom-charcoal/60 font-medium">Join 1,200+ families for our monthly nurturing digest.</p>
          </div>
          {newsletterSent ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-bloom-green/10 text-bloom-green px-8 py-4 rounded-2xl font-bold flex items-center gap-2"
            >
              <Heart size={20} fill="currentColor" /> Welcome to the family!
            </motion.div>
          ) : (
            <form 
              onSubmit={(e) => { e.preventDefault(); setNewsletterSent(true); }}
              className="flex w-full lg:w-auto gap-2"
            >
              <input 
                required 
                type="email" 
                placeholder="Your email address" 
                className="bg-bloom-cream border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl px-6 py-4 w-full lg:w-80 text-bloom-charcoal transition-all placeholder:text-bloom-charcoal/30"
              />
              <button className="bg-bloom-green text-bloom-white px-8 py-4 rounded-2xl font-bold hover:bg-bloom-green/90 transition-all shadow-lg shadow-bloom-green/20 shrink-0">
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-bloom-green p-1.5 rounded-lg">
                <Heart className="text-bloom-white w-5 h-5" fill="currentColor" />
              </div>
              <span className="text-2xl font-display font-black text-bloom-cream tracking-tight">
                Little <span className="text-bloom-green">Blooms</span>
              </span>
            </div>
            <p className="text-bloom-cream/60 leading-relaxed max-w-xs font-medium">
              Nurturing the curious minds of tomorrow through play, love, and community. Where every child has the room to bloom.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-2xl bg-bloom-white/5 border border-white/10 flex items-center justify-center hover:bg-bloom-peach hover:border-bloom-peach transition-all group">
                <Facebook size={20} className="group-hover:text-bloom-white" />
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl bg-bloom-white/5 border border-white/10 flex items-center justify-center hover:bg-bloom-peach hover:border-bloom-peach transition-all group">
                <Instagram size={20} className="group-hover:text-bloom-white" />
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl bg-bloom-white/5 border border-white/10 flex items-center justify-center hover:bg-bloom-peach hover:border-bloom-peach transition-all group">
                <Youtube size={20} className="group-hover:text-bloom-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 text-bloom-white uppercase tracking-widest text-sm opacity-80">Quick Links</h4>
            <ul className="space-y-4 font-medium text-bloom-cream/60">
              <li><a href="#" className="hover:text-bloom-peach transition-all hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="#programs" className="hover:text-bloom-peach transition-all hover:translate-x-1 inline-block">Our Programs</a></li>
              <li><a href="#about" className="hover:text-bloom-peach transition-all hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-bloom-peach transition-all hover:translate-x-1 inline-block">Review Corner</a></li>
              <li><a href="#enroll" className="hover:text-bloom-peach transition-all hover:translate-x-1 inline-block">Schedule a Tour</a></li>
              <li><a href="#" className="hover:text-bloom-peach transition-all hover:translate-x-1 inline-block">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 text-bloom-white uppercase tracking-widest text-sm opacity-80">Get in Touch</h4>
            <div className="space-y-6 text-bloom-cream/60 font-medium">
              <div className="flex gap-4">
                <MapPin size={20} className="text-bloom-green shrink-0" />
                <p className="text-sm">123 Blossom Lane,<br />Sunnyside, NY 11104</p>
              </div>
              <a href="tel:5551234567" className="flex gap-4 hover:text-bloom-peach transition-colors group">
                <Phone size={20} className="text-bloom-green shrink-0 group-hover:animate-bounce" />
                <p className="text-sm">(555) 123-4567</p>
              </a>
              <div className="flex gap-4">
                <Mail size={20} className="text-bloom-green shrink-0" />
                <p className="text-sm">hello@littleblooms.com</p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-bloom-green mb-3">Hours of Operation</p>
                <div className="space-y-1 text-xs">
                  <p className="flex justify-between"><span>Mon - Fri:</span> <span className="text-bloom-white">7:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between"><span>Sat - Sun:</span> <span className="text-bloom-peach font-bold uppercase">Closed</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Blog */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 text-bloom-white uppercase tracking-widest text-sm opacity-80">Latest Stories</h4>
            <div className="space-y-6">
              <a href="#" className="group block">
                <p className="text-bloom-cream/80 font-bold mb-1 group-hover:text-bloom-peach transition-colors line-clamp-2">5 Sensory Play Ideas for Toddlers to Try at Home</p>
                <p className="text-[9px] uppercase font-bold tracking-widest text-white/30">October 12, 2024</p>
              </a>
              <a href="#" className="group block">
                <p className="text-bloom-cream/80 font-bold mb-1 group-hover:text-bloom-peach transition-colors line-clamp-2">The Importance of Routine in Early Childhood Growth</p>
                <p className="text-[9px] uppercase font-bold tracking-widest text-white/30">September 28, 2024</p>
              </a>
              <button className="text-bloom-green text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform group/btn">
                Read Our Blog <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
             <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/10 opacity-60">
                <ShieldCheck size={14} className="text-bloom-green" />
                <span className="text-[9px] font-black uppercase tracking-widest">State Licensed: #12345678</span>
             </div>
             <p className="text-[11px] text-bloom-cream/30 font-bold uppercase tracking-widest">
               © 2026 Little Blooms.
             </p>
          </div>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-bloom-cream/30">
            <Link to="/contact" className="hover:text-bloom-peach transition-colors">Book a Tour</Link>
            <a href="#" className="hover:text-bloom-peach transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bloom-peach transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": "Little Blooms Child Care",
    "image": "https://littleblooms.com/hero.jpg",
    "url": "https://littleblooms.com",
    "telephone": "+1-555-123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Blossom Lane",
      "addressLocality": "Sunnyside",
      "addressRegion": "NY",
      "postalCode": "11104",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7431,
      "longitude": -73.9239
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  };

  return (
    <main>
      <SEO schema={homeSchema} />
      <Hero />
      
      {/* Value Props Strip */}
      <section className="bg-bloom-charcoal py-12 relative z-20 mx-4 sm:mx-8 lg:mx-20 rounded-[2.5rem] -mt-10 mb-10 text-bloom-white overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 grid sm:grid-cols-3 gap-12 items-center">
          <div className="flex items-center gap-6 group">
            <div className="bg-bloom-green/20 p-4 rounded-2xl group-hover:bg-bloom-green/40 transition-colors">
              <ShieldCheck className="w-8 h-8 text-bloom-green" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Safe Haven</h4>
              <p className="text-bloom-white/50 text-sm">CCTV & Secure Access</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="bg-bloom-peach/20 p-4 rounded-2xl group-hover:bg-bloom-peach/40 transition-colors">
              <Heart className="w-8 h-8 text-bloom-peach" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Loving Care</h4>
              <p className="text-bloom-white/50 text-sm">1:4 Teacher Ratio</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="bg-bloom-lavender/20 p-4 rounded-2xl group-hover:bg-bloom-lavender/40 transition-colors">
              <BookOpen className="w-8 h-8 text-bloom-lavender" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Active Mind</h4>
              <p className="text-bloom-white/50 text-sm">STEAM-Infused Lessons</p>
            </div>
          </div>
        </div>
      </section>

      <Programs />
      <WhySection />
      <Testimonials />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen selection:bg-bloom-peach/30">
          <header className="fixed top-0 left-0 w-full z-50">
            <TopBanner />
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/program/:id" element={<ProgramDetail />} />
          </Routes>
          <Footer />
          
          <MobileCTA />
          <WhatsAppWidget />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
