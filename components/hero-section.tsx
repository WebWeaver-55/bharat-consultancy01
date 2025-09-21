"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Award, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative py-4 lg:py-32 indian-gradient">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center ">
          <div className="">
            {/* Logo Section */}
              <div className="relative mb-6 lg:mb-0">
                {/* Mobile: Logo with reduced size and transparency */}
                      {/* Logo Image Container */}
                      <div className="w-full h-full flex items-center justify-center px-6 lg:px-0">
                        {/* Placeholder for uploaded logo - replace src with your logo */}
                        <img 
                          src="https://i.postimg.cc/j5xxpjzk/Whats-App-Image-2025-09-09-at-18-28-41-5c2ba9d4.jpg" 
                          alt="Bharat Consultancy Logo" 
                          className="w-[90%] h-auto lg:w-1/2 lg:h-1/2 object-contain opacity-90 lg:opacity-100"
                        />
                      </div>
              </div>
         

            {/* Trust Badge */}
            <div className="flex flex-col items-center space-y-3 mb-8 lg:mb-0 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 lg:h-4 lg:w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg lg:text-lg font-semibold text-gray-700 text-center">Trusted by 10,000+ businesses across India</span>
            </div>

            <h1 className="text-3xl lg:text-7xl font-bold text-balance leading-tight text-gray-900 mb-6 lg:mb-4">
              Professional Business <span className="text-green-600">Consultancy</span>
            </h1>

            <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4 lg:px-0 mb-10 lg:mb-6">
              Your trusted partner for business registration, compliance, and digital growth solutions. Get your
              business legally compliant and digitally ready with India's leading consultancy.
            </p>
          </div>

          <div className="flex flex-col space-y-5 justify-center px-6 lg:flex-row lg:space-y-0 lg:gap-4 lg:px-0 mt-10 lg:mt-8">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-5 w-full lg:w-auto min-h-[60px] font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-5 w-full lg:w-auto min-h-[60px] bg-white hover:bg-gray-50 border-2 border-green-600 hover:border-green-700 text-green-600 hover:text-green-700 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/919997244002', '_blank')}
            >
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto px-6 lg:px-0">
            <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-blue-50 rounded-full">
                <Award className="h-10 w-10 lg:h-8 lg:w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg lg:font-semibold lg:text-base text-gray-900">Expert Guidance</h3>
              <p className="text-base lg:text-sm text-gray-600 text-center leading-relaxed">
                Professional consultation from certified experts
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-green-50 rounded-full">
                <CheckCircle className="h-10 w-10 lg:h-8 lg:w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg lg:font-semibold lg:text-base text-gray-900">Quick Processing</h3>
              <p className="text-base lg:text-sm text-gray-600 text-center leading-relaxed">Fast-track your business registrations</p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-red-50 rounded-full">
                <Shield className="h-10 w-10 lg:h-8 lg:w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg lg:font-semibold lg:text-base text-gray-900">Legal Compliance</h3>
              <p className="text-base lg:text-sm text-gray-600 text-center leading-relaxed">100% compliant with Indian regulations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
