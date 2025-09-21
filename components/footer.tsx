import { Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold overflow-hidden">
                {/* Option 1: Use image logo */}
                <img 
                  src="https://i.postimg.cc/j5xxpjzk/Whats-App-Image-2025-09-09-at-18-28-41-5c2ba9d4.jpg" 
                  alt="Bharat Consultancy Logo" 
                  className="h-full w-full object-contain"
                />
                {/* Option 2: Keep text fallback - uncomment below and comment image above if needed */}
                {/* BC */}
              </div>
              <span className="text-xl font-bold">Bharat Consultancy</span>
            </div>
            <p className="text-background/80 text-pretty leading-relaxed">
              Your trusted partner for business registration, compliance, and digital growth solutions.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-background/80">Professional Consultancy</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#offer" className="text-background/80 hover:text-background transition-colors">
                  Special Offer
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-background/80">FSSAI Registration</span>
              </li>
              <li>
                <span className="text-background/80">GST Registration</span>
              </li>
              <li>
                <span className="text-background/80">Digital Marketing</span>
              </li>
              <li>
                <span className="text-background/80">MSME Registration</span>
              </li>
              <li>
                <span className="text-background/80">Trademark Filing</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-background/80">📞 +91 99972 44002 , +91 81717 32787</li>
              <li className="text-background/80">✉️ query.bharatconsultancy@gmail.com</li>
              <li className="text-background/80">📍 India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/80">© 2025 Bharat Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
