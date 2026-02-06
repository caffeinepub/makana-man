import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Sparkles, Zap } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Makana Man — Premium Healthy High-Protein Snacks';
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-coral/10 via-background to-sand/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Quality{' '}
                <span className="text-coral">High-Protein Snacks</span> for Every Age
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Discover delicious, healthy snacks packed with protein and made with premium ingredients. 
                Perfect for fueling your active lifestyle, no matter your age.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate({ to: '/packets' })}
                  className="gap-2 text-base"
                >
                  Explore Our Snacks
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/contact' })}
                  className="text-base"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src="/assets/generated/makana-hero.dim_1600x900.png"
                  alt="Premium healthy high-protein snacks"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-coral/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-sand/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Choose Makana Man?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality, healthiest snacks that fuel your body and delight your taste buds.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">High Protein</h3>
              <p className="text-muted-foreground">
                Packed with premium protein to fuel your active lifestyle and keep you energized throughout the day.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-sand/20 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-sand-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Healthy & Nutritious</h3>
              <p className="text-muted-foreground">
                Made with wholesome ingredients and no artificial additives. Good for your body, great for your health.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Only the finest ingredients make it into our snacks. Quality you can taste in every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-coral to-coral-dark rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Fuel Your Day?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Browse our collection of premium, healthy, high-protein snacks and find your new favorite.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate({ to: '/packets' })}
              className="gap-2 text-base"
            >
              View All Snacks
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
