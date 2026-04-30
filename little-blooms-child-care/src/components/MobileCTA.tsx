import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageCircle, X } from 'lucide-react';

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('mobile_cta_dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Also show on 30% scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollY / totalHeight > 0.3) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('mobile_cta_dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 w-full z-[100] md:hidden"
        >
          {/* Dismiss Button */}
          <button 
            onClick={handleDismiss}
            className="absolute -top-10 right-4 bg-bloom-charcoal/80 text-white p-2 rounded-full backdrop-blur-sm shadow-lg"
          >
            <X size={16} />
          </button>

          {/* CTA Bar */}
          <div className="bg-bloom-green text-white h-[75px] shadow-[0_-10px_25px_-5px_rgba(0,171,78,0.3)] flex items-center justify-around border-t border-white/10 px-2 pb-safe">
            <a 
              href="tel:5551234567" 
              className="flex flex-col items-center justify-center gap-1 flex-1 active:bg-white/10 rounded-xl py-1 transition-colors"
            >
              <Phone size={22} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Call Us</span>
            </a>
            
            <div className="w-px h-8 bg-white/10" />

            <Link 
              to="/contact" 
              className="flex flex-col items-center justify-center gap-1 flex-1 active:bg-white/10 rounded-xl py-1 transition-colors"
            >
              <Calendar size={22} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Book Tour</span>
            </Link>

            <div className="w-px h-8 bg-white/10" />

            <a 
              href="https://wa.me/5551234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 flex-1 active:bg-white/10 rounded-xl py-1 transition-colors"
            >
              <MessageCircle size={22} />
              <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileCTA;
