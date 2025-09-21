import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Gift } from "lucide-react"

export function OfferSection() {
  return (
    <section id="offer" className="py-20 navy-bg">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2 bg-secondary text-white border-0">
            <Clock className="mr-2 h-4 w-4" />
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance text-white">
            ₹500 Discount on <span className="text-secondary">All Services</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Get your complete startup package at an unbeatable price - Limited time only!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-secondary/30 shadow-2xl bg-white">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <Gift className="h-8 w-8 text-secondary" />
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Full Startup Plan</h3>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-4xl lg:text-5xl font-bold text-primary">₹15,999</span>
                    <span className="text-2xl text-muted-foreground line-through">₹16,499</span>
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      Save ₹500
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">FSSAI + Zomato / Swiggy Registration</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">GST Registration</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">Digital Marketing Services</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">Website Creation or Google My Business</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white text-xl px-12 py-4 border-0 shadow-lg"
                  >
                    Apply Now - Save ₹500
                  </Button>
                  <p className="text-sm text-muted-foreground">
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
