import Hero from "@/components/Hero";
import TestimonialSlider from "@/components/TestimonialSlider";
import { ShieldCheck, Award, Home as HomeIcon } from "lucide-react";
import propertiesData from "@/data/properties.json";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

export default function Home() {
  const featuredProperties = propertiesData.slice(0, 3);

  return (
    <>
      <Hero />
      
      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Our Values</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">Why Choose Royal Eagle</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "Trusted Expertise",
                desc: "With over 15 years connecting clients to Dubai's most exclusive properties."
              },
              {
                icon: <Award className="w-10 h-10 text-primary" />,
                title: "Award-Winning Service",
                desc: "Recognized internationally for our personalized and premium client care."
              },
              {
                icon: <HomeIcon className="w-10 h-10 text-primary" />,
                title: "Exclusive Portfolio",
                desc: "Access to off-market properties and the most luxurious homes in the UAE."
              }
            ].map((feature, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
                <div className="w-20 h-20 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Exclusive Properties</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">Featured Listings</h3>
            </div>
            <Link 
              href="/listings"
              className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium transition-colors"
            >
              View All Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop, i) => (
              <PropertyCard key={prop.id} property={prop as any} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
    </>
  );
}
