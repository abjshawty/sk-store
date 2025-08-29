import { useState } from "react";
import { Hero } from "./Hero";
import { Categories } from "./Categories";
import { ProductGrid } from "./ProductGrid";
import { ProductModal } from "./ProductModal";

// Sample product data for homepage
const sampleProducts = [
  {
    id: "1",
    name: "Structured Wool Blazer",
    brand: "LUXE Atelier",
    price: 1280,
    originalPrice: 1600,
    image: "https://images.unsplash.com/photo-1668934803414-010d2231fcde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU2NDIxOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    category: "Ready-to-Wear",
    description: "A meticulously crafted wool blazer featuring clean lines and a contemporary silhouette. Perfect for both professional settings and elegant evening occasions.",
    materials: ["100% Virgin Wool", "Silk Lining", "Horn Buttons"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "2",
    name: "Minimalist Leather Handbag",
    brand: "LUXE Leather",
    price: 890,
    image: "https://images.unsplash.com/photo-1598099947145-e85739e7ca28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaGFuZGJhZyUyMGx1eHVyeXxlbnwxfHx8fDE3NTY0MzAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "An essential leather handbag with clean lines and timeless appeal. Crafted from premium Italian leather with thoughtful interior organization.",
    materials: ["Italian Leather", "Gold Hardware", "Cotton Lining"],
    sizes: ["One Size"]
  },
  {
    id: "3",
    name: "Contemporary Midi Dress",
    brand: "LUXE Collection",
    price: 750,
    image: "https://images.unsplash.com/photo-1678637803384-947954f11c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjBmYXNoaW9ufGVufDF8fHx8MTc1NjQzMDA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Ready-to-Wear",
    description: "An elegant midi dress that embodies modern sophistication. The fluid silhouette and premium fabric create an effortlessly refined look.",
    materials: ["Silk Crepe", "Invisible Zipper"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "4",
    name: "Luxury Oxford Shoes",
    brand: "LUXE Footwear",
    price: 1150,
    image: "https://images.unsplash.com/photo-1709282028322-35c1fb068ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lcyUyMGZvb3R3ZWFyfGVufDF8fHx8MTc1NjQzMDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Footwear",
    description: "Handcrafted oxford shoes that blend traditional craftsmanship with contemporary design. Made from the finest Italian leather.",
    materials: ["Italian Calfskin", "Leather Sole", "Goodyear Welted"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"]
  },
  {
    id: "5",
    name: "Cashmere Overcoat",
    brand: "LUXE Atelier",
    price: 2400,
    image: "https://images.unsplash.com/photo-1617033298185-ab4b65511779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwamFja2V0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU2NDMwMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    category: "Ready-to-Wear",
    description: "A luxurious cashmere overcoat with impeccable tailoring and timeless design. The perfect investment piece for sophisticated wardrobes.",
    materials: ["100% Cashmere", "Silk Lining", "Horn Buttons"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "6",
    name: "Statement Jewelry Set",
    brand: "LUXE Jewelry",
    price: 580,
    image: "https://images.unsplash.com/photo-1645199059898-9953ef34f271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc1NjQzMDAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "An elegant jewelry set featuring contemporary design and premium materials. Includes necklace and matching earrings.",
    materials: ["18k Gold Plated", "Pearl Details", "Hypoallergenic"],
    sizes: ["One Size"]
  },
  {
    id: "7",
    name: "Tailored Trousers",
    brand: "LUXE Basics",
    price: 420,
    image: "https://images.unsplash.com/photo-1659431392050-777eebee17ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU2MzgwNTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Ready-to-Wear",
    description: "Perfectly tailored trousers that offer both comfort and sophistication. Cut from premium fabric with an impeccable fit.",
    materials: ["Wool Blend", "Stretch Lining"],
    sizes: ["24", "26", "28", "30", "32", "34"]
  },
  {
    id: "8",
    name: "Silk Scarf Collection",
    brand: "LUXE Silk",
    price: 280,
    image: "https://images.unsplash.com/photo-1613728455120-d00493b5e77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NTY0MzAwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "A collection of hand-printed silk scarves featuring original artistic designs. Each piece is a work of art that elevates any outfit.",
    materials: ["100% Mulberry Silk", "Hand-rolled Edges"],
    sizes: ["90cm x 90cm"]
  }
];

interface HomePageProps {
  onProductClick?: (productId: string) => void;
  onNavigate?: (page: string) => void;
}

export function HomePage({ onProductClick, onNavigate }: HomePageProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof sampleProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (productId: string) => {
    const product = sampleProducts.find(p => p.id === productId);
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

  return (
    <div>
      <main>
        <Hero />
        <Categories onNavigate={onNavigate} />
        <ProductGrid 
          products={sampleProducts} 
          onProductClick={handleProductClick}
        />
      </main>
      
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