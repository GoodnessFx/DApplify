import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useTheme } from './theme-provider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Zap,
  Shield,
  Globe,
  Code,
  Rocket,
  BarChart3,
  Lock,
  Layers,
  Sun,
  Moon,
  Github,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const { theme, toggleTheme } = useTheme();

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy in seconds with our optimized build pipeline and global CDN network.'
    },
    {
      icon: Shield,
      title: 'Decentralized & Secure',
      description: 'Your deployments are distributed across IPFS, Filecoin, and Arweave for maximum resilience.'
    },
    {
      icon: Globe,
      title: 'Global Edge Network',
      description: 'Ultra-low latency with smart caching and fallback to multiple nodes worldwide.'
    },
    {
      icon: Code,
      title: 'Developer First',
      description: 'Full SDK support for React, Next.js, and Remix with powerful CLI tools.'
    },
    {
      icon: Lock,
      title: 'Enterprise Ready',
      description: 'Private deployments, team management, and audit logs for enterprise security.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time monitoring with latency, bandwidth, and cache performance metrics.'
    }
  ];

  const pricing = [
    {
      name: 'Hobby',
      price: 'Free',
      description: 'Perfect for personal projects',
      features: [
        '10 deployments/month',
        '1GB storage',
        '10GB bandwidth',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'For growing teams',
      features: [
        'Unlimited deployments',
        '100GB storage',
        '1TB bandwidth',
        'Custom domains',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Dedicated nodes',
        'SLA guarantee',
        'Team management',
        '24/7 support'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl">DApplify</span>
              <Badge variant="secondary" className="ml-2">Beta</Badge>
            </motion.div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              <Button variant="outline" onClick={onGetStarted}>
                Sign In
              </Button>
              <Button onClick={onGetStarted}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Web3 Vercel
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl mx-auto">
                Deploy your web applications to a decentralized infrastructure with 
                the same ease as traditional platforms, but with unstoppable permanence.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-lg px-8 py-6" onClick={onGetStarted}>
                <Rocket className="mr-2 h-5 w-5" />
                Deploy Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16"
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXJrfGVufDF8fHx8MTc1ODYzNjY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="DApplify Dashboard Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose DApplify?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combine the best of traditional web hosting with the power of decentralized infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no vendor lock-in.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold mt-4">
                      {plan.price}
                      {plan.price !== 'Free' && plan.price !== 'Custom' && (
                        <span className="text-lg text-muted-foreground">/month</span>
                      )}
                    </div>
                    <CardDescription className="text-base mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    <Button 
                      className="w-full mt-6" 
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={onGetStarted}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-primary-foreground">
              Ready to Deploy to the Future?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of developers building unstoppable applications on our decentralized platform.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6"
              onClick={onGetStarted}
            >
              Start Your First Deployment
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>


    </div>
  );
}