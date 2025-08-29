import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  category: string;
}

interface ProductGridProps {
  products: Product[];
  onProductClick?: (productId: string) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Featured Pieces</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Carefully selected items that represent the essence of contemporary luxury and timeless style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
            />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="text-sm text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-current pb-1">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
}