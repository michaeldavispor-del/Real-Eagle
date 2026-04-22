"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Bed, Bath, Square } from "lucide-react";

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  description: string;
  type: string;
}

export default function PropertyCard({ property, index = 0 }: { property: Property, index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link 
            href={`/listings/${property.id}`}
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl text-center transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            View Details
          </Link>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900 dark:text-white shadow-sm">
          {property.type}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 line-clamp-1">{property.title}</h3>
        
        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm mb-4">
          <MapPin size={16} className="text-primary shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>
        
        <div className="mt-auto">
          <div className="text-2xl font-bold text-primary mb-4">
            ${property.price.toLocaleString()}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <Bed size={18} />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath size={18} />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Square size={18} />
              <span>{property.size} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
