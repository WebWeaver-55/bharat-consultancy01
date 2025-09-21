"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, User, Building, MessageSquare } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: ''
  })

  const services = [
    'FSSAI Registration',
    'GST Registration',
    'Digital Marketing',
    'MSME Registration',
    'Business PAN',
    'Trademark Filing',
    'Firm Registration',
    'Company Registration',
    'Full Startup Package'
  ]

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Hello! I'm interested in your consultancy services.

📋 *Contact Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Company: ${formData.company}

🔧 *Service Required:*
${formData.service}

Please get back to me at your earliest convenience. Thank you!`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919997244002?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to transform your business? Contact us today for expert consultancy services
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone Numbers</p>
                    <p className="text-primary font-medium">+91 99972 44002 , +91 81717 32787 </p>
                   
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-primary font-medium">info@consultancy.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-primary font-medium">India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-primary font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Ready to Get Started?</h4>
                  <p className="text-muted-foreground">
                    Contact us today and let's discuss how we can help your business grow
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open('https://wa.me/919997244002', '_blank')}
                  >
                    Quick WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="relative">
            <Card className="shadow-lg bg-white border">
              <CardContent className="p-8">
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold">Get a Free Consultation</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you via WhatsApp
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold flex items-center">
                        <User className="h-4 w-4 mr-2 text-primary" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold flex items-center">
                        <Building className="h-4 w-4 mr-2 text-primary" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    >
                      <option value="">Choose a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300"
                  >
                    Submit
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you'll be redirected to WhatsApp with your details pre-filled
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}