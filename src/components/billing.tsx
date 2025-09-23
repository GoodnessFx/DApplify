import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import {
  CreditCard,
  Download,
  Calendar,
  DollarSign,
  TrendingUp,
  Database,
  Zap,
  Users,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface BillingProps {
  onNavigate: (page: string) => void;
}

export function Billing({ onNavigate }: BillingProps) {
  const [currentPlan, setCurrentPlan] = useState('pro');

  // Mock billing data
  const currentUsage = {
    storage: { used: 67, limit: 100, unit: 'GB' },
    bandwidth: { used: 2.3, limit: 5, unit: 'TB' },
    deployments: { used: 24, limit: -1, unit: 'deployments' },
    requests: { used: 145000, limit: 1000000, unit: 'requests' }
  };

  const invoices = [
    {
      id: 'INV-2024-001',
      date: '2024-01-01',
      amount: 29.00,
      status: 'paid',
      period: 'Dec 2023'
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-01',
      amount: 29.00,
      status: 'paid',
      period: 'Nov 2023'
    },
    {
      id: 'INV-2023-011',
      date: '2023-11-01',
      amount: 29.00,
      status: 'paid',
      period: 'Oct 2023'
    },
    {
      id: 'INV-2023-010',
      date: '2023-10-01',
      amount: 0.00,
      status: 'paid',
      period: 'Sep 2023'
    }
  ];

  const usageHistory = [
    { month: 'Jan 2024', storage: 67, bandwidth: 2.3, cost: 29.00 },
    { month: 'Dec 2023', storage: 58, bandwidth: 1.9, cost: 29.00 },
    { month: 'Nov 2023', storage: 45, bandwidth: 1.6, cost: 29.00 },
    { month: 'Oct 2023', storage: 32, bandwidth: 1.2, cost: 0.00 },
    { month: 'Sep 2023', storage: 28, bandwidth: 0.8, cost: 0.00 }
  ];

  const plans = [
    {
      name: 'Hobby',
      price: 0,
      description: 'Perfect for personal projects',
      features: [
        '10 deployments/month',
        '1GB storage',
        '10GB bandwidth',
        'Community support',
        'Basic analytics'
      ],
      limits: {
        storage: 1,
        bandwidth: 0.01,
        deployments: 10
      }
    },
    {
      name: 'Pro',
      price: 29,
      description: 'For growing teams and businesses',
      features: [
        'Unlimited deployments',
        '100GB storage',
        '1TB bandwidth',
        'Custom domains',
        'Priority support',
        'Advanced analytics',
        'Team collaboration'
      ],
      limits: {
        storage: 100,
        bandwidth: 1,
        deployments: -1
      },
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        '1TB+ storage',
        '10TB+ bandwidth',
        'Dedicated nodes',
        'SLA guarantee',
        'Team management',
        '24/7 support',
        'Custom integrations'
      ],
      limits: {
        storage: 1000,
        bandwidth: 10,
        deployments: -1
      }
    }
  ];

  const formatUsage = (usage: any) => {
    if (usage.limit === -1) {
      return `${usage.used.toLocaleString()} ${usage.unit}`;
    }
    return `${usage.used.toLocaleString()} / ${usage.limit.toLocaleString()} ${usage.unit}`;
  };

  const getUsagePercentage = (usage: any) => {
    if (usage.limit === -1) return 0;
    return (usage.used / usage.limit) * 100;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Billing & Usage</h1>
          <p className="text-muted-foreground">Manage your subscription and monitor usage</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <Download className="mr-2 w-4 h-4" />
            Download Invoice
          </Button>
          <Button>
            <CreditCard className="mr-2 w-4 h-4" />
            Update Payment
          </Button>
        </div>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <span>Current Plan: Pro</span>
                <Badge className="bg-blue-100 text-blue-800">Active</Badge>
              </CardTitle>
              <CardDescription>
                Next billing date: February 1, 2024 ($29.00)
              </CardDescription>
            </div>
            <Button variant="outline">Change Plan</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(currentUsage).map(([key, usage]) => {
              const percentage = getUsagePercentage(usage);
              const isOverLimit = percentage > 80;
              
              return (
                <motion.div
                  key={key}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium capitalize">{key}</span>
                    {isOverLimit && usage.limit !== -1 && (
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>
                  <div className="text-lg font-bold">{formatUsage(usage)}</div>
                  {usage.limit !== -1 && (
                    <Progress 
                      value={percentage} 
                      className={`h-2 ${isOverLimit ? 'bg-yellow-100' : ''}`}
                    />
                  )}
                  <div className="text-xs text-muted-foreground">
                    {usage.limit === -1 ? 'Unlimited' : `${percentage.toFixed(1)}% used`}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Billing Tabs */}
      <Tabs defaultValue="usage" className="space-y-6">
        <TabsList>
          <TabsTrigger value="usage">Usage Details</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="plans">Plans & Pricing</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage Trends</CardTitle>
                <CardDescription>Monthly usage and costs over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {usageHistory.map((month, index) => (
                    <motion.div
                      key={month.month}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center p-3 border rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{month.month}</div>
                        <div className="text-sm text-muted-foreground">
                          {month.storage}GB storage • {month.bandwidth}TB bandwidth
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${month.cost.toFixed(2)}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
                <CardDescription>Current month charges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Pro Plan Subscription</span>
                    <span className="font-medium">$29.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overage Charges</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional Storage</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional Bandwidth</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total (Next Bill)</span>
                    <span>$29.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Resource Usage by Project</CardTitle>
              <CardDescription>Breakdown of usage across your deployments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Storage</TableHead>
                    <TableHead>Bandwidth</TableHead>
                    <TableHead>Requests</TableHead>
                    <TableHead>Est. Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">portfolio-website</TableCell>
                    <TableCell>24 GB</TableCell>
                    <TableCell>0.8 TB</TableCell>
                    <TableCell>45,000</TableCell>
                    <TableCell>$12.30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ecommerce-app</TableCell>
                    <TableCell>32 GB</TableCell>
                    <TableCell>1.2 TB</TableCell>
                    <TableCell>78,000</TableCell>
                    <TableCell>$14.20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">blog-platform</TableCell>
                    <TableCell>11 GB</TableCell>
                    <TableCell>0.3 TB</TableCell>
                    <TableCell>22,000</TableCell>
                    <TableCell>$2.50</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoice History</CardTitle>
              <CardDescription>Your past billing statements and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.period}</TableCell>
                      <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Current Plan</Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">
                      ${plan.price}
                      <span className="text-lg text-muted-foreground">/month</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? 'default' : 'outline'}
                      disabled={plan.popular}
                    >
                      {plan.popular ? 'Current Plan' : 'Upgrade'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your billing payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-6 h-6" />
                      <div>
                        <div className="font-medium">•••• •••• •••• 4242</div>
                        <div className="text-sm text-muted-foreground">Expires 12/25</div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Primary</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
                <CardDescription>Update your billing information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>John Doe</div>
                  <div>123 Main Street</div>
                  <div>San Francisco, CA 94105</div>
                  <div>United States</div>
                </div>
                <Button variant="outline" className="mt-4">
                  Update Address
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}