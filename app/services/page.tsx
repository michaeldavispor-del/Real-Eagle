import { Home, Key, TrendingUp, Shield, BarChart3 } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function ServicesPage() {
  const services = [
    {
      title: "Property Buying",
      description: "Navigate the complex Dubai real estate market with our expert consultants to find your dream home or next big investment.",
      icon: <Home className="w-8 h-8 text-primary" />
    },
    {
      title: "Property Selling",
      description: "Get the best valuation and targeted marketing to sell your property faster and at the most profitable price point.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />
    },
    {
      title: "Renting & Leasing",
      description: "From luxury apartments to expansive villas, we match reliable tenants with premium properties seamlessly.",
      icon: <Key className="w-8 h-8 text-primary" />
    },
    {
      title: "Property Management",
      description: "Complete hands-off management of your assets ensuring maximum yield, maintenance, and tenant satisfaction.",
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Investment Consultancy",
      description: "Data-driven insights to help high-net-worth individuals structure their real estate portfolios for optimal returns.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Our Premium Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive real estate solutions designed for maximum value and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors group">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 dark:bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
            Ready to elevate your portfolio?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
            Connect with our consultants today to receive a bespoke strategy tailored to your real estate goals.
          </p>
          <a href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full transition-all text-lg relative z-10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
            Request a Consultation
          </a>
        </div>

      </div>
    </div>
  );
}
