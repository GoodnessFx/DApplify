# DApplify - The Web3 Vercel

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Deploy your web applications to decentralized infrastructure with the same ease as traditional platforms, but with unstoppable permanence.

## 🚀 Features

- **Lightning Fast Deployments** - Deploy in seconds with optimized build pipeline
- **Decentralized & Secure** - Distributed across IPFS, Filecoin, and Arweave
- **Global Edge Network** - Ultra-low latency with smart caching
- **Developer First** - Full SDK support for React, Next.js, and Remix
- **Enterprise Ready** - Private deployments, team management, audit logs
- **Advanced Analytics** - Real-time monitoring with performance metrics

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS v4
- **Animation**: Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Decentralized (IPFS, Filecoin, Arweave)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/dapplify/dapplify-platform.git
cd dapplify-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🏗️ Project Structure

```
dapplify/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── analytics.tsx    # Analytics dashboard
│   ├── billing.tsx      # Billing management
│   ├── dashboard.tsx    # Main dashboard
│   ├── deploy-flow.tsx  # Deployment flow
│   ├── footer.tsx       # Footer component
│   ├── header.tsx       # Header navigation
│   ├── landing-page.tsx # Landing page
│   └── settings.tsx     # Settings page
├── lib/                 # Utility functions
├── styles/              # Global styles
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.html          # HTML template
```

## 🎨 Design System

The application uses a comprehensive design system built with:
- **Tailwind CSS v4** for styling
- **CSS Custom Properties** for theming
- **Radix UI** for accessible components
- **shadcn/ui** for pre-built components
- **Dark/Light mode** support

## 🌐 Features Overview

### Landing Page
- Hero section with gradient text
- Feature showcase
- Pricing tiers
- Call-to-action sections

### Dashboard
- Project overview
- Deployment statistics
- Resource usage monitoring
- Quick actions

### Deploy Flow
- GitHub integration UI
- Step-by-step deployment
- Configuration options
- Real-time progress

### Analytics
- Traffic and usage metrics
- Performance monitoring
- Geographic distribution
- Infrastructure health

### Settings
- Profile management
- Security settings
- API key management
- Team collaboration

### Billing
- Usage tracking
- Invoice management
- Plan comparison
- Payment methods

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Traditional Hosting
The `dist` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3
- GitHub Pages

### Deploy to Decentralized Infrastructure
Use the DApplify platform itself to deploy to:
- IPFS nodes
- Filecoin network
- Arweave permanent storage

## 🔐 Environment Variables

Create a `.env.local` file for local development:

```env
VITE_API_URL=https://api.dapplify.com
VITE_IPFS_GATEWAY=https://gateway.dapplify.com
VITE_ANALYTICS_ID=your_analytics_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** with Tailwind plugin for formatting
- **TypeScript** for type safety
- **Conventional Commits** for commit messages

Run `npm run lint:fix` and `npm run format` before committing.

## 🐛 Known Issues

- Some animations may not work in older browsers
- Dark mode flash on initial load (FOUC)
- Chart responsiveness on very small screens

## 📚 Documentation

- [Component Documentation](./docs/components.md)
- [API Reference](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guide](./docs/contributing.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://radix-ui.com) for accessible components
- [shadcn/ui](https://ui.shadcn.com) for component patterns
- [Lucide](https://lucide.dev) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for utility-first CSS
- [Framer Motion](https://motion.dev) for smooth animations

## 📞 Support

- Documentation: [docs.dapplify.com](https://docs.dapplify.com)
- Community: [Discord](https://discord.gg/dapplify)
- Email: [support@dapplify.com](mailto:support@dapplify.com)
- Twitter: [@dapplify](https://twitter.com/dapplify)

---

Built with ❤️ for the decentralized web by the DApplify team.