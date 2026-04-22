"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block mb-8 text-primary/20 dark:text-primary/10"
        >
          <Compass size={120} strokeWidth={1} />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-display font-bold text-gray-900 dark:text-white mb-4"
        >
          404
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto"
        >
          We seem to have lost our way. The property or page you're looking for doesn't exist.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
