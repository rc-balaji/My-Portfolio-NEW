import React from 'react';
import { Router, Route, Switch } from 'wouter';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import Home from '@/pages/Home.jsx';
import NotFound from '@/pages/not-found.jsx';
import CustomCursor from '@/components/CustomCursor.jsx';
import './index.css';

// Implement basic routing
function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppRouter />
          </main>
          <Footer />
          <CustomCursor />
          <Toaster />
        </div>
      </TooltipProvider>
    </Router>
  );
}

export default App;