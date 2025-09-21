"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Eye } from "lucide-react"
import { useState } from "react"

const services = [
  {
    id: 1,
    title: "Food Directory/FSSAI Registration",
    icon: "/fssai-food-license-icon.jpg",
    description: "Complete FSSAI license registration for food businesses",
    types: [
      {
        name: "Basic FSSAI License",
        price: "₹799",
        originalPrice: "₹999",
        docs: ["Aadhaar Card", "PAN Card", "Passport Size Photo", "Bank Statement", "Rent Agreement"],
      },
      {
        name: "State FSSAI License",
        price: "₹7,999",
        originalPrice: "₹9,999",
        docs: [
          "Business Registration",
          "NOC from Municipality",
          "Water Test Report",
          "Layout Plan",
          "List of Equipment",
        ],
      },
      {
        name: "Central FSSAI License",
        price: "₹17,999",
        originalPrice: "₹19,999",
        docs: ["Company Registration", "Factory License", "Food Safety Plan", "HACCP Plan", "Recall Plan"],
      },
    ],
  },
  {
    id: 2,
    title: "GST Registration",
    icon: "/gst-tax-calculator-icon.jpg",
    description: "Hassle-free GST registration and compliance services",
    price: "₹1,999",
    docs: ["PAN Card", "Aadhaar Card", "Business Registration", "Bank Statement", "Rent Agreement", "Electricity Bill"],
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: "/digital-marketing-megaphone-icon.jpg",
    description: "Comprehensive digital marketing solutions",
    subServices: [
      {
        name: "Influencer Marketing",
        price: "₹5,999",
        originalPrice: "₹6,999",
        desc: "Connect with top influencers to boost your brand visibility and engagement across social platforms.",
        docs: ["Business Details", "Target Audience Info", "Brand Guidelines", "Content Requirements"],
      },
      {
        name: "Website Development",
        price: "₹4,999",
        originalPrice: "₹5,999",
        desc: "Professional responsive websites with modern design and SEO optimization for better online presence.",
        docs: ["Business Information", "Logo & Images", "Content Requirements", "Domain Preferences"],
      },
      {
        name: "QR Code Solutions",
        price: "₹4,999",
        originalPrice: "₹5,999",
        desc: "Custom QR code generation for contactless payments, menu cards, and business information sharing.",
        docs: ["Business Details", "Payment Gateway Info", "Menu/Product List", "Contact Information"],
      },
    ],
  },
  {
    id: 4,
    title: "MSME Registration",
    icon: "/msme-building-factory-icon.jpg",
    description: "Micro, Small & Medium Enterprise registration and benefits",
    price: "₹2,499",
    docs: ["Aadhaar Card", "PAN Card", "Business Registration", "Investment Proof", "Bank Statement"],
  },
  {
    id: 5,
    title: "Business PAN Registration",
    icon: "/pan-card-business-icon.jpg",
    description: "Business PAN card registration and tax compliance",
    price: "₹1,499",
    docs: ["Business Registration", "Identity Proof", "Address Proof", "Bank Statement"],
  },
  {
    id: 6,
    title: "Trademark Filing",
    icon: "/trademark-shield-protection-icon.jpg",
    description: "Protect your brand with trademark registration",
    price: "₹8,999",
    docs: ["Logo/Brand Name", "Business Registration", "Identity Proof", "Address Proof", "Power of Attorney"],
  },
  {
    id: 7,
    title: "Firm Registration",
    icon: "/partnership-firm-users-icon.jpg",
    description: "Partnership firm and LLP registration services",
    price: "₹3,999",
    docs: ["Partnership Deed", "Identity Proof of Partners", "Address Proof", "Bank Statement", "Rent Agreement"],
  },
  {
    id: 8,
    title: "Company Registration",
    icon: "/company-registration-briefcase-icon.jpg",
    description: "Private Limited and Public Limited company registration",
    price: "₹6,999",
    docs: ["Director's Identity Proof", "Address Proof", "DIN Application", "DSC", "MOA & AOA"],
  },
]

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

 const handleApplyNow = () => {
  window.open("https://wa.me/919997244002", "_self")
}


  const toggleExpanded = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <section id="services" className="py-20 bg-background futuristic-bg-2025">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 quantum-pulse">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive business solutions to help you establish and grow your business in India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service) => {
            const isExpanded = expandedService === service.id

            return (
              <div
                key={service.id}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-3 md:p-6 hover:bg-card/90 transition-all duration-300 group shadow-lg hover:shadow-xl quantum-pulse"
              >
                <div className="text-center mb-3 md:mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 relative">
                    <div className="relative w-full h-full bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden">
                      <img
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xs md:text-lg font-semibold text-foreground leading-tight mb-1 md:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden md:block">{service.description}</p>

                  {service.price && (
                    <div className="mt-2">
                      <div className="text-lg md:text-xl font-bold text-primary">{service.price}</div>
                    </div>
                  )}
                </div>

                <div className="space-y-2 md:space-y-4">
                  <Button
                    variant="outline"
                    onClick={() => toggleExpanded(service.id)}
                    className="w-full justify-between text-xs md:text-sm h-7 md:h-10 bg-transparent border-primary/30 hover:bg-primary/10"
                  >
                    <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    View Details
                    {isExpanded ? (
                      <ChevronUp className="w-3 h-3 md:w-4 md:h-4" />
                    ) : (
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                    )}
                  </Button>

                  {isExpanded && (
                    <div className="mt-2 md:mt-4 space-y-2 md:space-y-3">
                      {service.types &&
                        service.types.map((type, index) => (
                          <div key={index} className="p-2 md:p-3 bg-muted/30 backdrop-blur-sm rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium text-xs md:text-sm text-foreground">{type.name}</div>
                              <div className="text-right">
                                <div className="text-sm font-bold text-primary">{type.price}</div>
                                {type.originalPrice && (
                                  <div className="text-xs text-muted-foreground line-through">{type.originalPrice}</div>
                                )}
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground mb-1 md:mb-2">Required Documents:</div>
                            <div className="flex flex-wrap gap-1">
                              {type.docs.map((doc, docIndex) => (
                                <Badge
                                  key={docIndex}
                                  variant="secondary"
                                  className="text-xs bg-primary/20 text-primary"
                                >
                                  {doc}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}

                      {service.subServices &&
                        service.subServices.map((subService, index) => (
                          <div key={index} className="p-2 md:p-3 bg-muted/30 backdrop-blur-sm rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium text-xs md:text-sm text-foreground">{subService.name}</div>
                              <div className="text-right">
                                <div className="text-sm font-bold text-primary">{subService.price}</div>
                                {subService.originalPrice && (
                                  <div className="text-xs text-muted-foreground line-through">
                                    {subService.originalPrice}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground mb-2">{subService.desc}</div>
                            <div className="text-xs text-muted-foreground mb-1">Required Documents:</div>
                            <div className="flex flex-wrap gap-1">
                              {subService.docs.map((doc, docIndex) => (
                                <Badge
                                  key={docIndex}
                                  variant="secondary"
                                  className="text-xs bg-primary/20 text-primary"
                                >
                                  {doc}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}

                      {service.docs && !service.types && !service.subServices && (
                        <div className="p-2 md:p-3 bg-muted/30 backdrop-blur-sm rounded-lg">
                          <div className="text-xs text-muted-foreground mb-1 md:mb-2">Required Documents:</div>
                          <div className="flex flex-wrap gap-1">
                            {service.docs.map((doc, docIndex) => (
                              <Badge key={docIndex} variant="secondary" className="text-xs bg-primary/20 text-primary">
                                {doc}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <Button
                    onClick={handleApplyNow}
                    className="w-full bg-primary hover:bg-primary/90 text-xs md:text-sm h-7 md:h-10 neon-pulse"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
