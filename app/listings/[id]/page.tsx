"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import propertiesData from "@/data/properties.json";
import { MapPin, Bed, Bath, Square, Calendar } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export default function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const property = propertiesData.find((p) => p.id === resolvedParams.id);
  const [modalOpen, setModalOpen] = useState(false);

  if (!property) return notFound();

  // Create a mock gallery based on the hero image
  const galleryImages = [
    property.image,
    `https://images.unsplash.com/photo-1600607687983-cecc42bedce2?q=80&w=1200&h=800&fit=crop`,
    `https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=1200&h=800&fit=crop`,
    `https://images.unsplash.com/photo-1502672260266-1c1de24244e4?q=80&w=1200&h=800&fit=crop`,
  ];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen pb-24">
      {/* Hero Image Gallery */}
      <div className="w-full h-[50vh] md:h-[70vh] relative bg-gray-100 dark:bg-gray-900">
        <Gallery>
          <div className="grid grid-cols-1 md:grid-cols-3 h-full overflow-hidden">
            <div className="md:col-span-2 relative h-full">
               <Item
                original={galleryImages[0]}
                thumbnail={galleryImages[0]}
                width="1200"
                height="800"
              >
                {({ ref, open }) => (
                  <Image 
                    ref={ref as any}
                    onClick={open}
                    src={galleryImages[0]}
                    alt={property.title}
                    fill
                    className="object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    priority
                    referrerPolicy="no-referrer"
                  />
                )}
              </Item>
            </div>
            <div className="hidden md:flex flex-col h-full gap-2 pl-2">
              <div className="relative h-1/2 w-full">
                <Item original={galleryImages[1]} thumbnail={galleryImages[1]} width="1200" height="800">
                  {({ ref, open }) => (
                    <Image ref={ref as any} onClick={open} src={galleryImages[1]} alt="Gallery" fill className="object-cover cursor-pointer hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
                  )}
                </Item>
              </div>
              <div className="relative h-1/2 w-full">
                <Item original={galleryImages[2]} thumbnail={galleryImages[2]} width="1200" height="800">
                  {({ ref, open }) => (
                    <div className="relative w-full h-full">
                      <Image ref={ref as any} onClick={open} src={galleryImages[2]} alt="Gallery" fill className="object-cover cursor-pointer hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors" onClick={open}>
                        <span className="text-white font-medium text-lg">+ View All</span>
                      </div>
                    </div>
                  )}
                </Item>
                {/* Hidden image for gallery */}
                <div className="hidden">
                   <Item original={galleryImages[3]} thumbnail={galleryImages[3]} width="1200" height="800">
                    {({ ref, open }) => <img ref={ref as any} onClick={open} src={galleryImages[3]} alt="Gallery" />}
                  </Item>
                </div>
              </div>
            </div>
          </div>
        </Gallery>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Info */}
          <div className="lg:w-2/3">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full text-sm">
                For Sale
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-full text-sm">
                {property.type}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              {property.title}
            </h1>
            
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-8">
              <MapPin size={20} className="text-primary" />
              <span className="text-lg">{property.location}</span>
            </div>

            <div className="text-4xl font-bold text-primary mb-10">
              ${property.price.toLocaleString()}
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-2">
                <Bed className="text-primary w-8 h-8" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">{property.bedrooms}</span>
                <span className="text-sm text-gray-500">Bedrooms</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-2">
                <Bath className="text-primary w-8 h-8" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">{property.bathrooms}</span>
                <span className="text-sm text-gray-500">Bathrooms</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-2">
                <Square className="text-primary w-8 h-8" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">{property.size}</span>
                <span className="text-sm text-gray-500">Square Feet</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-2">
                <Calendar className="text-primary w-8 h-8" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">2023</span>
                <span className="text-sm text-gray-500">Year Built</span>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4 font-display">Property Description</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {property.description}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                This extraordinary property is a rare find on the market. Every detail has been meticulously crafted to provide the ultimate living experience. Contact our agents today to schedule a private viewing of this magnificent residence.
              </p>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-bold mb-6 font-display text-gray-900 dark:text-white">Location Map</h2>
              <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=m&z=14&output=embed&iwloc=near`}
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Sidebar / Sticky Contact */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Interested?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Get in touch with our expert agents to schedule a viewing or learn more.
              </p>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-xl transition-all shadow-md hover:shadow-primary/30"
                >
                  Contact Agent
                </button>
                <a 
                  href="tel:+971525013034"
                  className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:border-primary dark:hover:border-primary font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  Call +971 52 501 3034
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
