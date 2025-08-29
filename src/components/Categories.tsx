import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Category {
  name: string;
  image: string;
  itemCount: number;
}

const categories: Category[] = [
  {
    name: "Ready-to-Wear",
    image: "https://images.unsplash.com/photo-1617033298185-ab4b65511779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwamFja2V0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU2NDMwMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 124
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1598099947145-e85739e7ca28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaGFuZGJhZyUyMGx1eHVyeXxlbnwxfHx8fDE3NTY0MzAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 87
  },
  {
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1709282028322-35c1fb068ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lcyUyMGZvb3R3ZWFyfGVufDF8fHx8MTc1NjQzMDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 56
  }
];

interface CategoriesProps {
  onNavigate?: (page: string) => void;
}

export function Categories({ onNavigate }: CategoriesProps) {
  const handleCategoryClick = (categoryName: string) => {
    // Navigate to different sections based on category
    if (onNavigate) {
      switch (categoryName) {
        case "Ready-to-Wear":
          onNavigate('women'); // Women's ready-to-wear is more common in fashion
          break;
        case "Accessories":
          onNavigate('accessories');
          break;
        case "Footwear":
          onNavigate('men'); // Could alternate between men/women
          break;
        default:
          onNavigate('women');
      }
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections across different categories, each piece selected for its exceptional quality and design.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[4/5] overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Category overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white">
                      <h3 className="text-xl mb-2">{category.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/80">
                          {category.itemCount} pieces
                        </span>
                        <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform">
                          Explore
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}