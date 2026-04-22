import { motion } from "motion/react";
import Image from "next/image";
import { Users, Target, Zap } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Alexander Thorne",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Isabella Martinez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Marcus Chen",
      role: "Lead Portfolio Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 pb-24">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-black overflow-hidden mt-[-80px] lg:mt-[-88px]">
        <Image 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop"
          alt="About Us"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center text-white mt-16 px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4">About Royal Eagle</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Redefining luxury real estate in Dubai since 2008.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
              A Legacy of Excellence in Luxury Real Estate
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
              Founded on the principles of trust, transparency, and unparalleled service, Royal Eagle has grown from a boutique agency into Dubai's most respected luxury real estate partner.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              We don't just sell properties; we curate lifestyles. Our exclusive portfolio covers the most sought-after neighborhoods from Palm Jumeirah to Downtown Dubai, ensuring our clients have access to the extraordinary.
            </p>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=800&auto=format&fit=crop"
              alt="Royal Eagle Office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Target className="w-10 h-10 text-primary" />,
              title: "Our Mission",
              desc: "To provide the most professional, informative, and dedicated service in the industry."
            },
            {
              icon: <Zap className="w-10 h-10 text-primary" />,
              title: "Our Vision",
              desc: "To be the undisputed leader in luxury real estate, setting the benchmark for quality."
            },
            {
              icon: <Users className="w-10 h-10 text-primary" />,
              title: "Our Community",
              desc: "We believe in giving back and building sustainable communities across the UAE."
            }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="mb-6">{item.icon}</div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">Meet The Experts</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 aspect-[4/5] cursor-pointer">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 pb-8 pt-20 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-white text-2xl font-bold mb-1">{member.name}</h4>
                  <p className="text-primary-200">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
