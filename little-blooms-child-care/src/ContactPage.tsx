import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './components/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Clock3, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Users, 
  Baby, 
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  Smile,
  Heart
} from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://littleblooms.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact & Tour Booking",
        "item": "https://littleblooms.com/contact"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a tour typically last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tours usually take about 30 to 45 minutes. This gives us enough time to visit classrooms, meet teachers, and answer all your questions without rushing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I bring my child to the tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! In fact, we encourage it. We love meeting our potential students, and it gives you a chance to see how they respond to our environment."
        }
      },
      {
        "@type": "Question",
        "name": "What should I bring with me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You don't need to bring anything specific, but we recommend having a list of questions ready. If you're interested in immediate enrollment, bringing your child's immunization records can speed up the process."
        }
      },
      {
        "@type": "Question",
        "name": "Are weekend tours available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, we offer tours during our operating hours (Monday-Friday, 7 AM - 6 PM) so you can see the center in action. Special weekend open houses are held quarterly."
        }
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, faqSchema]
  };

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const programs = [
    "Infant (6 weeks - 18 months)",
    "Toddler (18 months - 3 years)",
    "Preschool (3 - 4 years)",
    "Pre-K (4 - 5 years)",
    "School-Age (5 - 12 years)"
  ];

  const sourceOptions = [
    "Google Search",
    "Social Media (Facebook/Instagram)",
    "Friend/Family Referral",
    "Local Community Ad",
    "Drove By",
    "Other"
  ];

  const faqs = [
    {
      q: "How long does a tour typically last?",
      a: "Tours usually take about 30 to 45 minutes. This gives us enough time to visit classrooms, meet teachers, and answer all your questions without rushing."
    },
    {
      q: "Can I bring my child to the tour?",
      a: "Absolutely! In fact, we encourage it. We love meeting our potential students, and it gives you a chance to see how they respond to our environment."
    },
    {
      q: "What should I bring with me?",
      a: "You don't need to bring anything specific, but we recommend having a list of questions ready. If you're interested in immediate enrollment, bringing your child's immunization records can speed up the process."
    },
    {
      q: "Are weekend tours available?",
      a: "Currently, we offer tours during our operating hours (Monday-Friday, 7 AM - 6 PM) so you can see the center in action. Special weekend open houses are held quarterly."
    }
  ];

  return (
    <div className="bg-bloom-white min-h-screen pt-20">
      <SEO 
        title="Contact & Book a Tour" 
        description="Schedule a private tour at Little Blooms Child Care. Meet our teachers, explore our classrooms, and learn about our enrollment process. Response within 2 hours!"
        canonical="https://littleblooms.com/contact"
        schema={combinedSchema}
      />
      {/* 1. Page Header */}
      <section className="bg-bloom-cream/30 py-16 lg:py-24 border-b border-bloom-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-bloom-green/10 text-bloom-green p-3 rounded-2xl mb-6"
          >
            <Heart fill="currentColor" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-7xl font-display font-extrabold text-bloom-charcoal mb-6 leading-tight"
          >
            We'd Love to Meet You <br />
            <span className="text-bloom-peach italic">& Your Little One</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-bloom-charcoal/60 max-w-2xl mx-auto"
          >
            Experience the magic of Little Blooms firsthand. Schedule your private tour and see where your child's journey begins.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Content (60/40 Split) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left side: Booking Form */}
            <div className="lg:w-3/5">
              <div className="bg-bloom-white rounded-[3rem] p-8 lg:p-12 shadow-2xl shadow-bloom-green/5 border border-bloom-green/10">
                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 bg-bloom-green/10 rounded-full flex items-center justify-center mx-auto mb-8 text-bloom-green">
                        <CheckCircle2 size={48} />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-bloom-charcoal mb-4">Tour Requested!</h2>
                      <p className="text-bloom-charcoal/60 text-lg mb-8 max-w-sm mx-auto">
                        We've received your request and will call you within 2 hours to confirm your preferred time slot.
                      </p>
                      <button 
                        onClick={() => setFormState('idle')}
                        className="font-bold text-bloom-green hover:underline decoration-2"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0 }}>
                      <div className="mb-10">
                        <h3 className="text-2xl font-display font-bold text-bloom-charcoal mb-2">Request a Private Tour</h3>
                        <p className="text-bloom-charcoal/40 text-sm font-medium">Please fill out the details below and we'll be in touch shortly.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-bloom-charcoal/40 uppercase tracking-[0.2em] mb-2">Parent's Full Name</label>
                            <input required type="text" placeholder="Sarah Johnson" className="w-full bg-bloom-cream/50 border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-bloom-charcoal/40 uppercase tracking-[0.2em] mb-2">Child's Name</label>
                            <input required type="text" placeholder="Sophie Johnson" className="w-full bg-bloom-cream/50 border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-bloom-charcoal/40 uppercase tracking-[0.2em] mb-2">Child's Date of Birth</label>
                            <input required type="date" className="w-full bg-bloom-cream/50 border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-bloom-charcoal/40 uppercase tracking-[0.2em] mb-2">Program of Interest</label>
                            <select defaultValue="" className="w-full bg-bloom-cream/50 border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all appearance-none cursor-pointer">
                              <option value="" disabled>Select a program</option>
                              {programs.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-bloom-charcoal/40 uppercase tracking-[0.2em] mb-2">Preferred Tour Date</label>
                            <input required type="date" className="w-full bg-bloom-cream/50 border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-bloom-charcoal/40 uppercase tracking-[0.2em] mb-2">Preferred Time</label>
                            <select defaultValue="" className="w-full bg-bloom-cream/50 border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all appearance-none cursor-pointer">
                              <option value="" disabled>Select a time window</option>
                              <option value="morning">Morning (8 AM - 11 AM)</option>
                              <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                              <option value="flexible">I'm Flexible</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-bloom-charcoal/40 uppercase tracking-[0.2em] mb-2">How did you hear about us?</label>
                          <select defaultValue="" className="w-full bg-bloom-cream/50 border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all appearance-none cursor-pointer">
                            <option value="" disabled>Select an option</option>
                            {sourceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-bloom-charcoal/40 uppercase tracking-[0.2em] mb-2">Any questions or notes?</label>
                          <textarea rows={4} placeholder="Let us know if there's anything specific you'd like to see..." className="w-full bg-bloom-cream/50 border-transparent focus:border-bloom-green focus:ring-4 focus:ring-bloom-green/10 rounded-2xl p-4 transition-all"></textarea>
                        </div>

                        <div className="pt-4">
                          <button 
                            disabled={formState === 'submitting'}
                            type="submit" 
                            className="w-full bg-bloom-green text-bloom-white py-5 rounded-2xl font-bold text-lg hover:bg-bloom-green/90 transition-all shadow-xl shadow-bloom-green/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          >
                            {formState === 'submitting' ? 'Processing...' : 'Reserve My Tour Spot'}
                            {formState === 'idle' && <ChevronRight size={20} />}
                          </button>
                          <p className="text-center text-[10px] uppercase font-bold tracking-widest text-bloom-charcoal/30 mt-4">
                            Spots limited. Tours fill up quickly.
                          </p>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right side: Contact Info Sidebar */}
            <div className="lg:w-2/5 space-y-12">
              {/* Maps Placeholder */}
              <div className="bg-bloom-white rounded-[2.5rem] overflow-hidden shadow-xl border border-bloom-green/10 group cursor-pointer h-72 relative">
                <div className="absolute inset-0 bg-bloom-cream/50 flex flex-col items-center justify-center text-center p-8">
                  <div className="bg-bloom-white p-4 rounded-3xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="text-bloom-green" size={32} />
                  </div>
                  <h4 className="font-bold text-bloom-charcoal mb-1">Find Us Here</h4>
                  <p className="text-sm text-bloom-charcoal/60">123 Blossom Lane, Sunnyside, NY 11104</p>
                  <p className="mt-4 text-bloom-green font-bold text-xs uppercase tracking-widest hover:underline decoration-2">Open in Google Maps</p>
                </div>
                {/* Visual Map Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00ab4e_1px,transparent_1px)] [background-size:20px_20px] -z-10" />
              </div>

              {/* Direct Channels */}
              <div className="space-y-6">
                <a href="tel:5551234567" className="flex items-center gap-6 p-6 bg-bloom-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-bloom-peach/20">
                  <div className="bg-bloom-peach/10 p-4 rounded-2xl text-bloom-peach group-hover:bg-bloom-peach group-hover:text-bloom-white transition-all">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bloom-charcoal/40 uppercase tracking-widest mb-1">Phone Inquiry</p>
                    <p className="text-lg font-display font-bold text-bloom-charcoal">(555) 123-4567</p>
                  </div>
                </a>

                <a href="mailto:hello@littleblooms.com" className="flex items-center gap-6 p-6 bg-bloom-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-bloom-green/20">
                  <div className="bg-bloom-green/10 p-4 rounded-2xl text-bloom-green group-hover:bg-bloom-green group-hover:text-bloom-white transition-all">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bloom-charcoal/40 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-display font-bold text-bloom-charcoal">hello@littleblooms.com</p>
                  </div>
                </a>

                <a href="https://wa.me/5551234567" className="flex items-center gap-6 p-6 bg-[#25D366]/10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-[#25D366]/30">
                  <div className="bg-[#25D366] p-4 rounded-2xl text-white shadow-lg shadow-[#25D366]/20 group-hover:scale-105 transition-transform">
                    <MessageCircle />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#25D366]/60 uppercase tracking-widest mb-1">WhatsApp Chat</p>
                    <p className="text-lg font-display font-bold text-bloom-charcoal">Chat With a Director</p>
                  </div>
                </a>
              </div>

              {/* Hours of Operation */}
              <div className="bg-bloom-charcoal text-bloom-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                <h4 className="text-xl font-display font-bold mb-8 flex items-center gap-3">
                  <Clock3 className="text-bloom-green" /> Hours of Operation
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="font-medium opacity-60">Monday - Friday</span>
                    <span className="font-bold">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="font-medium opacity-60">Saturday</span>
                    <span className="font-bold text-bloom-peach">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="font-medium opacity-60">Sunday</span>
                    <span className="font-bold text-bloom-peach">Closed</span>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-bloom-green">
                  <ShieldCheck size={14} /> Open 250 days a year
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-bloom-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust Strip */}
      <section className="py-20 bg-bloom-cream/30 border-y border-bloom-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-bloom-green">
                <Clock size={32} />
              </div>
              <h4 className="text-lg font-display font-bold text-bloom-charcoal">Response within 2 hours</h4>
              <p className="text-bloom-charcoal/60 text-sm">We value your time. Our team is dedicated to fast, clear communication.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-bloom-peach">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-lg font-display font-bold text-bloom-charcoal">No Pressure Tours</h4>
              <p className="text-bloom-charcoal/60 text-sm">We're here to help you find the best fit for your family, no catch.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-bloom-lavender">
                <Smile size={32} />
              </div>
              <h4 className="text-lg font-display font-bold text-bloom-charcoal">Bring Your Little One Along</h4>
              <p className="text-bloom-charcoal/60 text-sm">We love meeting kids! Our facility is fully equipped for your visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tour FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-extrabold text-bloom-charcoal">Tour Questions</h2>
            <p className="text-bloom-charcoal/60 mt-2">Everything you need to know about visiting our center.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-bloom-white rounded-3xl border border-bloom-green/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm">
                <summary className="flex items-center justify-between p-7 cursor-pointer hover:bg-bloom-cream/20 transition-colors">
                  <h4 className="font-bold text-bloom-charcoal pr-8">{faq.q}</h4>
                  <div className="w-8 h-8 rounded-full border border-bloom-charcoal/10 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                    <ChevronRight size={16} />
                  </div>
                </summary>
                <div className="px-7 pb-7 text-bloom-charcoal/60 leading-relaxed text-sm border-t border-bloom-charcoal/5 pt-5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
