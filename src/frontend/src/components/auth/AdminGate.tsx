import { ReactNode } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserRole } from '../../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AdminGateProps {
  children: ReactNode;
}

export default function AdminGate({ children }: AdminGateProps) {
  const { identity, login, loginStatus } = useInternetIdentity();
  const { data: userRole, isLoading: roleLoading } = useGetCallerUserRole();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  // Show loading state
  if (isLoggingIn || roleLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Authentication Required</AlertTitle>
            <AlertDescription>
              Please log in to access the admin area.
            </AlertDescription>
          </Alert>
          <div className="mt-6 flex justify-center">
            <Button onClick={login} size="lg">
              Log In
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Check if user is admin
  if (userRole !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Access Denied</AlertTitle>
            <AlertDescription>
              You do not have permission to access this area. Admin privileges are required.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  // User is authenticated and is admin
  return <>{children}</>;
}
