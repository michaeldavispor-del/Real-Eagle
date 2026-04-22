"use client";

import { useState } from "react";
import propertiesData from "@/data/properties.json";
import PropertyCard from "@/components/PropertyCard";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";

export default function ListingsPage() {
  const [filterType, setFilterType] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(15000000);

  const filteredProperties = propertiesData.filter((p) => {
    if (filterType !== "All" && p.type !== filterType) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  const propertyTypes = ["All", ...Array.from(new Set(propertiesData.map(p => p.type)))];

  return (
    <div className="py-12 bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">Discover Our Properties</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">Browse our exclusive collection of luxury real estate in Dubai.</p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl mb-12 border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Property Type</label>
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:outline-none"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Max Price: ${maxPrice.toLocaleString()}
              </label>
              <input 
                type="range" 
                min={500000} 
                max={20000000} 
                step={500000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary mt-2"
              />
            </div>
            
            <div className="flex items-end">
              <button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Search size={18} />
                Search Listings
              </button>
            </div>

          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Showing {filteredProperties.length} Properties
          </h2>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProperties.map((prop) => (
              <motion.div
                key={prop.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PropertyCard property={prop as any} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No properties found matching your criteria. Try adjusting the filters.
          </div>
        )}

      </div>
    </div>
  );
}
