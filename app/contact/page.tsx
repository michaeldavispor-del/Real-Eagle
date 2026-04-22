"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is too short"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          reset();
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-950 pb-24">
      {/* Map Header */}
      <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-800 relative mt-[-80px] lg:mt-[-88px]">
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?q=Single%20Business%20Tower%20Dubai&t=m&z=14&output=embed&iwloc=near"
          title="Office Location Map"
          className="opacity-90 mix-blend-luminosity dark:mix-blend-normal"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white dark:from-gray-950 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-gray-900 p-10 md:p-14 text-white">
              <h2 className="text-3xl font-display font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-400 mb-12">
                Whether you're looking to buy, sell, or rent, our expert team is ready to assist you.
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Address</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Single Business Tower, Office 1001<br/>
                      Sheikh Zayed Rd, Business Bay<br/>
                      Dubai, UAE
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <a href="tel:+971525013034" className="text-gray-400 hover:text-white transition-colors">
                      +971 52 501 3034
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href="mailto:info@royaleagle.ae" className="text-gray-400 hover:text-white transition-colors">
                      info@royaleagle.ae
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                    <p className="text-gray-400">
                      Mon - Sat: 9:00 AM - 6:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-10 md:p-14">
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Send a Message</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">We usually respond within 24 hours.</p>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-20 text-center h-full">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Successfully Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                    Thank you for reaching out to Royal Eagle Real Estate. One of our specialized agents will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                      <input
                        {...register("name")}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="+971 50 123 4567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                      placeholder="I am interested in..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
