import { useState } from 'react';
import { useSubmitInquiry } from '../../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const submitInquiry = useSubmitInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    try {
      await submitInquiry.mutateAsync({
        name: formData.name,
        email: formData.email,
        message: `${formData.message}${formData.phone ? `\n\nPhone: ${formData.phone}` : ''}`,
      });

      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit inquiry:', error);
    }
  };

  const isValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSuccess && (
        <Alert className="bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <AlertTitle className="text-emerald-900 dark:text-emerald-100">Success!</AlertTitle>
          <AlertDescription className="text-emerald-800 dark:text-emerald-200">
            Thank you for your message. We'll get back to you soon!
          </AlertDescription>
        </Alert>
      )}

      {submitInquiry.isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to submit your inquiry. Please try again.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          required
          disabled={submitInquiry.isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
          required
          disabled={submitInquiry.isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="(808) 555-0123"
          disabled={submitInquiry.isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your inquiry..."
          rows={6}
          required
          disabled={submitInquiry.isPending}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={!isValid || submitInquiry.isPending}
        className="w-full sm:w-auto"
      >
        {submitInquiry.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
