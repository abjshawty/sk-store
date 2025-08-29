import { useState } from "react";
import { ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
// import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Men's specific product data
const mensProducts = [
  {
    id: "m1",
    name: "Classic Navy Suit",
    brand: "LUXE Tailoring",
    price: 1850,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1756277514079-d30eb978194a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmYXNoaW9uJTIwc3VpdCUyMGx1eHVyeXxlbnwxfHx8fDE3NTY0MzAzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    category: "Suiting",
    description: "Impeccably tailored navy suit crafted from finest Italian wool. Features a contemporary slim fit with peak lapels and subtle texture.",
    materials: ["Super 150s Wool", "Silk Lining", "Horn Buttons"],
    sizes: ["36", "38", "40", "42", "44", "46", "48"]
  },
  {
    id: "m2",
    name: "Premium Leather Dress Shoes",
    brand: "LUXE Footwear",
    price: 980,
    image: "https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBkcmVzcyUyMHNob2VzJTIwbGVhdGhlcnxlbnwxfHx8fDE3NTY0MzAzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Footwear",
    description: "Handcrafted leather dress shoes with timeless oxford silhouette. Made from premium Italian calfskin with traditional Goodyear welt construction.",
    materials: ["Italian Calfskin", "Leather Sole", "Goodyear Welted"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"]
  },
  {
    id: "m3",
    name: "Luxury Swiss Watch",
    brand: "LUXE Timepieces",
    price: 3400,
    image: "https://images.unsplash.com/photo-1662724174411-06358407f6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBhY2Nlc3NvcmllcyUyMHdhdGNoJTIwbHV4dXJ5fGVufDF8fHx8MTc1NjQzMDM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "Swiss-made automatic watch with sophisticated complications. Features sapphire crystal and premium leather strap.",
    materials: ["Stainless Steel", "Sapphire Crystal", "Leather Strap"],
    sizes: ["One Size"]
  },
  {
    id: "m4",
    name: "Casual Cotton Shirt",
    brand: "LUXE Essentials",
    price: 320,
    image: "https://images.unsplash.com/photo-1617724757497-79b54c5444d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXN1YWwlMjB3ZWFyJTIwZmFzaGlvbnxlbnwxfHx8fDE3NTY0MzAzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Casual",
    description: "Relaxed fit cotton shirt perfect for weekend styling. Made from premium organic cotton with subtle texture and modern cut.",
    materials: ["Organic Cotton", "Mother of Pearl Buttons"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "m5",
    name: "Wool Overcoat",
    brand: "LUXE Outerwear",
    price: 1650,
    image: "https://images.unsplash.com/photo-1617033298185-ab4b65511779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwamFja2V0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU2NDMwMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Outerwear",
    description: "Classic wool overcoat with refined silhouette. Features premium wool construction and timeless styling for sophisticated occasions.",
    materials: ["Virgin Wool", "Cashmere Lining", "Horn Buttons"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "m6",
    name: "Silk Pocket Square Set",
    brand: "LUXE Accessories",
    price: 180,
    image: "https://images.unsplash.com/photo-1645199059898-9953ef34f271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc1NjQzMDAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    category: "Accessories",
    description: "Curated collection of silk pocket squares featuring classic patterns and modern designs. Essential finishing touch for formal attire.",
    materials: ["100% Silk", "Hand-rolled Edges"],
    sizes: ["One Size"]
  },
  {
    id: "m7",
    name: "Tailored Chinos",
    brand: "LUXE Casual",
    price: 380,
    image: "https://images.unsplash.com/photo-1659431392050-777eebee17ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2MzgwNTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Casual",
    description: "Perfectly tailored chinos that bridge casual and formal styling. Cut from premium cotton twill with modern slim fit.",
    materials: ["Cotton Twill", "Stretch Blend"],
    sizes: ["30", "32", "34", "36", "38", "40"]
  },
  {
    id: "m8",
    name: "Leather Belt Collection",
    brand: "LUXE Leather",
    price: 420,
    image: "https://images.unsplash.com/photo-1598099947145-e85739e7ca28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaGFuZGJhZyUyMGx1eHVyeXxlbnwxfHx8fDE3NTY0MzAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "Essential leather belt collection crafted from premium Italian leather. Features classic buckle design and refined finishing.",
    materials: ["Italian Leather", "Brushed Metal Hardware"],
    sizes: ["32", "34", "36", "38", "40", "42"]
  }
];

interface MensPageProps {
  onProductClick?: (productId: string) => void;
}

export function MensPage ({ onProductClick }: MensPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof mensProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const handleProductClick = (productId: string) => {
    const product = mensProducts.find(p => p.id === productId);
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

  const categories = ["all", "suiting", "casual", "footwear", "accessories", "outerwear"];

  const filteredProducts = selectedCategory === "all"
    ? mensProducts
    : mensProducts.filter(product => product.category.toLowerCase() === selectedCategory);

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
                  <span>Men</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  Men's
                  <br />
                  <span className="text-muted-foreground">Collection</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Discover refined menswear that embodies sophistication and modern elegance. From tailored suiting to contemporary casual pieces.
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
                  src="https://images.unsplash.com/photo-1756277514079-d30eb978194a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmYXNoaW9uJTIwc3VpdCUyMGx1eHVyeXxlbnwxfHx8fDE3NTY0MzAzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Men's luxury fashion"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-full">
                <span className="text-sm">New Season</span>
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
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors whitespace-nowrap ${selectedCategory === category
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