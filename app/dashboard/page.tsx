'use client';

import { useState, useMemo } from 'react';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { DashboardMetrics } from '@/components/organisms/DashboardMetrics';
import { DashboardControls } from '@/components/organisms/DashboardControls';
import { RevenueChart } from '@/components/molecules/RevenueChart';
import { ChartType } from '@/components/atoms/ChartTypeToggle';
import {
  getSalesDataByYear,
  getYearlySummary,
  getFilteredData,
  getAvailableYears,
  yearlySummaries,
} from '@/lib/sales-data';

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [filterThreshold, setFilterThreshold] = useState<number>(0);

  const availableYears = getAvailableYears();

  // Get filtered data based on current selections
  const filteredData = useMemo(() => {
    const yearData = getSalesDataByYear(selectedYear);
    return filterThreshold > 0 
      ? yearData.filter(data => data.revenue >= filterThreshold)
      : yearData;
  }, [selectedYear, filterThreshold]);

  // Get summary data for metrics
  const currentSummary = getYearlySummary(selectedYear);
  const previousSummary = getYearlySummary(selectedYear - 1);

  // Get all filtered data for comparison chart
  const allFilteredData = useMemo(() => {
    return filterThreshold > 0 ? getFilteredData(filterThreshold) : [];
  }, [filterThreshold]);

  return (
    <DashboardLayout>
      {/* Metrics Section */}
      {currentSummary && (
        <DashboardMetrics 
          summary={currentSummary} 
          previousSummary={previousSummary}
        />
      )}

      {/* Controls Section */}
      <DashboardControls
        availableYears={availableYears}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        chartType={chartType}
        onChartTypeChange={setChartType}
        filterThreshold={filterThreshold}
        onFilterChange={setFilterThreshold}
      />

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-8">
        <RevenueChart
          data={filteredData}
          chartType={chartType}
          title={`${selectedYear} Sales Revenue ${filterThreshold > 0 ? `(Min: $${filterThreshold.toLocaleString()})` : ''}`}
        />

        {/* Show comparison chart when filter is applied */}
        {filterThreshold > 0 && allFilteredData.length > 0 && (
          <RevenueChart
            data={allFilteredData}
            chartType={chartType}
            title={`All Years - Sales Above $${filterThreshold.toLocaleString()}`}
          />
        )}

        {/* Yearly comparison chart */}
        <RevenueChart
          data={yearlySummaries.map(summary => ({
            year: summary.year,
            month: summary.year.toString(),
            revenue: summary.totalRevenue,
            orders: summary.totalOrders,
            customers: summary.totalCustomers,
            avgOrderValue: summary.avgOrderValue,
          }))}
          chartType={chartType}
          title="Yearly Revenue Comparison (2022-2024)"
        />
      </div>
    </DashboardLayout>
  );
}