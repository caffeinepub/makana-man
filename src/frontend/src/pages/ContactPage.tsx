import { useEffect } from 'react';
import ContactForm from '../components/forms/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Makana Man — Contact Us';
  }, []);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions about our snacks or want to place a bulk order? We'd love to hear from you!
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@makanaman.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sand/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-sand-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">(808) 555-0123</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Friday, 9AM - 5PM HST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-coral" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                        <p className="text-sm mt-2">Hawaii Standard Time (HST)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-coral/10 to-sand/10 rounded-xl p-6">
                <h3 className="font-display text-lg font-semibold mb-2">Bulk Orders & Custom Bundles</h3>
                <p className="text-muted-foreground">
                  Looking for bulk orders or custom snack bundles? We'd love to help! 
                  Fill out the form and let us know your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
