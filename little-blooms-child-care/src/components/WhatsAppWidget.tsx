import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Heart } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "15551234567"; // Example phone number

  const quickReplies = [
    { label: "I'd like to schedule a tour", message: "Hi! I'd like to schedule a tour of Little Blooms. What dates are available?" },
    { label: "Tell me about your programs", message: "Hello! I'm interested in learning more about the programs you offer at Little Blooms." },
    { label: "What are your fees?", message: "Hi there, could you provide more information about your tuition and fees?" }
  ];

  const handleQuickReply = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-[90] md:bottom-8 lg:right-12">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[320px] sm:w-[360px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-bloom-green/10"
          >
            {/* Header */}
            <div className="bg-bloom-green p-6 text-white relative">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center">
                   <Heart className="text-bloom-green" fill="currentColor" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg leading-none mb-1">Little Blooms</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Online Now</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-bloom-cream/20">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm mb-6 border border-bloom-green/5 text-sm text-bloom-charcoal/80 leading-relaxed">
                Hi! 👋 Welcome to Little Blooms. How can we help you today? Ask us about enrollment, programs, or schedule a tour!
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-bloom-charcoal/30 mb-4 ml-1">Quick Replies</p>
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickReply(reply.message)}
                    className="w-full text-left p-4 bg-white hover:bg-bloom-green hover:text-white rounded-2xl text-xs font-bold text-bloom-charcoal transition-all border border-bloom-green/10 group flex items-center justify-between"
                  >
                    {reply.label}
                    <Send size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white text-center">
               <p className="text-[9px] text-bloom-charcoal/30 font-bold uppercase tracking-widest">Typically responds in under 2 hours</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative group">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 ${isOpen ? 'bg-bloom-charcoal text-white' : 'bg-[#25D366] text-white shadow-[#25D366]/30'}`}
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} fill="currentColor" />}
        </button>
        
        {/* Pulsing indicator when closed */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-bloom-peach rounded-full border-2 border-white flex items-center justify-center shadow-sm">
             <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </span>
        )}
      </div>

      <style>{`
        @keyframes pulse-whatsapp {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-pulse-whatsapp {
          animation: pulse-whatsapp 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppWidget;
