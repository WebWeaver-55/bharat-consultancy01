"use client";

import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold overflow-hidden">
            <img src="https://i.postimg.cc/j5xxpjzk/Whats-App-Image-2025-09-09-at-18-28-41-5c2ba9d4.jpg" alt="Bharat Consultancy Logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-xl font-bold text-foreground">Bharat Consultancy</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {["Home", "Services", "Special Offer", "Contact"].map((item, index) => (
            <a key={item} href={`#${index === 2 ? "offer" : item.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition-colors text-foreground">{item}</a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <div className="hidden lg:flex items-center space-x-1 text-sm text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 99972 44002</span>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden p-3 hover:bg-gray-100 rounded-xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <nav className="container py-6 space-y-1">
            {[{name: "Home", href: "#home"}, {name: "Services", href: "#services"}, {name: "Special Offer", href: "#offer"}, {name: "Contact", href: "#contact"}].map(item => (
              <a key={item.name} href={item.href} className="block text-base font-medium hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-gray-700 py-3 px-4 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>{item.name}</a>
            ))}
            <div className="flex items-center space-x-2 text-gray-700 py-3 px-4 border-t border-gray-100 mt-4 pt-4">
              <div className="p-2 bg-green-100 rounded-full">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-base font-medium">+91 99972 44002</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
