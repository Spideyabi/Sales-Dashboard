import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Sales Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive sales reporting and analytics platform built with atomic design principles. 
            Visualize your sales data with interactive charts, filters, and real-time insights.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8 py-4">
              View Dashboard
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Multiple Chart Types</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Switch between bar charts, line graphs, and pie charts for different data perspectives.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Growth Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Track year-over-year growth with trend indicators and percentage changes.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Customer Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Analyze customer data, order patterns, and average order values across time periods.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Revenue Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitor revenue trends with customizable filters and threshold settings.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Technology Stack */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Built with Modern Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">Next.js 15</h3>
                <p className="text-gray-600">React framework with App Router</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">TypeScript</h3>
                <p className="text-gray-600">Type-safe development</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Tailwind CSS</h3>
                <p className="text-gray-600">Utility-first styling</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Recharts</h3>
                <p className="text-gray-600">Interactive data visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Explore Your Sales Data?
          </h2>
          <p className="text-gray-600 mb-8">
            Start analyzing your sales performance with our interactive dashboard.
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}