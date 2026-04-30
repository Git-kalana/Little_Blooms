import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from './components/SEO';
import { 
  Heart, 
  Target, 
  Eye, 
  ShieldCheck, 
  Star, 
  Award, 
  Users, 
  Globe, 
  ChevronRight,
  Smile,
  BookOpen
} from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
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
        "name": "About Us",
        "item": "https://littleblooms.com/about"
      }
    ]
  };

  const values = [
    {
      title: "Our Mission",
      desc: "To provide a safe, nurturing, and stimulating environment where every child feels loved, valued, and empowered to explore their unique potential.",
      icon: <Target className="text-bloom-green" />,
      color: "bg-bloom-green/10"
    },
    {
      title: "Our Vision",
      desc: "To be a leader in early childhood education, fostering a generation of compassionate, creative, and lifelong learners who contribute positively to their communities.",
      icon: <Eye className="text-bloom-peach" />,
      color: "bg-bloom-peach/10"
    },
    {
      title: "Our Values",
      desc: "Integrity, curiosity, empathy, and respect guide everything we do. We believe in the power of play and the importance of a strong home-school connection.",
      icon: <Heart strokeWidth={2.5} className="text-bloom-lavender" />,
      color: "bg-bloom-lavender/10"
    }
  ];

  const team = [
    { name: "Maria Garcia", role: "Special Education Lead", years: "10 Years", book: "The Giving Tree", image: "https://picsum.photos/seed/team1/150/150" },
    { name: "Robert Smith", role: "Physical Education", years: "7 Years", book: "Where the Wild Things Are", image: "https://picsum.photos/seed/team2/150/150" },
    { name: "Linda Chen", role: "Art Coordinator", years: "5 Years", book: "The Dot", image: "https://picsum.photos/seed/team3/150/150" },
    { name: "David Kim", role: "Music Specialist", years: "4 Years", book: "Pete the Cat", image: "https://picsum.photos/seed/team4/150/150" },
    { name: "Sophie Brown", role: "Toddler Lead", years: "6 Years", book: "Goodnight Moon", image: "https://picsum.photos/seed/team5/150/150" },
    { name: "Marcus Johnson", role: "Infant Care Specialist", years: "8 Years", book: "The Very Hungry Caterpillar", image: "https://picsum.photos/seed/team6/150/150" },
    { name: "Anna White", role: "Language Arts", years: "3 Years", book: "Brown Bear, Brown Bear", image: "https://picsum.photos/seed/team7/150/150" },
    { name: "Chris Lee", role: "Assistant Director", years: "9 Years", book: "Oh, the Places You'll Go!", image: "https://picsum.photos/seed/team8/150/150" },
  ];

  return (
    <div className="bg-bloom-white min-h-screen pt-20">
      <SEO 
        title="About Us" 
        description="Learn about the history, values, and expert team at Little Blooms. Discover our Montessori-inspired approach to early childhood education since 2009."
        canonical="https://littleblooms.com/about"
        schema={schema}
      />
      {/* 1. Hero Section */}
      <section className="relative py-24 lg:py-32 bg-bloom-cream/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-accent text-3xl text-bloom-green mb-4 block"
            >
              Growing together since 2009
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-7xl font-display font-extrabold text-bloom-charcoal mb-8 leading-tight"
            >
              We're More Than a Daycare — We're Your Child's <span className="text-bloom-peach underline decoration-bloom-peach/30 underline-offset-8">Second Home</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-bloom-charcoal/60 leading-relaxed font-medium"
            >
              A place where every child is seen, every milestone is celebrated, and every curiosity is nurtured with love.
            </motion.p>
          </div>
        </div>
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-bloom-peach/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bloom-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* 2. Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4 relative z-10">
                  <img src="https://picsum.photos/seed/story1/400/500" alt="Founding" className="rounded-[2.5rem] shadow-xl" loading="lazy" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/story2/400/500" alt="Early days" className="rounded-[2.5rem] shadow-xl mt-12" loading="lazy" referrerPolicy="no-referrer" />
               </div>
               <div className="absolute -inset-6 bg-bloom-lavender/5 rounded-[3rem] -z-10 rotate-3" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-bloom-charcoal mb-8">Our Roots</h2>
              <div className="space-y-6 text-lg text-bloom-charcoal/70 leading-relaxed">
                <p>
                  Little Blooms began as a simple dream in 2009. Our founder, Elena Rodriguez, was a mother and career educator who found herself searching for more than just childcare for her own children—she wanted a community.
                </p>
                <p>
                  What started in a small sun-drenched room in her own home has blossomed into the multi-center family it is today. Elena's philosophy was simple: if you create an environment where children feel safe enough to fail and loved enough to try again, they will naturally reach for the stars.
                </p>
                <p>
                  Over the last 15 years, we have stayed true to those original home-based values. We believe that family isn't just about sharing a roof—it's about sharing a journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Values */}
      <section className="py-24 bg-bloom-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-bloom-white p-12 rounded-[2.5rem] shadow-sm border border-bloom-green/5"
                >
                   <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mb-8`}>
                      {React.cloneElement(v.icon as React.ReactElement, { size: 32 })}
                   </div>
                   <h3 className="text-2xl font-display font-bold text-bloom-charcoal mb-4">{v.title}</h3>
                   <p className="text-bloom-charcoal/60 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Meet the Director */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-bloom-charcoal text-bloom-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative h-80 lg:h-auto">
                 <img src="https://picsum.photos/seed/director/600/800" alt="Director" className="absolute inset-0 w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
              </div>
              <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center">
                 <span className="text-bloom-green font-bold uppercase tracking-widest text-xs mb-4">Founder & Executive Director</span>
                 <h2 className="text-4xl lg:text-5xl font-display font-extrabold mb-8 italic">"Every child is a distinct bloom in our garden."</h2>
                 <div className="space-y-6 text-bloom-white/70 mb-10 leading-relaxed">
                    <p>
                      Hello, I'm Elena Rodriguez. With over 20 years in early childhood education and a Master's in Child Development, my heart still beats for that look of wonder when a child discovers something new.
                    </p>
                    <p>
                      At Little Blooms, my job is to ensure that our environment, our staff, and our curriculum all serve one master: the child's own sense of self-worth.
                    </p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-px bg-bloom-white/20" />
                    <div>
                       <h4 className="font-bold text-xl">Elena Rodriguez</h4>
                       <p className="text-xs font-bold uppercase tracking-widest text-bloom-green">MSEd, CDA Gold Certified</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Our Team */}
      <section className="py-24" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-bloom-charcoal mb-4 italic">The Heart of our House</h2>
              <p className="text-bloom-charcoal/60 font-medium">Background-checked, CPR-certified, and absolutely child-obsessed.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
              {team.map((member, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-bloom-white rounded-[2.5rem] p-8 shadow-xl shadow-bloom-lavender/5 border border-bloom-lavender/10 text-center"
                >
                   <div className="w-24 h-24 mx-auto mb-6 relative">
                      <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover border-4 border-bloom-white shadow-md shadow-black/5" loading="lazy" />
                   </div>
                   <h4 className="font-bold text-bloom-charcoal mb-1">{member.name}</h4>
                   <p className="text-bloom-green font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{member.role}</p>
                   <div className="space-y-3 pt-4 border-t border-bloom-cream">
                      <p className="text-[10px] text-bloom-charcoal/40 font-bold uppercase">{member.years} at LITTLE BLOOMS</p>
                      <p className="text-xs text-bloom-charcoal/70 line-clamp-2">Favorite Book: <br /> <span className="font-bold">"{member.book}"</span></p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Our Approach */}
      <section className="py-24 bg-bloom-charcoal text-bloom-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl lg:text-6xl font-display font-extrabold mb-8">Play is the <br /><span className="text-bloom-peach">Work</span> of Childhood</h2>
                  <div className="space-y-8">
                     <div className="flex gap-6">
                        <div className="bg-bloom-white/10 p-4 rounded-2xl h-fit">
                           <Smile className="text-bloom-green" />
                        </div>
                        <div>
                           <h4 className="text-xl font-display font-bold mb-2">Montessori-Inspired</h4>
                           <p className="text-bloom-white/60 leading-relaxed">We foster independence through self-directed activity, hands-on learning, and collaborative play.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="bg-bloom-white/10 p-4 rounded-2xl h-fit">
                           <Heart className="text-bloom-peach" fill="currentColor" />
                        </div>
                        <div>
                           <h4 className="text-xl font-display font-bold mb-2">Whole-Child Focus</h4>
                           <p className="text-bloom-white/60 leading-relaxed">Education isn't just ABCs. We prioritize emotional intelligence, social empathy, and physical resilience.</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="bg-bloom-white/10 p-4 rounded-2xl h-fit">
                           <BookOpen className="text-bloom-lavender" />
                        </div>
                        <div>
                           <h4 className="text-xl font-display font-bold mb-2">Reggio Emilia Influence</h4>
                           <p className="text-bloom-white/60 leading-relaxed">We see the environment as 'the third teacher'—organic, flexible, and filled with light and discovery.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-square bg-bloom-white/5 rounded-full flex items-center justify-center border border-white/10 p-12">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-bloom-green/20 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                           <Globe size={32} className="mb-4 text-bloom-green" />
                           <span className="font-bold">Eco-Conscious</span>
                        </div>
                        <div className="bg-bloom-peach/20 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                           <Users size={32} className="mb-4 text-bloom-peach" />
                           <span className="font-bold">Community Rooted</span>
                        </div>
                        <div className="bg-bloom-lavender/20 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                           <Award size={32} className="mb-4 text-bloom-lavender" />
                           <span className="font-bold">NAEYC Standards</span>
                        </div>
                        <div className="bg-bloom-cream/20 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                           <ShieldCheck size={32} className="mb-4 text-bloom-cream" />
                           <span className="font-bold">Safety First</span>
                        </div>
                     </div>
                  </div>
                  {/* Decorative rotating text or element could go here */}
               </div>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-bloom-peach rounded-full blur-[120px]" />
         </div>
      </section>

      {/* 7. Accreditations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-bloom-charcoal/40 mb-4 block">Proven Excellence</span>
              <h2 className="text-3xl font-display font-black text-bloom-charcoal">Our Certified Standards</h2>
           </div>
           <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <div className="flex flex-col items-center gap-4">
                  <Award size={48} className="text-bloom-green" />
                  <span className="font-display font-black">NAEYC ACCREDITED</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                  <Star size={48} className="text-bloom-peach" />
                  <span className="font-display font-black">QRIS PLATINUM</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                  <ShieldCheck size={48} className="text-bloom-lavender" />
                  <span className="font-display font-black">ECE LICENSED</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                  <Users size={48} className="text-bloom-green" />
                  <span className="font-display font-black">CDC APPROVED</span>
              </div>
           </div>
        </div>
      </section>

      {/* 8. Community & Giving Back */}
      <section className="py-24 bg-bloom-cream/20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-bloom-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-bloom-green/5">
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl font-display font-extrabold text-bloom-charcoal mb-8">Bloom for the Better</h2>
                  <p className="text-lg text-bloom-charcoal/60 leading-relaxed mb-12 italic">
                    "We believe that a school shouldn't just be an island. We are part of the ecosystem of our neighborhood."
                  </p>
                  <div className="grid sm:grid-cols-2 gap-8 text-left">
                     <div className="bg-bloom-cream p-8 rounded-3xl">
                        <h4 className="font-bold text-bloom-charcoal mb-2">Little Green Thumbs</h4>
                        <p className="text-sm text-bloom-charcoal/60">Every Friday, we donate fresh produce from our sensory garden to local food pantries.</p>
                     </div>
                     <div className="bg-bloom-cream p-8 rounded-3xl">
                        <h4 className="font-bold text-bloom-charcoal mb-2">Books for Blooms</h4>
                        <p className="text-sm text-bloom-charcoal/60">Our center-wide book drive has donated over 5,000 children's books to inner-city libraries.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 9. CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bloom-peach rounded-[4rem] p-12 lg:p-24 text-center text-bloom-white relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <h2 className="text-4xl lg:text-7xl font-display font-extrabold mb-8 italic">Come see it <br />for yourself</h2>
                <p className="text-xl mb-12 opacity-80 max-w-xl mx-auto">Tours are available every Tuesday and Thursday morning. We can't wait to meet you!</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <Link 
                     to="/#enroll" 
                     className="px-12 py-5 bg-bloom-white text-bloom-peach rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-xl"
                   >
                      Schedule a Private Tour <ChevronRight />
                   </Link>
                </div>
             </div>
             {/* Decorative Background */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-bloom-green/10 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
