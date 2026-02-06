import { useEffect } from 'react';
import AdminGate from '../../components/auth/AdminGate';
import { useGetAllInquiries } from '../../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Mail, Calendar } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AdminInquiriesPage() {
  useEffect(() => {
    document.title = 'Makana Packet — Admin Inquiries';
  }, []);

  return (
    <AdminGate>
      <InquiriesContent />
    </AdminGate>
  );
}

function InquiriesContent() {
  const { data: inquiries, isLoading, isError } = useGetAllInquiries();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Loading inquiries...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load inquiries. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const sortedInquiries = [...(inquiries || [])].sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold mb-2">Customer Inquiries</h1>
            <p className="text-muted-foreground">
              {sortedInquiries.length} {sortedInquiries.length === 1 ? 'inquiry' : 'inquiries'} received
            </p>
          </div>

          {sortedInquiries.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">No inquiries yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {sortedInquiries.map((inquiry) => (
                <Card key={inquiry.id.toString()}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{inquiry.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Mail className="h-4 w-4" />
                          {inquiry.email}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        ID: {inquiry.id.toString()}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Message:</p>
                      <p className="whitespace-pre-wrap">{inquiry.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
