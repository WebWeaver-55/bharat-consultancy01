"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
  
    business: "Nirvana",
    location: "Dehradun",
    rating: 5,
    text: "Bharat Consultancy made our FSSAI registration seamless. Their team guided us through every step and completed the process in just 3 days!",
    image: "https://i.postimg.cc/85Fjs50X/Whats-App-Image-2025-09-13-at-10-47-32-a2503689.jpg",
    avatar: "https://i.postimg.cc/85Fjs50X/Whats-App-Image-2025-09-13-at-10-47-32-a2503689.jpg"
  },
  {
   
    business: "Hotel Bel Air", 
    location: "Dehradun",
    rating: 5,
    text: "Excellent service for GST registration and trademark filing. Professional team with deep knowledge of Indian business laws.",
    image: "https://i.postimg.cc/50JR2Yyb/Whats-App-Image-2025-09-13-at-00-47-21-0624d5b4.jpg",
    avatar: "https://i.postimg.cc/50JR2Yyb/Whats-App-Image-2025-09-13-at-00-47-21-0624d5b4.jpg"
  },
  {
    
    business: "Handi Punjab Ki",
    location: "Dehradun",
    rating: 5,
    text: "Their MSME registration service saved us months of paperwork. Highly recommend for any business compliance needs.",
    image: "https://i.postimg.cc/x1bxGyb9/Whats-App-Image-2025-09-13-at-02-15-16-e14e210f.jpg",
    avatar: "https://i.postimg.cc/x1bxGyb9/Whats-App-Image-2025-09-13-at-02-15-16-e14e210f.jpg"
  },
  {
   
    business: "The Terrace Talk",
    location: "Dehradun", 
    rating: 5,
    text: "Outstanding digital marketing services! Our online presence improved dramatically within 2 months of working with them.",
    image: "https://i.postimg.cc/XJNkPwXG/Whats-App-Image-2025-09-13-at-00-47-22-7880851a.jpg",
    avatar: "https://i.postimg.cc/XJNkPwXG/Whats-App-Image-2025-09-13-at-00-47-22-7880851a.jpg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-balance leading-tight">
            What Our <span className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied businesses who trust Bharat Consultancy for their growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
              
              <CardContent className="p-5 md:p-6 space-y-4 relative z-10">
                {/* Quote Icon and Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>

                {/* Testimonial Text */}
                <div className="min-h-[120px] md:min-h-[100px] flex items-start">
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center space-x-3">
                    {/* Avatar */}
                    <div className="relative">
                      <img 
                        src={testimonial.avatar}
                       
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    
                    {/* Name and Details */}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm text-muted-foreground truncate">
                        {testimonial.business}
                      </div>
                      <div className="text-xs text-primary font-medium flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-1"></div>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">4.9/5 Rating • 2000+ Happy Clients</span>
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
