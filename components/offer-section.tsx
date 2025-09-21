"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Gift } from "lucide-react"

export function OfferSection() {
  const handleApplyNow = () => {
    const message = "Hi! I'm interested in the Full Startup Plan with ₹500 discount. Please provide more details."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919997244002?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="offer" className="py-12 lg:py-20 navy-bg">
      <div className="container px-4 lg:px-0">
        <div className="text-center space-y-4 mb-8 lg:mb-12">
          <Badge variant="secondary" className="text-sm lg:text-base px-4 py-2 bg-secondary text-white border-0">
            <Clock className="mr-2 h-4 w-4" />
            Limited Time Offer
          </Badge>
          <h2 className="text-2xl lg:text-5xl font-bold text-balance text-white leading-tight">
            ₹500 Discount on <span className="text-secondary">All Services</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto text-pretty px-4 lg:px-0">
            Get your complete startup package at an unbeatable price - Limited time only!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-secondary/30 shadow-2xl bg-white mx-4 lg:mx-0">
            <CardContent className="p-6 lg:p-12">
              <div className="text-center space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 lg:space-x-3">
                    <Gift className="h-6 w-6 lg:h-8 lg:w-8 text-secondary" />
                    <h3 className="text-2xl lg:text-4xl font-bold text-foreground">Full Startup Plan</h3>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-4">
                    <span className="text-3xl lg:text-5xl font-bold text-green-600">₹15,999</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl lg:text-2xl text-muted-foreground line-through">₹16,499</span>
                      <Badge variant="destructive" className="text-sm lg:text-lg px-3 lg:px-4 py-1 lg:py-2">
                        Save ₹500
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 lg:gap-6 max-w-3xl mx-auto">
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                    <div className="flex items-center space-x-2 flex-1">
                      <span className="font-medium text-sm lg:text-base">FSSAI + Zomato / Swiggy Registration</span>
                      <div className="flex items-center space-x-1">
                        <img 
                          src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png" 
                          alt="Zomato" 
                          className="h-4 w-auto lg:h-5"
                        />
                        <img 
                          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" 
                          alt="Swiggy" 
                          className="h-4 w-auto lg:h-5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-sm lg:text-base">GST Registration</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-sm lg:text-base">Digital Marketing Services</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-sm lg:text-base">Website Creation or Google My Business</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white text-lg lg:text-xl px-8 lg:px-12 py-4 border-0 shadow-lg w-full lg:w-auto rounded-xl transition-all duration-300 transform hover:scale-105"
                    onClick={handleApplyNow}
                  >
                    Apply Now - Save ₹500
                  </Button>
                  <p className="text-xs lg:text-sm text-muted-foreground px-4 lg:px-0">
                    *Offer valid for new registrations only. Terms and conditions apply.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
