"use client";

import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 pt-20 pb-10 border-t border-gray-200 dark:border-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Building2 size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                Royal Eagle
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              Your premium real estate partner in Dubai, committed to delivering exceptional service and exclusive properties.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-md transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-md transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-md transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-md transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Listings', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>Single Business Tower - 1001<br/>Sheikh Zayed Rd, Business Bay<br/>Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+971525013034" className="hover:text-primary transition-colors">+971 52 501 3034</a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:info@royaleagle.ae" className="hover:text-primary transition-colors">info@royaleagle.ae</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to get the latest property news and offers.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-l-xl w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-5 rounded-r-xl transition-colors font-medium flex items-center justify-center shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Royal Eagle Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
