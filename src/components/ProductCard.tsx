import { Heart, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    image: string;
    isNew?: boolean;
    category: string;
  };
  onProductClick?: (productId: string) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const handleClick = () => {
    onProductClick?.(product.id);
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="relative overflow-hidden rounded-lg bg-muted/30">
        {/* Product Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-8 w-8 bg-background/90 hover:bg-background"
              onClick={(e) => {
                e.stopPropagation();
                // Handle wishlist action
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Discover button */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="secondary" className="w-full bg-background/90 hover:bg-background group/btn">
              Discover
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </div>
        </div>

        {/* Badges */}
        {product.isNew && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/90 text-foreground">
              New
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <div>
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <h3 className="line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>
        
        <div className="flex items-center gap-2">
          <span>${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Subtle category indicator */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {product.category}
        </p>
      </div>
    </div>
  );
}