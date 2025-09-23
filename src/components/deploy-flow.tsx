import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import {
  Github,
  Gitlab,
  Folder,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Settings,
  Globe,
  Lock,
  Zap,
  Database,
  Code,
  Rocket
} from 'lucide-react';

interface DeployFlowProps {
  onNavigate: (page: string) => void;
}

export function DeployFlow({ onNavigate }: DeployFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRepo, setSelectedRepo] = useState('');
  const [deploymentConfig, setDeploymentConfig] = useState({
    framework: '',
    buildCommand: '',
    outputDirectory: '',
    environmentVars: {},
    customDomain: '',
    privateDeployment: false
  });
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);

  // Mock repositories data
  const repositories = [
    {
      id: 1,
      name: 'portfolio-website',
      description: 'Personal portfolio built with Next.js',
      language: 'TypeScript',
      stars: 42,
      framework: 'Next.js'
    },
    {
      id: 2,
      name: 'react-dashboard',
      description: 'Modern dashboard with React and Tailwind',
      language: 'JavaScript',
      stars: 128,
      framework: 'React'
    },
    {
      id: 3,
      name: 'blog-platform',
      description: 'Minimalist blog with Remix',
      language: 'TypeScript',
      stars: 67,
      framework: 'Remix'
    }
  ];

  const frameworks = [
    { value: 'nextjs', label: 'Next.js', buildCmd: 'npm run build', outputDir: 'out' },
    { value: 'react', label: 'React', buildCmd: 'npm run build', outputDir: 'build' },
    { value: 'vue', label: 'Vue.js', buildCmd: 'npm run build', outputDir: 'dist' },
    { value: 'remix', label: 'Remix', buildCmd: 'npm run build', outputDir: 'build' },
    { value: 'svelte', label: 'SvelteKit', buildCmd: 'npm run build', outputDir: 'build' }
  ];

  const handleFrameworkSelect = (framework: string) => {
    const selected = frameworks.find(f => f.value === framework);
    if (selected) {
      setDeploymentConfig(prev => ({
        ...prev,
        framework,
        buildCommand: selected.buildCmd,
        outputDirectory: selected.outputDir
      }));
    }
  };

  const startDeployment = async () => {
    setIsDeploying(true);
    setCurrentStep(4);
    
    // Simulate deployment progress
    const steps = [
      { progress: 10, message: 'Cloning repository...' },
      { progress: 25, message: 'Installing dependencies...' },
      { progress: 50, message: 'Building application...' },
      { progress: 75, message: 'Uploading to IPFS...' },
      { progress: 90, message: 'Pinning to Filecoin...' },
      { progress: 100, message: 'Deployment complete!' }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDeployProgress(step.progress);
    }

    setTimeout(() => {
      setCurrentStep(5);
      setIsDeploying(false);
    }, 1000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Import Git Repository</h2>
              <p className="text-muted-foreground">
                Connect your GitHub, GitLab, or upload files directly
              </p>
            </div>

            <Tabs defaultValue="github" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="github" className="flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </TabsTrigger>
                <TabsTrigger value="gitlab" className="flex items-center space-x-2">
                  <Gitlab className="w-4 h-4" />
                  <span>GitLab</span>
                </TabsTrigger>
                <TabsTrigger value="upload" className="flex items-center space-x-2">
                  <Folder className="w-4 h-4" />
                  <span>Upload</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="github" className="space-y-4">
                <div className="space-y-4">
                  {repositories.map((repo) => (
                    <motion.div
                      key={repo.id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedRepo === repo.name 
                          ? 'border-primary bg-primary/5' 
                          : 'hover:border-accent'
                      }`}
                      onClick={() => setSelectedRepo(repo.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{repo.name}</h3>
                          <p className="text-sm text-muted-foreground">{repo.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="secondary">{repo.language}</Badge>
                            <Badge variant="outline">{repo.framework}</Badge>
                            <span className="text-sm text-muted-foreground">⭐ {repo.stars}</span>
                          </div>
                        </div>
                        {selectedRepo === repo.name && (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gitlab" className="text-center py-8">
                <div className="space-y-4">
                  <Gitlab className="w-16 h-16 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Connect your GitLab account to import repositories</p>
                  <Button variant="outline">
                    <Gitlab className="mr-2 w-4 h-4" />
                    Connect GitLab
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="upload" className="text-center py-8">
                <div className="space-y-4">
                  <Folder className="w-16 h-16 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Upload your project files directly</p>
                  <Button variant="outline">
                    <Folder className="mr-2 w-4 h-4" />
                    Choose Files
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <Button 
              className="w-full" 
              disabled={!selectedRepo}
              onClick={() => setCurrentStep(2)}
            >
              Continue
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Configure Project</h2>
              <p className="text-muted-foreground">
                Set up build settings and deployment options
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="framework">Framework Preset</Label>
                <Select value={deploymentConfig.framework} onValueChange={handleFrameworkSelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    {frameworks.map((framework) => (
                      <SelectItem key={framework.value} value={framework.value}>
                        {framework.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="buildCommand">Build Command</Label>
                <Input
                  id="buildCommand"
                  value={deploymentConfig.buildCommand}
                  onChange={(e) => setDeploymentConfig(prev => ({ 
                    ...prev, 
                    buildCommand: e.target.value 
                  }))}
                  placeholder="npm run build"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="outputDirectory">Output Directory</Label>
                <Input
                  id="outputDirectory"
                  value={deploymentConfig.outputDirectory}
                  onChange={(e) => setDeploymentConfig(prev => ({ 
                    ...prev, 
                    outputDirectory: e.target.value 
                  }))}
                  placeholder="dist"
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Advanced Options</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="customDomain">Custom Domain</Label>
                  <Input
                    id="customDomain"
                    value={deploymentConfig.customDomain}
                    onChange={(e) => setDeploymentConfig(prev => ({ 
                      ...prev, 
                      customDomain: e.target.value 
                    }))}
                    placeholder="myapp.com"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Private Deployment</Label>
                    <p className="text-sm text-muted-foreground">
                      Encrypt deployment and require authentication
                    </p>
                  </div>
                  <Switch
                    checked={deploymentConfig.privateDeployment}
                    onCheckedChange={(checked) => setDeploymentConfig(prev => ({ 
                      ...prev, 
                      privateDeployment: checked 
                    }))}
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setCurrentStep(1)}>
                Back
              </Button>
              <Button 
                className="flex-1" 
                onClick={() => setCurrentStep(3)}
                disabled={!deploymentConfig.framework}
              >
                Continue
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Review Deployment</h2>
              <p className="text-muted-foreground">
                Confirm your settings before deploying
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Project Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">Repository</Label>
                    <p className="font-medium">{selectedRepo}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Framework</Label>
                    <p className="font-medium">{deploymentConfig.framework}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Build Command</Label>
                    <p className="font-medium font-mono text-sm">{deploymentConfig.buildCommand}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Output Directory</Label>
                    <p className="font-medium font-mono text-sm">{deploymentConfig.outputDirectory}</p>
                  </div>
                </div>
                
                {deploymentConfig.customDomain && (
                  <div>
                    <Label className="text-sm text-muted-foreground">Custom Domain</Label>
                    <p className="font-medium">{deploymentConfig.customDomain}</p>
                  </div>
                )}
                
                {deploymentConfig.privateDeployment && (
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Private deployment enabled</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="w-5 h-5" />
                  <span>Infrastructure</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>IPFS Pinning</span>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Filecoin Storage</span>
                  <Badge className="bg-blue-100 text-blue-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Global CDN</span>
                  <Badge className="bg-purple-100 text-purple-800">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>HTTPS Certificate</span>
                  <Badge className="bg-green-100 text-green-800">Auto</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setCurrentStep(2)}>
                Back
              </Button>
              <Button className="flex-1" onClick={startDeployment}>
                <Rocket className="mr-2 w-4 h-4" />
                Deploy Project
              </Button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold">Deploying Your Project</h2>
              <p className="text-muted-foreground">
                Building and deploying to decentralized infrastructure
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Deployment Progress</span>
                    <span className="text-sm text-muted-foreground">{deployProgress}%</span>
                  </div>
                  <Progress value={deployProgress} className="h-3" />
                  
                  <div className="space-y-2 text-sm">
                    {deployProgress >= 10 && (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Repository cloned</span>
                      </div>
                    )}
                    {deployProgress >= 25 && (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Dependencies installed</span>
                      </div>
                    )}
                    {deployProgress >= 50 && (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Application built successfully</span>
                      </div>
                    )}
                    {deployProgress >= 75 && (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Uploaded to IPFS</span>
                      </div>
                    )}
                    {deployProgress >= 90 && (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Pinned to Filecoin</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold">Deployment Successful!</h2>
              <p className="text-muted-foreground">
                Your application is now live on the decentralized web
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Deployment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Live URL</Label>
                  <div className="flex items-center space-x-2">
                    <Input 
                      value={`https://${selectedRepo}.shaas.io`} 
                      readOnly 
                      className="font-mono"
                    />
                    <Button variant="outline" size="sm">
                      <Globe className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">IPFS Hash</Label>
                    <p className="font-mono text-sm">QmX7Y8Z9...</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Build Time</Label>
                    <p className="text-sm">45s</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => onNavigate('dashboard')}>
                Go to Dashboard
              </Button>
              <Button onClick={() => {
                setCurrentStep(1);
                setSelectedRepo('');
                setDeployProgress(0);
              }}>
                Deploy Another Project
              </Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-border" />
          <div 
            className="absolute top-4 left-0 h-0.5 bg-primary transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          />
          
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                step <= currentStep
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background border-2 border-border text-muted-foreground'
              }`}
            >
              {step < currentStep ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <span className="text-sm font-medium">{step}</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">Import</span>
          <span className="text-xs text-muted-foreground">Configure</span>
          <span className="text-xs text-muted-foreground">Review</span>
          <span className="text-xs text-muted-foreground">Deploy</span>
          <span className="text-xs text-muted-foreground">Complete</span>
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <Card key={currentStep} className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            {renderStepContent()}
          </CardContent>
        </Card>
      </AnimatePresence>
    </div>
  );
}