import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Globe,
  Clock,
  Database,
  Activity,
  Zap,
  Shield,
  MapPin
} from 'lucide-react';

interface AnalyticsProps {
  onNavigate: (page: string) => void;
}

export function Analytics({ onNavigate }: AnalyticsProps) {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedProject, setSelectedProject] = useState('all');

  // Mock analytics data
  const trafficData = [
    { date: '2024-01-01', visitors: 1200, pageViews: 3400, bandwidth: 45 },
    { date: '2024-01-02', visitors: 1350, pageViews: 3800, bandwidth: 52 },
    { date: '2024-01-03', visitors: 1100, pageViews: 3100, bandwidth: 38 },
    { date: '2024-01-04', visitors: 1450, pageViews: 4200, bandwidth: 58 },
    { date: '2024-01-05', visitors: 1600, pageViews: 4800, bandwidth: 65 },
    { date: '2024-01-06', visitors: 1300, pageViews: 3900, bandwidth: 48 },
    { date: '2024-01-07', visitors: 1250, pageViews: 3600, bandwidth: 44 }
  ];

  const performanceData = [
    { time: '00:00', latency: 120, cacheHit: 85, uptime: 99.9 },
    { time: '04:00', latency: 115, cacheHit: 88, uptime: 99.9 },
    { time: '08:00', latency: 135, cacheHit: 82, uptime: 99.8 },
    { time: '12:00', latency: 145, cacheHit: 79, uptime: 99.9 },
    { time: '16:00', latency: 125, cacheHit: 86, uptime: 99.9 },
    { time: '20:00', latency: 110, cacheHit: 91, uptime: 99.9 }
  ];

  const geographicData = [
    { region: 'North America', value: 45, visitors: 5400 },
    { region: 'Europe', value: 30, visitors: 3600 },
    { region: 'Asia', value: 20, visitors: 2400 },
    { region: 'Others', value: 5, visitors: 600 }
  ];

  const nodeStatusData = [
    { node: 'IPFS-US-East', status: 'online', latency: 45, requests: 12500 },
    { node: 'IPFS-EU-West', status: 'online', latency: 52, requests: 8900 },
    { node: 'IPFS-Asia-Pacific', status: 'online', latency: 78, requests: 6700 },
    { node: 'Filecoin-Primary', status: 'online', latency: 120, requests: 3400 },
    { node: 'Arweave-Backup', status: 'degraded', latency: 180, requests: 1200 }
  ];

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  const stats = [
    {
      title: 'Total Visitors',
      value: '12.4K',
      change: '+12.5%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Page Views',
      value: '34.2K',
      change: '+8.2%',
      trend: 'up',
      icon: Globe
    },
    {
      title: 'Avg. Latency',
      value: '125ms',
      change: '-5.2%',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Cache Hit Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Zap
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Monitor performance and usage across your deployments</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="portfolio">Portfolio Website</SelectItem>
              <SelectItem value="ecommerce">E-commerce App</SelectItem>
              <SelectItem value="blog">Blog Platform</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center space-x-1 text-xs">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-green-500" />
                    )}
                    <span className="text-green-500">{stat.change}</span>
                    <span className="text-muted-foreground">from last {timeRange}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Main Analytics */}
      <Tabs defaultValue="traffic" className="space-y-6">
        <TabsList>
          <TabsTrigger value="traffic">Traffic & Usage</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="geographic">Geographic</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Visitors Over Time</CardTitle>
                <CardDescription>Daily unique visitors and page views</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="visitors" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="pageViews" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bandwidth Usage</CardTitle>
                <CardDescription>Daily bandwidth consumption (GB)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="bandwidth" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Direct</span>
                    <span className="font-medium">45.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Search Engines</span>
                    <span className="font-medium">28.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Social Media</span>
                    <span className="font-medium">16.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Referrals</span>
                    <span className="font-medium">9.3%</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Chrome</span>
                    <span className="font-medium">65.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Safari</span>
                    <span className="font-medium">20.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Firefox</span>
                    <span className="font-medium">10.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Edge</span>
                    <span className="font-medium">4.3%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
                <CardDescription>Average latency across all requests</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="latency" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cache Performance</CardTitle>
                <CardDescription>Cache hit rate and uptime metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="cacheHit" stroke="#10b981" strokeWidth={2} />
                    <Line type="monotone" dataKey="uptime" stroke="#f59e0b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Detailed performance breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Time to First Byte</span>
                    <span className="font-medium">45ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>First Contentful Paint</span>
                    <span className="font-medium">1.2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Largest Contentful Paint</span>
                    <span className="font-medium">2.1s</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total Blocking Time</span>
                    <span className="font-medium">85ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumulative Layout Shift</span>
                    <span className="font-medium">0.05</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Speed Index</span>
                    <span className="font-medium">1.8s</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cache Hit Ratio</span>
                    <span className="font-medium">94.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Edge Response Time</span>
                    <span className="font-medium">12ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Origin Response Time</span>
                    <span className="font-medium">125ms</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="geographic" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Visitors by Region</CardTitle>
                <CardDescription>Geographic distribution of your users</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={geographicData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ region, value }) => `${region}: ${value}%`}
                    >
                      {geographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Countries</CardTitle>
                <CardDescription>Most active countries by visitor count</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { country: 'United States', visitors: '3,420', flag: '🇺🇸' },
                    { country: 'Germany', visitors: '1,890', flag: '🇩🇪' },
                    { country: 'United Kingdom', visitors: '1,240', flag: '🇬🇧' },
                    { country: 'France', visitors: '980', flag: '🇫🇷' },
                    { country: 'Canada', visitors: '670', flag: '🇨🇦' }
                  ].map((country, index) => (
                    <div key={country.country} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{country.flag}</span>
                        <span>{country.country}</span>
                      </div>
                      <span className="font-medium">{country.visitors}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="infrastructure" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Node Status</CardTitle>
              <CardDescription>Health and performance of decentralized infrastructure nodes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nodeStatusData.map((node, index) => (
                  <motion.div
                    key={node.node}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        node.status === 'online' ? 'bg-green-500' : 
                        node.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                      <div>
                        <h3 className="font-medium">{node.node}</h3>
                        <p className="text-sm text-muted-foreground">
                          {node.requests.toLocaleString()} requests
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="text-right">
                        <div className="font-medium">{node.latency}ms</div>
                        <div className="text-muted-foreground">latency</div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        node.status === 'online' ? 'bg-green-100 text-green-800' :
                        node.status === 'degraded' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {node.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Storage Distribution</CardTitle>
                <CardDescription>Data distribution across storage networks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>IPFS Nodes</span>
                    <span className="font-medium">85.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Filecoin Network</span>
                    <span className="font-medium">12.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Arweave Backup</span>
                    <span className="font-medium">2.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Network Health</CardTitle>
                <CardDescription>Overall network performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Active Nodes</span>
                    <span className="font-medium">247 / 250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Data Replication</span>
                    <span className="font-medium">3.2x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Network Uptime</span>
                    <span className="font-medium">99.98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}