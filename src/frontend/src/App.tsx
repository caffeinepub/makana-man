import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import PacketsPage from './pages/PacketsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminInquiriesPage from './pages/admin/AdminInquiriesPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const packetsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/packets',
  component: PacketsPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/inquiries',
  component: AdminInquiriesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  packetsRoute,
  aboutRoute,
  contactRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
