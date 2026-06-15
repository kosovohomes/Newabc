import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AdminProvider } from "./contexts/AdminContext";
import Home from "./pages/Home";
import NamesCarouselPage from "./pages/NamesCarouselPage";
import Auth from "./pages/Auth";
import Header from "./components/Header";
import AdminDashboard from "./pages/AdminDashboard";
import AdminShowcase from "./pages/AdminShowcase";
import { ProtectedAdminRoute } from "./components/ProtectedAdminRoute";
import "./lib/i18n";
import { useVisitorTracker } from "./hooks/useVisitorTracker";

function Router() {
  useVisitorTracker();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/carousel"} component={NamesCarouselPage} />
          <Route path={"/login"}>
            <Auth mode="login" />
          </Route>
          <Route path={"/signup"}>
            <Auth mode="signup" />
          </Route>
          <Route path={"/admin"}>
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          </Route>
          <Route path={"/admin-showcase"} component={AdminShowcase} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <AdminProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </AdminProvider>
    </ErrorBoundary>
  );
}

export default App;
