'use client';

import { Button } from '@/components/ui/button';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

export type ChartType = 'bar' | 'line' | 'pie';

interface ChartTypeToggleProps {
  currentType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export function ChartTypeToggle({ currentType, onTypeChange }: ChartTypeToggleProps) {
  const chartTypes: { type: ChartType; icon: typeof BarChart3; label: string }[] = [
    { type: 'bar', icon: BarChart3, label: 'Bar Chart' },
    { type: 'line', icon: LineChart, label: 'Line Chart' },
    { type: 'pie', icon: PieChart, label: 'Pie Chart' },
  ];

  return (
    <div className="flex space-x-2">
      {chartTypes.map(({ type, icon: Icon, label }) => (
        <Button
          key={type}
          variant={currentType === type ? 'default' : 'outline'}
          size="sm"
          onClick={() => onTypeChange(type)}
          className="flex items-center space-x-2"
        >
          <Icon className="h-4 w-4" />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      ))}
    </div>
  );
}