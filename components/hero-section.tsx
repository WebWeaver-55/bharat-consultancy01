import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Award, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative py-4 lg:py-32 indian-gradient">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center ">
          <div className="">
            {/* Logo Section */}
              <div className="relative">
                {/* Mobile: Full screen width logo touching edges */}
                      {/* Logo Image Container */}
                      <div className="w-full h-full flex items-center justify-center ">
                        {/* Placeholder for uploaded logo - replace src with your logo */}
                        <img 
                          src="https://i.postimg.cc/j5xxpjzk/Whats-App-Image-2025-09-09-at-18-28-41-5c2ba9d4.jpg" 
                          alt="Bharat Consultancy Logo" 
                          className="w-full h-full lg:w-1/2 lg:h-1/2 object-contain "
                        />
                      </div>
                      {/* Mobile Only Decorative overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white/5 to-secondary/10 backdrop-blur-[0.5px] lg:hidden"></div>
              </div>
         

            {/* Trust Badge */}
            <div className="flex items-center justify-center space-x-2 text-sm text-foreground/70">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-base lg:text-lg font-medium">Trusted by 10,000+ businesses across India</span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-bold text-balance leading-tight text-foreground">
              Professional Business <span className="text-primary">Consultancy</span>
            </h1>

            <p className="text-xl lg:text-2xl text-foreground/80 text-pretty leading-relaxed max-w-3xl mx-auto">
              Your trusted partner for business registration, compliance, and digital growth solutions. Get your
              business legally compliant and digitally ready with India's leading consultancy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-lg px-4 sm:px-8 py-2.5 sm:py-4 w-full sm:w-auto min-h-[44px] sm:min-h-[56px]">
              Our Services
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-sm sm:text-lg px-4 sm:px-8 py-2.5 sm:py-4 w-full sm:w-auto min-h-[44px] sm:min-h-[56px] bg-white/90 hover:bg-white border-2">
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/90 rounded-xl">
              <Award className="h-8 w-8 text-secondary" />
              <span className="font-semibold text-foreground">Expert Guidance</span>
              <span className="text-sm text-foreground/70 text-center">
                Professional consultation from certified experts
              </span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/90 rounded-xl">
              <CheckCircle className="h-8 w-8 text-primary" />
              <span className="font-semibold text-foreground">Quick Processing</span>
              <span className="text-sm text-foreground/70 text-center">Fast-track your business registrations</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/90 rounded-xl">
              <Shield className="h-8 w-8 text-accent" />
              <span className="font-semibold text-foreground">Legal Compliance</span>
              <span className="text-sm text-foreground/70 text-center">100% compliant with Indian regulations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}