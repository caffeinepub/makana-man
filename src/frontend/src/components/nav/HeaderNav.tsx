import { useState } from 'react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import LoginButton from '../auth/LoginButton';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Packets', path: '/packets' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function HeaderNav() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          >
            <img
              src="/assets/generated/makana-logo.dim_512x512.png"
              alt="Makana Man"
              className="h-10 w-auto"
            />
            <span className="font-display text-xl font-bold text-foreground">
              Makana Man
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={currentPath === link.path ? 'default' : 'ghost'}
                onClick={() => handleNavigation(link.path)}
                className="font-medium"
              >
                {link.label}
              </Button>
            ))}
            <div className="ml-4">
              <LoginButton />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <LoginButton />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Button
                      key={link.path}
                      variant={currentPath === link.path ? 'default' : 'ghost'}
                      onClick={() => handleNavigation(link.path)}
                      className="justify-start font-medium"
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
