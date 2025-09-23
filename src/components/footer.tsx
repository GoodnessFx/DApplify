import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Globe,
  Shield,
  Zap,
  Code,
  Book,
  MessageCircle,
  Heart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'CLI Tools', href: '#' },
      { name: 'SDK', href: '#' }
    ],
    platform: [
      { name: 'IPFS Network', href: '#' },
      { name: 'Filecoin Storage', href: '#' },
      { name: 'Arweave Backup', href: '#' },
      { name: 'Edge CDN', href: '#' },
      { name: 'Status Page', href: '#' },
      { name: 'Uptime Monitor', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Examples', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Changelog', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@dapplify.com' }
  ];

  const features = [
    { icon: Zap, text: 'Lightning Fast Deployments' },
    { icon: Shield, text: 'Decentralized & Secure' },
    { icon: Globe, text: 'Global Edge Network' },
    { icon: Code, text: 'Developer First' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl">DApplify</span>
            </motion.div>
            
            <p className="text-muted-foreground max-w-sm">
              The decentralized deployment platform that combines the simplicity of Vercel 
              with the permanence of Web3 infrastructure.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-sm text-muted-foreground"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span>{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Platform</h4>
              <ul className="space-y-2">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 p-6 bg-muted/30 rounded-2xl">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates on new features, infrastructure improvements, and Web3 ecosystem news.
            </p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© {currentYear} DApplify. All rights reserved.</span>
            <div className="hidden md:flex items-center space-x-4">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-border">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the decentralized web</span>
            </div>
          </div>
        </div>

        {/* Mobile Legal Links */}
        <div className="md:hidden mt-4 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          {footerLinks.legal.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}