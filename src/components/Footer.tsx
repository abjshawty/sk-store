import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/50">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h3 className="text-lg">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for exclusive previews and editorial content.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight">LUXE</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Curating exceptional fashion pieces that embody contemporary luxury and timeless elegance.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Shop */}
            <div className="space-y-4">
              <h4 className="font-medium">Shop</h4>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Women
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Men
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  New Arrivals
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Sale
                </a>
              </nav>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h4 className="font-medium">About</h4>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Editorial
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Press
                </a>
              </nav>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-medium">Support</h4>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Size Guide
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Shipping & Returns
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Care Instructions
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 LUXE. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}