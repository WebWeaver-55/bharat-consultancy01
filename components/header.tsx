"use client";

import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo - can be either image or text initials */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold overflow-hidden">
            {/* Replace this div with an img tag to use an image:
            <img 
              src="/path-to-your-logo.png" 
              alt="Bharat Consultancy Logo" 
              className="h-full w-full object-contain"
            /> */}
            BC
          </div>
          <span className="text-xl font-bold text-foreground">Bharat Consultancy</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors text-foreground">
            Home
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors text-foreground">
            Services
          </a>
          <a href="#offer" className="text-sm font-medium hover:text-primary transition-colors text-foreground">
            Special Offer
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors text-foreground">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          {/* Phone number - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 99972 44002</span>
            </div>
          </div>

          {/* Mobile hamburger menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Get Started button */}
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground border-0">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-3">
            <a 
              href="#home" 
              className="block text-sm font-medium hover:text-primary transition-colors text-foreground py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="block text-sm font-medium hover:text-primary transition-colors text-foreground py-2"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a 
              href="#offer" 
              className="block text-sm font-medium hover:text-primary transition-colors text-foreground py-2"
              onClick={toggleMobileMenu}
            >
              Special Offer
            </a>
            <a 
              href="#contact" 
              className="block text-sm font-medium hover:text-primary transition-colors text-foreground py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            
            {/* Phone number in mobile menu */}
            <div className="flex items-center space-x-1 text-foreground py-2 border-t pt-3">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">+91 99972 44002</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}