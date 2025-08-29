import { Heart, Share2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductModalProps {
  product: {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    image: string;
    isNew?: boolean;
    category: string;
    description?: string;
    materials?: string[];
    sizes?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        {/* Hidden title and description for accessibility */}
        <DialogTitle className="sr-only">{product.name} - {product.brand}</DialogTitle>
        <DialogDescription className="sr-only">
          Product details for {product.name} by {product.brand}. Price: ${product.price}. {product.description}
        </DialogDescription>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Product Image */}
          <div className="relative bg-muted/30">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <div className="absolute top-4 left-4">
                <Badge variant="secondary">New</Badge>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {product.brand}
                </p>
                <h2 className="text-2xl">{product.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-xl">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="space-y-2">
                  <h3 className="font-medium">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Materials */}
              {product.materials && (
                <div className="space-y-2">
                  <h3 className="font-medium">Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material) => (
                      <Badge key={material} variant="outline">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && (
                <div className="space-y-2">
                  <h3 className="font-medium">Available Sizes</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className="border border-border rounded-md py-2 text-sm hover:border-primary transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-4 pt-4">
                <Button className="w-full group">
                  Request Information
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    Save to Wishlist
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <button className="text-sm text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-current pb-1">
                    View Size Guide
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-border space-y-2 text-sm text-muted-foreground">
                <p>• Free worldwide shipping on orders over $500</p>
                <p>• 30-day return policy</p>
                <p>• Complimentary gift wrapping</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}