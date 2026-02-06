import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { packets } from '../content/packets';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function PacketsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Makana Man — Our Snacks';
  }, []);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Premium Snacks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted collection of healthy, high-protein snacks designed to fuel your body and delight your taste buds.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packets.map((packet) => (
            <Card key={packet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={packet.image}
                  alt={packet.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-2xl">{packet.name}</CardTitle>
                <CardDescription className="text-base">{packet.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{packet.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => navigate({ to: '/contact' })}
                  className="w-full gap-2"
                >
                  Inquire About This Product
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-coral/10 to-sand/10 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Looking for Custom Snack Bundles?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We can create custom snack bundles tailored to your specific needs, dietary preferences, or bulk orders. 
              Perfect for teams, events, or corporate wellness programs.
            </p>
            <Button
              size="lg"
              onClick={() => navigate({ to: '/contact' })}
              className="gap-2"
            >
              Contact Us for Custom Orders
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
