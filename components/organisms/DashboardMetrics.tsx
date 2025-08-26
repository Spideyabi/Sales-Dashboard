'use client';

import { MetricCard } from '@/components/atoms/MetricCard';
import { YearlySummary } from '@/lib/sales-data';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

interface DashboardMetricsProps {
  summary: YearlySummary;
  previousSummary?: YearlySummary;
}

export function DashboardMetrics({ summary, previousSummary }: DashboardMetricsProps) {
  const calculateTrend = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return {
      value: change,
      isPositive: change > 0,
    };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Revenue"
        value={summary.totalRevenue}
        icon={DollarSign}
        trend={previousSummary ? calculateTrend(summary.totalRevenue, previousSummary.totalRevenue) : undefined}
      />
      <MetricCard
        title="Total Orders"
        value={summary.totalOrders.toLocaleString()}
        icon={ShoppingCart}
        trend={previousSummary ? calculateTrend(summary.totalOrders, previousSummary.totalOrders) : undefined}
      />
      <MetricCard
        title="Total Customers"
        value={summary.totalCustomers.toLocaleString()}
        icon={Users}
        trend={previousSummary ? calculateTrend(summary.totalCustomers, previousSummary.totalCustomers) : undefined}
      />
      <MetricCard
        title="Avg Order Value"
        value={`$${summary.avgOrderValue.toFixed(2)}`}
        icon={TrendingUp}
        trend={previousSummary ? calculateTrend(summary.avgOrderValue, previousSummary.avgOrderValue) : undefined}
      />
    </div>
  );
}