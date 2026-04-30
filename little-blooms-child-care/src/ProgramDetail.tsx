import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from './components/SEO';
import { 
  Heart, 
  ChevronRight, 
  Check, 
  Baby, 
  Smile, 
  GraduationCap, 
  BookOpen, 
  Star, 
  Clock, 
  ShieldCheck, 
  Phone,
  ArrowRight
} from 'lucide-react';

interface Teacher {
  name: string;
  credentials: string;
  experience: string;
  fact: string;
  image: string;
}

interface CurriculumArea {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ScheduleItem {
  time: string;
  activity: string;
}

interface ProgramData {
  id: string;
  name: string;
  age: string;
  headline: string;
  description: string;
  philosophy: string;
  learningApproach: string;
  color: string;
  accent: string;
  heroImage: string;
  curriculum: CurriculumArea[];
  schedule: ScheduleItem[];
  teachers: Teacher[];
  testimonial: {
    quote: string;
    author: string;
  };
  pricing: {
    plan: string;
    price: string;
    features: string[];
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}

// Default Preschool Data for the template example
export const preschoolData: ProgramData = {
  id: "preschool",
  name: "Preschool",
  age: "Ages 3 – 4 Years",
  headline: "Preparing Curious Minds for a Lifetime of Discovery",
  description: "A dynamic, play-based environment where literacy, math, and social skills bloom through hands-on creative projects and collaborative exploration.",
  philosophy: "We believe children are natural researchers. Our preschool environment is designed as the 'third teacher', encouraging autonomy and collaborative problem solving.",
  learningApproach: "Our Reggio-inspired approach emphasizes project-based learning. We document the 'hundred languages of children' through art, music, building, and storytelling.",
  color: "bg-bloom-lavender/10",
  accent: "text-bloom-lavender",
  heroImage: "https://picsum.photos/seed/preschool-hero/1200/600",
  curriculum: [
    { title: "Language & Literacy", desc: "Phonemic awareness, storytelling, and early writing through meaningful communication.", icon: <BookOpen /> },
    { title: "Math & Logic", desc: "Hands-on counting, patterns, and spatial reasoning using blocks and manipulatives.", icon: <Star /> },
    { title: "Scientific Inquiry", desc: "Exploring the natural world, light, shadow, and sensory experiments.", icon: <Star /> },
    { title: "Creative Arts", desc: "Painting, clay, and mixed media projects that prioritize process over product.", icon: <Heart /> },
    { title: "Physical Growth", desc: "Yoga, dancing, and outdoor play that develops gross and fine motor skills.", icon: <Smile /> },
    { title: "Social-Emotional", desc: "Self-regulation, empathy, and collaborative conflict resolution skills.", icon: <Heart /> },
  ],
  schedule: [
    { time: "7:00 AM", activity: "Early Arrivals & Gentle Starters" },
    { time: "9:00 AM", activity: "Morning Circle & Story Time" },
    { time: "9:30 AM", activity: "Exploration & STEAM Projects" },
    { time: "11:30 AM", activity: "Nutritious Lunch & Social Time" },
    { time: "12:30 PM", activity: "Rest & Quiet Reading" },
    { time: "2:30 PM", activity: "Creative Arts & Outdoor Play" },
    { time: "4:30 PM", activity: "Phonics Games & Soft Play" },
    { time: "6:00 PM", activity: "Final Pick-ups" },
  ],
  teachers: [
    { name: "Ms. Elena", credentials: "BA ECE, First Aid Certified", experience: "12 Years Experience", fact: "Loves gardening and teaching kids about plants!", image: "https://picsum.photos/seed/t1/150/150" },
    { name: "Mr. Julian", credentials: "Montessori Lead Guide", experience: "8 Years Experience", fact: "Professional acoustic guitar player.", image: "https://picsum.photos/seed/t2/150/150" },
    { name: "Ms. Sarah", credentials: "AS Child Dev, CDA", experience: "5 Years Experience", fact: "Speaks fluent Spanish and Italian.", image: "https://picsum.photos/seed/t3/150/150" },
  ],
  testimonial: {
    quote: "Our son's vocabulary and social confidence tripled since joining the preschool program. He comes home talking about 'carbon cycles' and 'kindness rocks'!",
    author: "The Thompson Family"
  },
  pricing: [
    { plan: "Part-Time", price: "$850", features: ["3 Days / Week", "Lunch Included", "Daily App Updates"] },
    { plan: "Full-Time", price: "$1,250", features: ["5 Days / Week", "All Meals Included", "STEAM Kits Included", "Priority Re-enrollment"] },
    { plan: "Extended Care", price: "$1,450", features: ["Full-Time Access", "Early/Late Hours", "Weekend Workshops", "Laundry Service"] },
  ],
  faq: [
    { q: "What is the teacher-to-child ratio?", a: "We maintain a strict 1:4 ratio for our preschool program, ensuring every child receives the attention they need during this critical developmental phase." },
    { q: "Is potty training required?", a: "No. While we encourage independence, our teachers are trained to support children at all stages of their potty-training journey." },
    { q: "How do you handle dietary restrictions?", a: "We are a nut-free facility. Our in-house nutritionist designs menus that accommodate allergies and cultural dietary preferences." },
    { q: "What is the security protocol?", a: "We use biometric entry for all families, and our property is monitored by 24/7 CCTV and professional security personnel." },
    { q: "Do the children go outside every day?", a: "Yes! Unless there is severe weather, children spend at least 2 hours daily in our secure outdoor sensory gardens and play areas." },
    { q: "How can I check on my child?", a: "Parents receive real-time updates, photos, and activity logs through our secure Little Blooms Parent App throughout the day." },
  ]
};

const ProgramDetail = ({ data = preschoolData }: { data?: ProgramData }) => {
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
        "name": data.name,
        "item": `https://littleblooms.com/program/${data.id}`
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `${data.name} Child Care`,
    "description": data.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Little Blooms Child Care"
    },
    "areaServed": "Sunnyside, NY",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": data.pricing[0].price.replace('$', ''),
      "highPrice": data.pricing[data.pricing.length-1].price.replace('$', ''),
      "priceCurrency": "USD"
    }
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, productSchema]
  };

  return (
    <div className="bg-bloom-white min-h-screen pt-20">
      <SEO 
        title={`${data.name} Program`} 
        description={`${data.headline}. Discover our ${data.name.toLowerCase()} program for ${data.age}. STEAM-focused curriculum, low ratios, and expert care.`}
        canonical={`https://littleblooms.com/program/${data.id}`}
        schema={combinedSchema}
      />
      {/* 1. Page Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-bloom-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <span className={`inline-block px-4 py-1.5 ${data.color} ${data.accent} rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-current`}>
                  {data.age}
                </span>
                <h1 className="text-4xl lg:text-7xl font-display font-extrabold text-bloom-charcoal mb-6 leading-tight">
                  {data.name} <br />
                  <span className={`${data.accent}`}>{data.id === 'preschool' ? 'Program' : ''}</span>
                </h1>
                <p className="text-xl text-bloom-charcoal/70 mb-10 leading-relaxed max-w-xl">
                  {data.description}
                </p>
                <Link 
                  to="/#enroll"
                  className="inline-block px-10 py-5 bg-bloom-green text-bloom-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-bloom-green/20"
                >
                  Enroll in This Program
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-bloom-white"
               >
                 <img src={data.heroImage} alt={data.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </motion.div>
               <div className={`absolute -inset-4 ${data.color} rounded-[3.5rem] -rotate-3 -z-10`} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Program Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <div>
                  <h2 className="text-3xl font-display font-bold text-bloom-charcoal mb-6 flex items-center gap-4">
                    <div className={`p-3 ${data.color} rounded-2xl ${data.accent}`}>
                      <Heart fill="currentColor" size={24} />
                    </div>
                    Our Philosophy
                  </h2>
                  <p className="text-lg text-bloom-charcoal/70 leading-relaxed">{data.philosophy}</p>
               </div>
               <div>
                  <h2 className="text-3xl font-display font-bold text-bloom-charcoal mb-6 flex items-center gap-4">
                    <div className={`p-3 ${data.color} rounded-2xl ${data.accent}`}>
                      <Star fill="currentColor" size={24} />
                    </div>
                    Learning Approach
                  </h2>
                  <p className="text-lg text-bloom-charcoal/70 leading-relaxed">{data.learningApproach}</p>
               </div>
            </div>
            
            {/* Visual Timeline Sidebar */}
            <div className="bg-bloom-charcoal rounded-[3rem] p-8 lg:p-12 text-bloom-white shadow-2xl">
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                 <Clock className="text-bloom-green" /> Day-at-a-Glance
              </h3>
              <div className="space-y-6 relative border-l-2 border-bloom-white/10 ml-4 pl-8">
                 {data.schedule.map((item, i) => (
                   <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-1 w-4 h-4 bg-bloom-green rounded-full border-4 border-bloom-charcoal" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-bloom-green mb-1">{item.time}</p>
                      <p className="font-bold text-lg">{item.activity}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curriculum Highlights */}
      <section className="py-24 bg-bloom-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-bloom-charcoal">The Curriculum</h2>
            <div className="w-16 h-1 bg-bloom-peach mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {data.curriculum.map((item, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -10 }}
                 className="bg-bloom-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-bloom-green/5 group"
               >
                 <div className={`w-14 h-14 ${data.color} ${data.accent} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                 </div>
                 <h4 className="text-xl font-display font-bold text-bloom-charcoal mb-4">{item.title}</h4>
                 <p className="text-bloom-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. A Day in the Life (Visual Timeline) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-bloom-white border-2 border-dashed border-bloom-peach/30 rounded-[3rem] p-8 lg:p-20 text-center">
              <span className="font-accent text-3xl text-bloom-peach mb-4 block">Process over product</span>
              <h2 className="text-4xl font-display font-extrabold text-bloom-charcoal mb-12">A Day in the Life</h2>
              
              <div className="flex flex-wrap justify-center gap-12 lg:gap-24 relative">
                 {/* Visual connectors */}
                 <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-bloom-peach/20 to-transparent -z-10" />
                 
                 {[
                   { label: "Arrival", icon: "☀️", color: "bg-bloom-green/10" },
                   { label: "Studio Time", icon: "🎨", color: "bg-bloom-peach/10" },
                   { label: "Garden Lab", icon: "🌱", color: "bg-bloom-green/10" },
                   { label: "Nap/Rest", icon: "💤", color: "bg-bloom-lavender/10" },
                   { label: "Circle Fun", icon: "🎭", color: "bg-bloom-peach/10" }
                 ].map((step, i) => (
                   <div key={i} className="flex flex-col items-center">
                      <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner`}>
                        {step.icon}
                      </div>
                      <p className="font-bold text-bloom-charcoal">{step.label}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 5. Meet the Teachers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
              <div className="max-w-xl">
                 <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-bloom-charcoal">Small Ratios. <br />Big Hearts.</h2>
              </div>
              <p className="text-bloom-charcoal/60 font-medium">Lead Teachers only, excluding dedicated support aids.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {data.teachers.map((teacher, i) => (
                <div key={i} className="bg-bloom-white rounded-[2.5rem] p-10 shadow-xl shadow-black/5 hover:shadow-2xl transition-all border border-bloom-green/10 text-center">
                   <div className="w-32 h-32 mx-auto mb-8 relative">
                      <img src={teacher.image} alt={teacher.name} className="w-full h-full rounded-full object-cover border-4 border-bloom-white shadow-lg shadow-black/10" />
                      <div className="absolute -bottom-2 -right-2 bg-bloom-peach text-white p-2 rounded-xl">
                         <Heart size={16} fill="currentColor" />
                      </div>
                   </div>
                   <h4 className="text-2xl font-display font-bold text-bloom-charcoal mb-1">{teacher.name}</h4>
                   <p className="text-bloom-green font-bold text-xs uppercase tracking-widest mb-4">{teacher.credentials}</p>
                   <div className="space-y-4 text-sm text-bloom-charcoal/60">
                      <p className="flex items-center justify-center gap-2"><Star size={14} className="text-bloom-peach" /> {teacher.experience}</p>
                      <p className="italic bg-bloom-cream/50 p-4 rounded-2xl">"{teacher.fact}"</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Parent Testimonial */}
      <section className="py-24 bg-bloom-lavender/10 overflow-hidden relative">
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="text-bloom-lavender flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="currentColor" size={24} />)}
            </div>
            <p className="text-3xl lg:text-4xl font-display font-bold text-bloom-charcoal leading-relaxed italic mb-8">
               "{data.testimonial.quote}"
            </p>
            <p className="font-bold text-bloom-charcoal uppercase tracking-[0.2em]">{data.testimonial.author}</p>
         </div>
         {/* Background Elements */}
         <div className="absolute top-0 right-0 opacity-10 -translate-y-1/2 translate-x-1/2">
            <Smile size={400} />
         </div>
      </section>

      {/* 7. Tuition & Enrollment */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-extrabold text-bloom-charcoal mb-4">Investment in Their Future</h2>
              <p className="text-bloom-charcoal/60">Transparent pricing with no hidden registration fees.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {data.pricing.map((plan, i) => (
                <div key={i} className={`rounded-[2.5rem] p-10 flex flex-col ${i === 1 ? 'bg-bloom-charcoal text-bloom-white shadow-2xl scale-105 relative z-10' : 'bg-bloom-white border-2 border-bloom-green/10'}`}>
                   {i === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bloom-peach text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>}
                   <h4 className="text-2xl font-display font-bold mb-2">{plan.plan}</h4>
                   <div className="flex items-baseline mb-8">
                      <span className="text-4xl font-display font-black">{plan.price}</span>
                      <span className="opacity-50 text-sm ml-1">/ month</span>
                   </div>
                   <ul className="space-y-4 mb-12 flex-1">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex gap-3 text-sm font-medium">
                           <Check size={18} className="text-bloom-green shrink-0" />
                           {f}
                        </li>
                      ))}
                   </ul>
                   <button className={`w-full py-5 rounded-2xl font-bold transition-all ${i === 1 ? 'bg-bloom-peach text-white shadow-xl shadow-bloom-peach/20 hover:scale-[1.02]' : 'bg-bloom-green text-white hover:bg-bloom-green/90'}`}>
                      Select Plan
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <section className="py-24 bg-bloom-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-display font-extrabold text-bloom-charcoal mb-12 text-center text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {data.faq.map((item, i) => (
                <details key={i} className="group bg-bloom-cream/30 rounded-3xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                   <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-bloom-cream/50 transition-colors">
                      <h5 className="font-bold text-bloom-charcoal pr-8">{item.q}</h5>
                      <div className="w-8 h-8 rounded-full border border-bloom-charcoal/10 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                         <ChevronRight size={16} />
                      </div>
                   </summary>
                   <div className="px-6 pb-6 text-bloom-charcoal/60 leading-relaxed text-sm border-t border-bloom-charcoal/5 pt-4">
                      {item.a}
                   </div>
                </details>
              ))}
           </div>
        </div>
      </section>

      {/* 9. CTA Strip */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-bloom-peach rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                 <h2 className="text-4xl lg:text-6xl font-display font-extrabold mb-8">Ready to watch them bloom?</h2>
                 <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Spots are limited. Secure your place on our waitlist or schedule an in-person tour to see the magic yourself.</p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link 
                      to="/#enroll"
                      className="px-10 py-5 bg-white text-bloom-peach rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
                    >
                       Book a Tour <ArrowRight size={20} />
                    </Link>
                    <a href="tel:5551234567" className="font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                       <Phone size={20} /> Or call us at (555) 123-4567
                    </a>
                 </div>
              </div>
              <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-bloom-green/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
