import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { LandingPage } from './components/landing-page';
import { Dashboard } from './components/dashboard';
import { DeployFlow } from './components/deploy-flow';
import { Analytics } from './components/analytics';
import { Settings } from './components/settings';
import { Billing } from './components/billing';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ThemeProvider } from './components/theme-provider';

type Page = 'landing' | 'dashboard' | 'deploy' | 'analytics' | 'settings' | 'billing';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication check
  useEffect(() => {
    const auth = localStorage.getItem('dapplify-auth');
    setIsAuthenticated(!!auth);
  }, []);

  const handleAuth = () => {
    setIsAuthenticated(true);
    localStorage.setItem('dapplify-auth', 'true');
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('dapplify-auth');
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={handleAuth} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'deploy':
        return <DeployFlow onNavigate={setCurrentPage} />;
      case 'analytics':
        return <Analytics onNavigate={setCurrentPage} />;
      case 'settings':
        return <Settings onNavigate={setCurrentPage} />;
      case 'billing':
        return <Billing onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onGetStarted={handleAuth} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {isAuthenticated && (
          <Header 
            currentPage={currentPage} 
            onNavigate={setCurrentPage}
            onLogout={handleLogout}
          />
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={isAuthenticated ? 'pt-16' : ''}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
        
        {!isAuthenticated && <Footer />}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}