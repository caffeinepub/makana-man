import { useEffect } from 'react';
import { Heart, Package, Sparkles } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Makana Man — About Us';
  }, []);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Premium healthy snacks for every age
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border mb-12">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                <strong className="text-coral">Makana Man</strong> is dedicated to providing premium quality, 
                healthy, high-protein snacks that fuel your body and satisfy your cravings. Founded with a passion 
                for nutrition and wellness, we believe that healthy eating should never compromise on taste.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Every snack we create is carefully crafted with the finest ingredients, packed with protein, 
                and designed to support an active, healthy lifestyle. Whether you're an athlete, a busy professional, 
                a growing child, or an active senior, our snacks are perfect for every age and every stage of life.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                We're committed to transparency, quality, and your health. That's why we use only premium ingredients, 
                avoid artificial additives, and ensure every bite delivers the nutrition your body needs and the flavor 
                your taste buds crave.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-coral" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Made with Care</h3>
                <p className="text-muted-foreground">
                  Every snack is crafted with attention to quality, nutrition, and taste
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sand/20 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-sand-dark" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Premium Ingredients</h3>
                <p className="text-muted-foreground">
                  We source only the finest, healthiest ingredients for our snacks
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-coral" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">For Every Age</h3>
                <p className="text-muted-foreground">
                  Nutritious snacks perfect for kids, adults, and seniors alike
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-coral/10 to-sand/10 rounded-xl p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To provide premium quality, healthy, high-protein snacks that fuel active lifestyles and support 
                wellness for people of all ages, without ever compromising on taste or nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
