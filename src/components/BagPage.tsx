import { useState } from "react";
import { Minus, Plus, X, Heart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface BagItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  category: string;
}

export function BagPage() {
  const [bagItems, setBagItems] = useState<BagItem[]>([
    {
      id: "1",
      name: "Cashmere Wool Blend Coat",
      brand: "MAISON BLANC",
      price: 1250,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1746207067456-a6a2fcd22b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXNobWVyZSUyMGNvYXQlMjBmYXNoaW9ufGVufDF8fHx8MTc1NjQ5ODE4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      size: "M",
      color: "Charcoal",
      quantity: 1,
      category: "Outerwear"
    },
    {
      id: "2",
      name: "Silk Blend Midi Dress",
      brand: "ATELIER ROUGE",
      price: 680,
      image: "https://images.unsplash.com/photo-1746207068099-4b3a1dfe5fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2lsayUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NTY0OTgxODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      size: "S",
      color: "Midnight Blue",
      quantity: 2,
      category: "Dresses"
    },
    {
      id: "3",
      name: "Italian Leather Shoulder Bag",
      brand: "CURA LUXURY",
      price: 890,
      image: "https://images.unsplash.com/photo-1598099947145-e85739e7ca28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwaGFuZGJhZ3xlbnwxfHx8fDE3NTY0NDc3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      size: "One Size",
      color: "Cognac",
      quantity: 1,
      category: "Accessories"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setBagItems(bagItems.filter(item => item.id !== id));
    } else {
      setBagItems(bagItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setBagItems(bagItems.filter(item => item.id !== id));
  };

  const updateSize = (id: string, newSize: string) => {
    setBagItems(bagItems.map(item => 
      item.id === id ? { ...item, size: newSize } : item
    ));
  };

  const subtotal = bagItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  if (bagItems.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-lg mx-auto text-center space-y-6">
            <h1 className="text-3xl tracking-tight">Your Bag</h1>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Your bag is currently empty
              </p>
              <p className="text-sm text-muted-foreground">
                Discover our curated collections and add pieces to your bag
              </p>
            </div>
            <Button className="mt-8 group">
              Continue Browsing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Bag Items */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl tracking-tight">Your Bag</h1>
              <Badge variant="secondary" className="text-sm">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </Badge>
            </div>

            <div className="space-y-8">
              {bagItems.map((item, index) => (
                <div key={item.id}>
                  <div className="grid grid-cols-4 gap-6">
                    {/* Product Image */}
                    <div className="relative group">
                      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted/30">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="col-span-3 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">{item.brand}</p>
                          <h3 className="text-lg">{item.name}</h3>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">
                            {item.category}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <span>Color: <span className="text-muted-foreground">{item.color}</span></span>
                        <Separator orientation="vertical" className="h-4" />
                        <div className="flex items-center gap-2">
                          <span>Size:</span>
                          <Select value={item.size} onValueChange={(value: string) => updateSize(item.id, value)}>
                            <SelectTrigger className="w-20 h-8 text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="XS">XS</SelectItem>
                              <SelectItem value="S">S</SelectItem>
                              <SelectItem value="M">M</SelectItem>
                              <SelectItem value="L">L</SelectItem>
                              <SelectItem value="XL">XL</SelectItem>
                              <SelectItem value="One Size">One Size</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm">Quantity:</span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span>${item.price}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>
                          {item.quantity > 1 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              ${item.price} each
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <Button variant="ghost" size="sm" className="text-sm h-8 px-3">
                          <Heart className="h-3 w-3 mr-2" />
                          Save for Later
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {index < bagItems.length - 1 && (
                    <Separator className="mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg border bg-card p-6 space-y-6">
                <h2 className="text-xl">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Estimated Shipping</span>
                    <span className="text-muted-foreground">Calculated at inquiry</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Estimated Tax</span>
                    <span className="text-muted-foreground">Calculated at inquiry</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between">
                    <span>Estimated Total</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full group">
                    Request Information
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Our personal shopping team will contact you within 24 hours to discuss availability, sizing, and personalized styling recommendations.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 space-y-4">
                <h3>Complimentary Services</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                    <span>Personal styling consultation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                    <span>White-glove delivery available</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                    <span>30-day return policy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                    <span>Complimentary alterations</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Continue Browsing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}