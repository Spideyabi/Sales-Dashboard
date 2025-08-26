'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter } from 'lucide-react';

interface FilterInputProps {
  onFilterChange: (threshold: number) => void;
  currentThreshold: number;
}

export function FilterInput({ onFilterChange, currentThreshold }: FilterInputProps) {
  const [threshold, setThreshold] = useState(currentThreshold.toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericThreshold = parseFloat(threshold);
    if (!isNaN(numericThreshold) && numericThreshold >= 0) {
      onFilterChange(numericThreshold);
    }
  };

  const presetValues = [0, 100000, 150000, 200000, 250000];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center space-x-2">
          <Filter className="h-5 w-5" />
          <span>Sales Filter</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="threshold">Minimum Sales Threshold ($)</Label>
            <Input
              id="threshold"
              type="number"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
              placeholder="Enter minimum sales amount"
              min="0"
              step="1000"
            />
          </div>
          <Button type="submit" className="w-full">
            Apply Filter
          </Button>
        </form>

        <div>
          <Label className="text-sm text-muted-foreground">Quick Presets:</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {presetValues.map((value) => (
              <Button
                key={value}
                variant="outline"
                size="sm"
                onClick={() => {
                  setThreshold(value.toString());
                  onFilterChange(value);
                }}
              >
                ${value.toLocaleString()}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}