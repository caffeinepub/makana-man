import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <img
              src="/assets/generated/makana-logo.dim_512x512.png"
              alt="Makana Man"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Premium quality, healthy, high-protein snacks for every age.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/packets" className="text-muted-foreground hover:text-foreground transition-colors">
                  Packets
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@makanaman.com</li>
              <li>Phone: (808) 555-0123</li>
              <li>Hours: Mon-Fri 9AM-5PM HST</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1.5">
            © 2026. Built with <Heart className="h-4 w-4 text-coral fill-coral" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-coral transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
