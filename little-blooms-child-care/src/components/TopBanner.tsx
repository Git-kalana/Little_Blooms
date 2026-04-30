import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';

const TopBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    {
      text: "🌸 Limited spots available for September intake — Join the waitlist today!",
      link: "/contact",
      linkText: "Join Waitlist",
      bg: "bg-bloom-peach"
    },
    {
      text: "⭐ Rated #1 Child Care Center in the area — 127 Google Reviews",
      link: "/#testimonials",
      linkText: "Read Reviews",
      bg: "bg-bloom-green"
    },
    {
      text: "🎉 Open House this Saturday 10am–12pm — RSVP now for a free gift!",
      link: "/contact",
      linkText: "RSVP Now",
      bg: "bg-bloom-peach"
    }
  ];

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement_banner_dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, messages.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('announcement_banner_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className={`relative h-10 ${messages[currentIndex].bg} transition-colors duration-1000 flex items-center overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
        <div className="relative w-full text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-center gap-2 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider h-10"
            >
              <span>{messages[currentIndex].text}</span>
              <Link 
                to={messages[currentIndex].link} 
                className="underline decoration-white/50 underline-offset-4 hover:decoration-white transition-all flex items-center gap-1"
              >
                {messages[currentIndex].linkText} <ChevronRight size={12} strokeWidth={3} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button 
        onClick={handleDismiss}
        className="absolute right-2 sm:right-4 text-white/70 hover:text-white transition-colors p-1"
        aria-label="Dismiss banner"
      >
        <X size={14} strokeWidth={3} />
      </button>
    </div>
  );
};

export default TopBanner;
