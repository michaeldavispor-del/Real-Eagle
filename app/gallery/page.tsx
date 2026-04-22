"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import { motion } from "motion/react";

export default function GalleryPage() {
  const unsplashIds = [
    "1512453979798-5ea266f8880c", // Dubai Skyline
    "1526495124232-a04e1849168c", // Dubai Building
    "1582682246636-f045053cfb97", // Dubai Night
    "1600596542815-ffad4c1539a9", // Luxury House
    "1613490908592-fd5e48f43eb9", // Modern Villa
    "1522708323590-d24dbb6b0267", // Chic Interior
    "1512917774080-9991f1c4c750", // Mansion
    "1600585154340-be6161a56a0c", // Modern Home
    "1502672260266-1c1de24244e4", // Living room
    "1600607687983-cecc42bedce2", // Kitchen
    "1600566753086-00f18efc2291", // Dining
    "1583608205776-bfd35f6d9f83"  // Living Room II
  ];

  const images = unsplashIds.map((id, i) => ({
    id: i,
    thumbnail: `https://images.unsplash.com/photo-${id}?q=80&w=400&h=300&fit=crop&auto=format`,
    original: `https://images.unsplash.com/photo-${id}?q=80&w=1200&h=900&fit=crop&auto=format`,
    width: 1200,
    height: 900,
    alt: `Royal Eagle Real Estate Gallery Image ${i + 1}`
  }));

  return (
    <div className="bg-white dark:bg-gray-950 py-16 lg:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">Property Gallery</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A visual journey through some of our most spectacular and luxurious properties in Dubai.
          </p>
        </div>

        <Gallery>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group cursor-pointer bg-gray-100 dark:bg-gray-900"
              >
                <Item
                  original={img.original}
                  thumbnail={img.thumbnail}
                  width={img.width}
                  height={img.height}
                  alt={img.alt}
                >
                  {({ ref, open }) => (
                    <div onClick={open} className="w-full h-full relative" ref={ref as any}>
                      <Image
                        src={img.thumbnail}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wide transition-opacity duration-300 scale-95 group-hover:scale-100">
                          View
                        </span>
                      </div>
                    </div>
                  )}
                </Item>
              </motion.div>
            ))}
          </div>
        </Gallery>

      </div>
    </div>
  );
}
