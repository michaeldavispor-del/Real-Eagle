"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content: "Royal Eagle found us our dream villa in Palm Jumeirah. Their service from start to finish was impeccable and professional.",
    name: "Thomas Wright",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    content: "The best real estate agency in Dubai. They managed our property portfolio with utmost care and secured fantastic tenants.",
    name: "Sarah Al Maktoum",
    role: "Property Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    content: "Transparent, efficient and extremely knowledgeable. We bought our first apartment in Downtown Dubai seamlessly thanks to them.",
    name: "James & Emma",
    role: "Homebuyers",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
        
        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-3xl font-light text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                  <Image 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
