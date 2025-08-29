import { useState } from "react";
import { ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Women's specific product data
const womensProducts = [
  {
    id: "w1",
    name: "Silk Evening Dress",
    brand: "LUXE Couture",
    price: 2100,
    originalPrice: 2800,
    image: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGx1eHVyeSUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NTY0MzA3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    category: "Dresses",
    description: "An exquisite silk evening dress featuring a flowing silhouette and sophisticated draping. Perfect for special occasions and elegant soirées.",
    materials: ["100% Silk Charmeuse", "Hand-finished Seams", "Hidden Zipper"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "w2",
    name: "Designer Leather Handbag",
    brand: "LUXE Atelier",
    price: 1450,
    image: "https://images.unsplash.com/photo-1579381176012-405f0e448615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVsZWdhbnQlMjBoYW5kYmFnJTIwbHV4dXJ5fGVufDF8fHx8MTc1NjQzMDc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Handbags",
    description: "A timeless leather handbag crafted from the finest Italian leather. Features multiple compartments and elegant gold hardware details.",
    materials: ["Italian Leather", "24k Gold Hardware", "Silk Lining"],
    sizes: ["One Size"]
  },
  {
    id: "w3",
    name: "Patent Leather Heels",
    brand: "LUXE Footwear",
    price: 780,
    image: "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhpZ2glMjBoZWVscyUyMHNob2VzfGVufDF8fHx8MTc1NjQzMDc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Footwear",
    description: "Elegant patent leather heels with a classic pointed toe. Features comfortable padding and a sophisticated silhouette perfect for any occasion.",
    materials: ["Patent Leather", "Leather Sole", "Cushioned Insole"],
    sizes: ["35", "36", "37", "38", "39", "40", "41"]
  },
  {
    id: "w4",
    name: "Diamond Tennis Bracelet",
    brand: "LUXE Jewelry",
    price: 3200,
    image: "https://images.unsplash.com/photo-1643237225114-99a715aeca07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGpld2VscnklMjBlbGVnYW50JTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzU2NDMwNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    category: "Jewelry",
    description: "A stunning diamond tennis bracelet featuring brilliant-cut diamonds set in white gold. A timeless piece that elevates any ensemble.",
    materials: ["18k White Gold", "Brilliant-Cut Diamonds", "Secure Clasp"],
    sizes: ["One Size"]
  },
  {
    id: "w5",
    name: "Silk Blouse",
    brand: "LUXE Essentials",
    price: 520,
    image: "https://images.unsplash.com/photo-1590588503756-08a4b2be5eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJsb3VzZSUyMHNoaXJ0JTIwZWxlZ2FudHxlbnwxfHx8fDE3NTY0MzA3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Blouses",
    description: "A versatile silk blouse with elegant draping and refined details. Perfect for both professional settings and casual elegance.",
    materials: ["100% Mulberry Silk", "Mother of Pearl Buttons"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "w6",
    name: "Tailored Wool Coat",
    brand: "LUXE Outerwear",
    price: 1950,
    image: "https://images.unsplash.com/photo-1611025035970-27e2a8e9e09f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNvYXQlMjBqYWNrZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc1NjQzMDc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Outerwear",
    description: "A sophisticated wool coat with impeccable tailoring and timeless design. Features a flattering silhouette and luxurious finishes.",
    materials: ["Virgin Wool", "Silk Lining", "Horn Buttons"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "w7",
    name: "Pleated Midi Skirt",
    brand: "LUXE Ready-to-Wear",
    price: 650,
    image: "https://images.unsplash.com/photo-1691796773910-923291dd6e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNraXJ0JTIwZmFzaGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU2NDMwNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Skirts",
    description: "An elegant pleated midi skirt that combines classic styling with contemporary appeal. Features a flattering A-line silhouette.",
    materials: ["Wool Crepe", "Invisible Zipper", "Lined"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "w8",
    name: "Designer Sunglasses",
    brand: "LUXE Eyewear",
    price: 420,
    image: "https://images.unsplash.com/photo-1585991193633-d5fedd9cdc97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHN1bmdsYXNzZXMlMjBsdXh1cnklMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NTY0MzA3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "Sophisticated sunglasses featuring premium UV protection and elegant frame design. A perfect blend of style and functionality.",
    materials: ["Acetate Frame", "UV Protection Lenses", "Microfiber Case"],
    sizes: ["One Size"]
  }
];

interface WomensPageProps {
  onProductClick?: (productId: string) => void;
}

export function WomensPage({ onProductClick }: WomensPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof womensProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const handleProductClick = (productId: string) => {
    const product = womensProducts.find(p => p.id === productId);
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

  const categories = ["all", "dresses", "blouses", "skirts", "outerwear", "handbags", "footwear", "jewelry", "accessories"];
  
  const filteredProducts = selectedCategory === "all" 
    ? womensProducts 
    : womensProducts.filter(product => product.category.toLowerCase() === selectedCategory);

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
                  <span>Women</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  Women's
                  <br />
                  <span className="text-muted-foreground">Collection</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Discover our curated selection of women's fashion that celebrates elegance, sophistication, and timeless style.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Style Guide
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGx1eHVyeSUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NTY0MzA3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Women's luxury fashion"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-full">
                <span className="text-sm">New Arrivals</span>
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