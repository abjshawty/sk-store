import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

// Collections data
const collections = [
  {
    id: "ss25",
    title: "Spring/Summer 2025",
    subtitle: "Essential Minimalism",
    description: "A curated selection of timeless pieces that embody modern sophistication. Clean lines, premium fabrics, and versatile silhouettes define this seasonal collection.",
    image: "https://images.unsplash.com/photo-1582461420964-9e1ecbbbd138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwY29sbGVjdGlvbiUyMHJ1bndheXxlbnwxfHx8fDE3NTY0NzA1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
    season: "Spring/Summer",
    year: "2025",
    pieces: 42,
    status: "Available Now"
  },
  {
    id: "fw24",
    title: "Fall/Winter 2024",
    subtitle: "Urban Sophistication",
    description: "Luxurious textures and refined tailoring for the modern wardrobe. This collection bridges comfort and elegance with expert craftsmanship.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGZhc2hpb24lMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc1NjQ3MDUzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    season: "Fall/Winter",
    year: "2024",
    pieces: 38,
    status: "Available Now"
  },
  {
    id: "capsule",
    title: "The Essentials",
    subtitle: "Capsule Collection",
    description: "Carefully selected foundational pieces designed to work together seamlessly. Quality over quantity, with each item chosen for its versatility and enduring style.",
    image: "https://images.unsplash.com/photo-1684882470351-2b23f235287f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NTY0Njk1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    season: "Timeless",
    year: "2025",
    pieces: 24,
    status: "Available Now"
  },
  {
    id: "limited",
    title: "Limited Edition",
    subtitle: "Exclusive Pieces",
    description: "A select group of unique pieces created in limited quantities. Each item represents the pinnacle of design and craftsmanship for the discerning collector.",
    image: "https://images.unsplash.com/photo-1520367745676-56196632073f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBjYW1wYWlnbnxlbnwxfHx8fDE3NTY0NzA1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    season: "Exclusive",
    year: "2025",
    pieces: 12,
    status: "Coming Soon"
  }
];

export function CollectionsPage() {
  const [, setSelectedCollection] = useState<string | null>(null);

  const featuredCollection = collections.find(c => c.featured);
  const otherCollections = collections.filter(c => !c.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Home</span>
                  <span>/</span>
                  <span>Collections</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  Curated
                  <br />
                  <span className="text-muted-foreground">Collections</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Discover our thoughtfully curated collections, each telling a unique story through exceptional design and uncompromising quality.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Browse All Collections
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  View Lookbook
                </Button>
              </div>
            </div>

            {/* Featured Collection Preview */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1726128449240-6569b63355d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwYm91dGlxdWV8ZW58MXx8fHwxNzU2NDcwNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Curated Collections"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Collection info overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm">Featured Collection</h3>
                    <p className="text-xs text-muted-foreground">Spring/Summer 2025</p>
                  </div>
                  <Badge variant="secondary">New</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      {featuredCollection && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{featuredCollection.status}</Badge>
                    <Badge>{featuredCollection.season} {featuredCollection.year}</Badge>
                  </div>
                  <h2 className="text-3xl lg:text-4xl tracking-tight">
                    {featuredCollection.title}
                  </h2>
                  <h3 className="text-xl text-muted-foreground">
                    {featuredCollection.subtitle}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredCollection.description}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div>{featuredCollection.pieces}</div>
                    <div className="text-sm text-muted-foreground">Pieces</div>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div className="text-center">
                    <div>Limited</div>
                    <div className="text-sm text-muted-foreground">Edition</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group">
                    Discover Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg">
                    View Lookbook
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={featuredCollection.image}
                    alt={featuredCollection.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Collections Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl tracking-tight mb-4">All Collections</h2>
            <p className="text-muted-foreground">
              Explore our complete range of carefully curated collections, each with its own distinct character and story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCollections.map((collection) => (
              <Card 
                key={collection.id} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card/50"
                onClick={() => setSelectedCollection(collection.id)}
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/5] overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant={collection.status === "Coming Soon" ? "secondary" : "outline"}>
                        {collection.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {collection.pieces} pieces
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg group-hover:text-primary transition-colors">
                        {collection.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {collection.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {collection.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">
                        {collection.season} {collection.year}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl tracking-tight">
              Stay Updated on New Collections
            </h2>
            <p className="text-muted-foreground">
              Be the first to know about our latest collections, exclusive pieces, and special collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Subscribe for Updates
              </Button>
              <Button variant="outline" size="lg">
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}