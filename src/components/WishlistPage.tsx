import { useState } from "react";
import { 
  Heart, 
  Share2, 
  ShoppingBag, 
  Filter, 
  SortAsc, 
  Grid3X3, 
  List,
  X,
  Star,
  Eye,
  MoreHorizontal
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Mock wishlist data
const wishlistItems = [
  {
    id: "1",
    name: "Structured Leather Handbag",
    brand: "LUXE",
    price: 1250,
    originalPrice: 1450,
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnfGVufDF8fHx8MTc1NjM5MDk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Handbags",
    dateAdded: "August 24, 2025",
    inStock: true,
    onSale: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Classic Timepiece",
    brand: "LUXE",
    price: 2850,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1751437730397-ef83024b5339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdhdGNofGVufDF8fHx8MTc1NjQ5NzU3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Watches",
    dateAdded: "August 20, 2025",
    inStock: true,
    onSale: false,
    rating: 4.9,
    reviews: 87
  },
  {
    id: "3",
    name: "Minimalist Silk Dress",
    brand: "LUXE",
    price: 685,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZHJlc3N8ZW58MXx8fHwxNzU2NDk3NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Dresses",
    dateAdded: "August 18, 2025",
    inStock: false,
    onSale: false,
    rating: 4.7,
    reviews: 156
  },
  {
    id: "4",
    name: "Italian Leather Loafers",
    brand: "LUXE",
    price: 475,
    originalPrice: 525,
    image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lc3xlbnwxfHx8fDE3NTY0OTc1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Shoes",
    dateAdded: "August 15, 2025",
    inStock: true,
    onSale: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    brand: "LUXE",
    price: 320,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzU2NDY5ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    dateAdded: "August 12, 2025",
    inStock: true,
    onSale: false,
    rating: 4.5,
    reviews: 89
  },
  {
    id: "6",
    name: "Cashmere Scarf",
    brand: "LUXE",
    price: 285,
    originalPrice: 340,
    image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd2lzaGxpc3QlMjBpdGVtc3xlbnwxfHx8fDE3NTY0OTc1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    dateAdded: "August 8, 2025",
    inStock: true,
    onSale: true,
    rating: 4.9,
    reviews: 67
  }
];

export function WishlistPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("dateAdded");
  const [filterCategory, setFilterCategory] = useState("all");
  const [items, setItems] = useState(wishlistItems);

  const categories = ["all", "handbags", "watches", "dresses", "shoes", "accessories"];

  const removeFromWishlist = (itemId: string) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const filteredItems = filterCategory === "all" 
    ? items 
    : items.filter(item => item.category.toLowerCase() === filterCategory);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "dateAdded":
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      case "priceLow":
        return a.price - b.price;
      case "priceHigh":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const totalValue = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Home</span>
            <span>/</span>
            <span>Wishlist</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl tracking-tight mb-2">My Wishlist</h1>
              <p className="text-muted-foreground">
                {items.length} {items.length === 1 ? 'item' : 'items'} • Total value: ${totalValue.toLocaleString()}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share List
              </Button>
              <Button variant="outline" size="sm">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add All to Bag
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <SortAsc className="h-4 w-4 text-muted-foreground" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dateAdded">Date Added</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="priceLow">Price: Low to High</SelectItem>
                    <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {sortedItems.length} {sortedItems.length === 1 ? 'item' : 'items'}
              </span>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {sortedItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h2 className="text-xl mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">
                Start adding items you love to keep track of them here.
              </p>
              <Button>Continue Shopping</Button>
            </div>
          ) : (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedItems.map((item) => (
                    <Card key={item.id} className="group relative overflow-hidden border-0 bg-card/50">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] overflow-hidden relative">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          
                          {/* Overlay actions */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button size="sm" className="bg-white text-black hover:bg-white/90">
                              <Eye className="h-4 w-4 mr-2" />
                              Quick View
                            </Button>
                            {item.inStock && (
                              <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                                <ShoppingBag className="h-4 w-4 mr-2" />
                                Add to Bag
                              </Button>
                            )}
                          </div>

                          {/* Remove button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black"
                            onClick={() => removeFromWishlist(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>

                          {/* Badges */}
                          <div className="absolute top-2 left-2 flex flex-col gap-1">
                            {item.onSale && (
                              <Badge variant="destructive" className="text-xs">
                                Sale
                              </Badge>
                            )}
                            {!item.inStock && (
                              <Badge variant="secondary" className="text-xs">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm group-hover:text-primary transition-colors line-clamp-2">
                                {item.name}
                              </h3>
                              <p className="text-xs text-muted-foreground">{item.brand}</p>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Share2 className="h-4 w-4 mr-2" />
                                  Share Item
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem 
                                  onClick={() => removeFromWishlist(item.id)}
                                  className="text-destructive"
                                >
                                  <X className="h-4 w-4 mr-2" />
                                  Remove
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          <div className="flex items-center gap-1 text-xs">
                            <Star className="h-3 w-3 fill-current text-yellow-400" />
                            <span>{item.rating}</span>
                            <span className="text-muted-foreground">({item.reviews})</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-sm">${item.price.toLocaleString()}</span>
                            {item.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                ${item.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-muted-foreground">
                            Added {item.dateAdded}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {sortedItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex gap-6 p-6">
                          <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-1 space-y-3">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.brand}</p>
                                <div className="flex items-center gap-1 text-sm mt-1">
                                  <Star className="h-3 w-3 fill-current text-yellow-400" />
                                  <span>{item.rating}</span>
                                  <span className="text-muted-foreground">({item.reviews} reviews)</span>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromWishlist(item.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="flex items-center gap-2">
                              {item.onSale && (
                                <Badge variant="destructive" className="text-xs">
                                  Sale
                                </Badge>
                              )}
                              {!item.inStock && (
                                <Badge variant="secondary" className="text-xs">
                                  Out of Stock
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-xs">
                                {item.category}
                              </Badge>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span>${item.price.toLocaleString()}</span>
                                {item.originalPrice && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${item.originalPrice.toLocaleString()}
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Button>
                                {item.inStock && (
                                  <Button size="sm">
                                    <ShoppingBag className="h-4 w-4 mr-2" />
                                    Add to Bag
                                  </Button>
                                )}
                              </div>
                            </div>

                            <p className="text-xs text-muted-foreground">
                              Added on {item.dateAdded}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="text-center mt-12 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Complete Wishlist
                  </Button>
                  <Button size="lg">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add All Available Items
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Share your wishlist with friends or move items to your shopping bag when ready to purchase.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}