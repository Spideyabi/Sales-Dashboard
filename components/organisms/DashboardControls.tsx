'use client';

import { YearSelector } from '@/components/molecules/YearSelector';
import { FilterInput } from '@/components/molecules/FilterInput';
import { ChartTypeToggle, ChartType } from '@/components/atoms/ChartTypeToggle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';

interface DashboardControlsProps {
  availableYears: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
  filterThreshold: number;
  onFilterChange: (threshold: number) => void;
}

export function DashboardControls({
  availableYears,
  selectedYear,
  onYearChange,
  chartType,
  onChartTypeChange,
  filterThreshold,
  onFilterChange,
}: DashboardControlsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <YearSelector
        availableYears={availableYears}
        selectedYear={selectedYear}
        onYearChange={onYearChange}
      />
      
      <FilterInput
        currentThreshold={filterThreshold}
        onFilterChange={onFilterChange}
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Chart Type</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartTypeToggle
            currentType={chartType}
            onTypeChange={onChartTypeChange}
          />
        </CardContent>
      </Card>
    </div>
  );
}