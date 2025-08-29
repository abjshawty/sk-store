import { useState } from "react";
import { ArrowRight, Calendar, Clock, Tag, ChevronRight, User } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

// Editorial articles data
const articles = [
  {
    id: "1",
    title: "The Future of Sustainable Luxury Fashion",
    subtitle: "How innovation meets responsibility in modern design",
    excerpt: "Exploring the intersection of luxury craftsmanship and environmental consciousness, we delve into the sustainable practices shaping the future of high-end fashion.",
    content: "The luxury fashion industry is undergoing a profound transformation as brands embrace sustainable practices without compromising on quality or design excellence...",
    image: "https://images.unsplash.com/photo-1575376653281-1632fc9c61f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NjQ3MDUzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sustainability",
    author: "Editorial Team",
    publishDate: "August 26, 2025",
    readTime: "8 min read",
    featured: true,
    tags: ["Sustainability", "Innovation", "Craftsmanship"]
  },
  {
    id: "2",
    title: "Behind the Scenes: Spring/Summer 2025 Collection",
    subtitle: "An intimate look at our design process",
    excerpt: "Take a journey with our design team as they share the inspiration, challenges, and creative decisions behind our latest seasonal collection.",
    content: "From initial sketches to final fittings, the creation of our Spring/Summer 2025 collection was a journey of artistic exploration and technical precision...",
    image: "https://images.unsplash.com/photo-1575111507952-2d4f371374f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NTY0MjM4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Behind the Scenes",
    author: "Design Team",
    publishDate: "August 22, 2025",
    readTime: "6 min read",
    featured: false,
    tags: ["Design Process", "Collection", "Creative"]
  },
  {
    id: "3",
    title: "The Art of Minimalist Styling",
    subtitle: "Less is more in contemporary fashion",
    excerpt: "Discover how to create sophisticated looks through the power of restraint, focusing on quality pieces and thoughtful combinations.",
    content: "Minimalist styling is not about having less, but about making more thoughtful choices. Each piece in your wardrobe should serve a purpose...",
    image: "https://images.unsplash.com/photo-1639244151653-7807947de5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbWFnYXppbmV8ZW58MXx8fHwxNzU2NDIzODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Style Guide",
    author: "Style Editorial",
    publishDate: "August 18, 2025",
    readTime: "5 min read",
    featured: false,
    tags: ["Styling", "Minimalism", "Wardrobe"]
  },
  {
    id: "4",
    title: "Craftsmanship Spotlight: Italian Leather Goods",
    subtitle: "Celebrating traditional techniques in modern design",
    excerpt: "Meet the artisans behind our leather accessories and learn about the time-honored techniques that make each piece exceptional.",
    content: "In the workshops of Italy, master craftspeople continue traditions passed down through generations, creating leather goods of unparalleled quality...",
    image: "https://images.unsplash.com/photo-1520367745676-56196632073f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBjYW1wYWlnbnxlbnwxfHx8fDE3NTY0NzA1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Craftsmanship",
    author: "Artisan Stories",
    publishDate: "August 15, 2025",
    readTime: "7 min read",
    featured: false,
    tags: ["Craftsmanship", "Heritage", "Artisans"]
  },
  {
    id: "5",
    title: "Luxury Brand Announcement: New Partnership",
    subtitle: "Expanding our commitment to excellence",
    excerpt: "We're excited to announce our partnership with renowned Italian textile mills, ensuring the highest quality fabrics for our future collections.",
    content: "Our commitment to excellence drives us to continually seek the finest materials and most skilled artisans. Today, we're proud to announce...",
    image: "https://images.unsplash.com/photo-1684882470351-2b23f235287f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NTY0Njk1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Brand News",
    author: "LUXE Team",
    publishDate: "August 12, 2025",
    readTime: "4 min read",
    featured: false,
    tags: ["Partnership", "Quality", "Innovation"]
  }
];

export function EditorialPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [, setSelectedArticle] = useState<string | null>(null);

  const categories = ["all", "brand news", "style guide", "behind the scenes", "craftsmanship", "sustainability"];
  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  const filteredArticles = selectedCategory === "all" 
    ? otherArticles 
    : otherArticles.filter(article => article.category.toLowerCase() === selectedCategory);

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
                  <span>Editorial</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  Fashion
                  <br />
                  <span className="text-muted-foreground">Editorial</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Insights, stories, and announcements from the world of luxury fashion. Discover the craft, creativity, and culture behind our collections.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Browse Articles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Editorial image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639244151653-7807947de5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbWFnYXppbmV8ZW58MXx8fHwxNzU2NDIzODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fashion Editorial"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Latest article badge */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-full">
                <span className="text-sm">Latest Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">Featured Article</Badge>
              <h2 className="text-2xl lg:text-3xl tracking-tight">Latest Insights</h2>
            </div>

            <Card className="overflow-hidden border-0 bg-card/50">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="aspect-[4/3] lg:aspect-auto">
                    <ImageWithFallback
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 lg:py-12 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="outline">{featuredArticle.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredArticle.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl tracking-tight">
                        {featuredArticle.title}
                      </h3>
                      <h4 className="text-lg text-muted-foreground">
                        {featuredArticle.subtitle}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">By {featuredArticle.author}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {featuredArticle.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4 overflow-x-auto">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Categories:</span>
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
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl tracking-tight mb-4">All Articles</h2>
            <p className="text-muted-foreground">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card 
                key={article.id} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card/50"
                onClick={() => setSelectedArticle(article.id)}
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {article.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl tracking-tight">
              Stay Informed
            </h2>
            <p className="text-muted-foreground">
              Subscribe to our editorial newsletter for the latest insights, behind-the-scenes stories, and exclusive content from the world of luxury fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" size="lg">
                View Archive
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}