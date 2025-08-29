import { useState } from "react";
import { ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Accessories specific product data
const accessoriesProducts = [
  {
    id: "a1",
    name: "Swiss Luxury Watch",
    brand: "LUXE Timepieces",
    price: 4200,
    originalPrice: 5600,
    image: "https://images.unsplash.com/photo-1742631193849-acc045ea5890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGFjY2Vzc29yaWVzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTY0Njk1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    category: "Watches",
    description: "A precision Swiss timepiece featuring automatic movement and sapphire crystal. Crafted with meticulous attention to detail and timeless elegance.",
    materials: ["Stainless Steel", "Sapphire Crystal", "Automatic Movement"],
    sizes: ["One Size"]
  },
  {
    id: "a2",
    name: "Italian Leather Belt",
    brand: "LUXE Leather Goods",
    price: 320,
    image: "https://images.unsplash.com/photo-1664286074240-d7059e004dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMGJlbHQlMjBsZWF0aGVyJTIwbHV4dXJ5fGVufDF8fHx8MTc1NjQ2OTUzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Belts",
    description: "A handcrafted Italian leather belt with polished hardware. Features premium vegetable-tanned leather and meticulous stitching details.",
    materials: ["Italian Leather", "Brass Hardware", "Hand-stitched"],
    sizes: ["85cm", "90cm", "95cm", "100cm", "105cm"]
  },
  {
    id: "a3",
    name: "Silk Designer Scarf",
    brand: "LUXE Textiles",
    price: 450,
    image: "https://images.unsplash.com/photo-1620740199226-2420c2fcaa18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzY2FyZiUyMHNpbGslMjBmYXNoaW9ufGVufDF8fHx8MTc1NjQ2OTUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Scarves",
    description: "An exquisite silk scarf featuring an artistic print and luxurious finish. Perfect for elevating any outfit with sophisticated style.",
    materials: ["100% Mulberry Silk", "Hand-rolled Edges", "Digital Print"],
    sizes: ["90cm x 90cm"]
  },
  {
    id: "a4",
    name: "Diamond Stud Earrings",
    brand: "LUXE Fine Jewelry",
    price: 2800,
    image: "https://images.unsplash.com/photo-1590156118368-607652ab307a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3MlMjBqZXdlbHJ5JTIwbHV4dXJ5fGVufDF8fHx8MTc1NjQ2OTU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    category: "Jewelry",
    description: "Classic diamond stud earrings featuring brilliant-cut diamonds set in white gold. A timeless addition to any jewelry collection.",
    materials: ["18k White Gold", "Brilliant-Cut Diamonds", "Secure Backs"],
    sizes: ["One Size"]
  },
  {
    id: "a5",
    name: "Premium Leather Wallet",
    brand: "LUXE Accessories",
    price: 280,
    image: "https://images.unsplash.com/photo-1748577018714-d41f19f8faec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMHdhbGxldCUyMGxlYXRoZXIlMjBsdXh1cnl8ZW58MXx8fHwxNzU2NDY5NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Wallets",
    description: "A sophisticated leather wallet with multiple card slots and bill compartments. Crafted from premium leather with elegant finishing.",
    materials: ["Premium Leather", "Cotton Lining", "YKK Hardware"],
    sizes: ["One Size"]
  },
  {
    id: "a6",
    name: "Gold Chain Necklace",
    brand: "LUXE Fine Jewelry",
    price: 1650,
    image: "https://images.unsplash.com/photo-1662434923031-b9bf1b6c10e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhnb2xkJTIwbmVja2xhY2UlMjBjaGFpbiUyMGpld2Vscnl8ZW58MXx8fHwxNzU2NDY5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Jewelry",
    description: "An elegant gold chain necklace with sophisticated links and polished finish. Perfect for layering or wearing as a statement piece.",
    materials: ["18k Gold", "Secure Clasp", "Polished Finish"],
    sizes: ["45cm", "50cm", "55cm"]
  },
  {
    id: "a7",
    name: "Silk Designer Tie",
    brand: "LUXE Formal Wear",
    price: 195,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0aWUlMjBzaWxrJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzU2NDY5NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Ties",
    description: "A sophisticated silk tie featuring a refined pattern and luxurious texture. Essential for formal occasions and professional settings.",
    materials: ["100% Silk", "Handmade", "Tipped Construction"],
    sizes: ["One Size"]
  },
  {
    id: "a8",
    name: "Designer Cufflinks",
    brand: "LUXE Fine Accessories",
    price: 520,
    image: "https://images.unsplash.com/photo-1672411914700-7af0e7530999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZXNpZ25lciUyMGN1ZmZsaW5rcyUyMGx1eHVyeSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc1NjQ2OTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Cufflinks",
    description: "Elegant designer cufflinks featuring sophisticated detailing and premium finishes. Perfect for adding refinement to formal attire.",
    materials: ["Sterling Silver", "Enamel Details", "Swivel Back"],
    sizes: ["One Size"]
  }
];

interface AccessoriesPageProps {
  onProductClick?: (productId: string) => void;
}

export function AccessoriesPage({ onProductClick }: AccessoriesPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof accessoriesProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const handleProductClick = (productId: string) => {
    const product = accessoriesProducts.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
    onProductClick?.(productId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const categories = ["all", "watches", "jewelry", "belts", "scarves", "wallets", "ties", "cufflinks"];
  
  const filteredProducts = selectedCategory === "all" 
    ? accessoriesProducts 
    : accessoriesProducts.filter(product => product.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Home</span>
                  <span>/</span>
                  <span>Accessories</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  Luxury
                  <br />
                  <span className="text-muted-foreground">Accessories</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Complete your look with our exquisite collection of luxury accessories. From timepieces to jewelry, each piece is carefully selected for its exceptional craftsmanship.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Gift Guide
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1742631193849-acc045ea5890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGFjY2Vzc29yaWVzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTY0Njk1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury accessories collection"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-full">
                <span className="text-sm">Curated Selection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            {/* Category Filters */}
            <div className="flex items-center gap-4 overflow-x-auto">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter:</span>
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Sort by:</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={handleProductClick}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Items
            </Button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}