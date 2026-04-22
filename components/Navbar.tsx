"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Building2 } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import ContactModal from "./ContactModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Listings", href: "/listings" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
                <Building2 size={24} />
              </div>
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white lg:text-white"}`}>
                Royal Eagle
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                          isActive
                            ? "text-primary"
                            : isScrolled
                            ? "text-gray-600 dark:text-gray-300"
                            : "text-gray-800 dark:text-gray-200 lg:text-gray-200"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              <div className="flex items-center gap-4">
                <DarkModeToggle />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setContactModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-primary/30"
                >
                  Contact Us
                </motion.button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkModeToggle />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-md ${
                  isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
                }`}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-900 z-50 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
                <span className="font-bold text-xl text-gray-900 dark:text-white">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 text-lg font-medium border-b border-gray-50 dark:border-gray-800/50 ${
                          pathname === link.href
                            ? "text-primary"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 border-t border-gray-100 dark:border-gray-800 pb-safe">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-medium transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  );
}
