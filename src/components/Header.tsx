import { Search, Menu, ShoppingBag, User, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <h1 className="text-xl font-medium tracking-tight">LUXE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onNavigate('women')}
              className={`text-sm hover:text-primary transition-colors ${currentPage === 'women' ? 'text-primary' : ''}`}
            >
              Women
            </button>
            <button 
              onClick={() => onNavigate('men')}
              className={`text-sm hover:text-primary transition-colors ${currentPage === 'men' ? 'text-primary' : ''}`}
            >
              Men
            </button>
            <button 
              onClick={() => onNavigate('accessories')}
              className={`text-sm hover:text-primary transition-colors ${currentPage === 'accessories' ? 'text-primary' : ''}`}
            >
              Accessories
            </button>
            <button 
              onClick={() => onNavigate('collections')}
              className={`text-sm hover:text-primary transition-colors ${currentPage === 'collections' ? 'text-primary' : ''}`}
            >
              Collections
            </button>
            <button 
              onClick={() => onNavigate('editorial')}
              className={`text-sm hover:text-primary transition-colors ${currentPage === 'editorial' ? 'text-primary' : ''}`}
            >
              Editorial
            </button>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-64 bg-muted/50 border-0 focus:ring-1 focus:ring-ring"
              />
            </div>

            {/* Action buttons */}
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('wishlist')}
              className={currentPage === 'wishlist' ? 'text-primary' : ''}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('profile')}
              className={currentPage === 'profile' ? 'text-primary' : ''}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('bag')}
              className={currentPage === 'bag' ? 'text-primary' : ''}
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}