// Mock sales data based on realistic patterns
export interface SalesData {
  year: number;
  month: string;
  revenue: number;
  orders: number;
  customers: number;
  avgOrderValue: number;
}

export interface YearlySummary {
  year: number;
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  avgOrderValue: number;
  growthRate: number;
}

// Generate realistic sales data
export const salesData: SalesData[] = [
  // 2022 Data
  { year: 2022, month: 'Jan', revenue: 125000, orders: 890, customers: 650, avgOrderValue: 140.45 },
  { year: 2022, month: 'Feb', revenue: 132000, orders: 920, customers: 680, avgOrderValue: 143.48 },
  { year: 2022, month: 'Mar', revenue: 148000, orders: 1050, customers: 750, avgOrderValue: 140.95 },
  { year: 2022, month: 'Apr', revenue: 156000, orders: 1100, customers: 800, avgOrderValue: 141.82 },
  { year: 2022, month: 'May', revenue: 172000, orders: 1200, customers: 850, avgOrderValue: 143.33 },
  { year: 2022, month: 'Jun', revenue: 189000, orders: 1350, customers: 950, avgOrderValue: 140.00 },
  { year: 2022, month: 'Jul', revenue: 198000, orders: 1400, customers: 1000, avgOrderValue: 141.43 },
  { year: 2022, month: 'Aug', revenue: 185000, orders: 1320, customers: 940, avgOrderValue: 140.15 },
  { year: 2022, month: 'Sep', revenue: 167000, orders: 1180, customers: 850, avgOrderValue: 141.53 },
  { year: 2022, month: 'Oct', revenue: 178000, orders: 1250, customers: 900, avgOrderValue: 142.40 },
  { year: 2022, month: 'Nov', revenue: 245000, orders: 1750, customers: 1200, avgOrderValue: 140.00 },
  { year: 2022, month: 'Dec', revenue: 285000, orders: 2000, customers: 1400, avgOrderValue: 142.50 },

  // 2023 Data (showing growth)
  { year: 2023, month: 'Jan', revenue: 145000, orders: 980, customers: 720, avgOrderValue: 147.96 },
  { year: 2023, month: 'Feb', revenue: 158000, orders: 1100, customers: 800, avgOrderValue: 143.64 },
  { year: 2023, month: 'Mar', revenue: 178000, orders: 1250, customers: 900, avgOrderValue: 142.40 },
  { year: 2023, month: 'Apr', revenue: 195000, orders: 1350, customers: 950, avgOrderValue: 144.44 },
  { year: 2023, month: 'May', revenue: 212000, orders: 1480, customers: 1050, avgOrderValue: 143.24 },
  { year: 2023, month: 'Jun', revenue: 235000, orders: 1650, customers: 1150, avgOrderValue: 142.42 },
  { year: 2023, month: 'Jul', revenue: 248000, orders: 1750, customers: 1200, avgOrderValue: 141.71 },
  { year: 2023, month: 'Aug', revenue: 225000, orders: 1580, customers: 1100, avgOrderValue: 142.41 },
  { year: 2023, month: 'Sep', revenue: 198000, orders: 1400, customers: 980, avgOrderValue: 141.43 },
  { year: 2023, month: 'Oct', revenue: 218000, orders: 1520, customers: 1050, avgOrderValue: 143.42 },
  { year: 2023, month: 'Nov', revenue: 295000, orders: 2100, customers: 1450, avgOrderValue: 140.48 },
  { year: 2023, month: 'Dec', revenue: 345000, orders: 2400, customers: 1650, avgOrderValue: 143.75 },

  // 2024 Data (continued growth)
  { year: 2024, month: 'Jan', revenue: 165000, orders: 1150, customers: 850, avgOrderValue: 143.48 },
  { year: 2024, month: 'Feb', revenue: 182000, orders: 1280, customers: 920, avgOrderValue: 142.19 },
  { year: 2024, month: 'Mar', revenue: 208000, orders: 1450, customers: 1050, avgOrderValue: 143.45 },
  { year: 2024, month: 'Apr', revenue: 225000, orders: 1580, customers: 1150, avgOrderValue: 142.41 },
  { year: 2024, month: 'May', revenue: 248000, orders: 1720, customers: 1250, avgOrderValue: 144.19 },
  { year: 2024, month: 'Jun', revenue: 275000, orders: 1900, customers: 1350, avgOrderValue: 144.74 },
  { year: 2024, month: 'Jul', revenue: 292000, orders: 2050, customers: 1450, avgOrderValue: 142.44 },
  { year: 2024, month: 'Aug', revenue: 268000, orders: 1850, customers: 1300, avgOrderValue: 144.86 },
  { year: 2024, month: 'Sep', revenue: 235000, orders: 1650, customers: 1150, avgOrderValue: 142.42 },
  { year: 2024, month: 'Oct', revenue: 258000, orders: 1800, customers: 1250, avgOrderValue: 143.33 },
  { year: 2024, month: 'Nov', revenue: 345000, orders: 2450, customers: 1700, avgOrderValue: 140.82 },
  { year: 2024, month: 'Dec', revenue: 398000, orders: 2750, customers: 1900, avgOrderValue: 144.73 },
];

// Calculate yearly summaries
export const yearlySummaries: YearlySummary[] = [
  {
    year: 2022,
    totalRevenue: 2180000,
    totalOrders: 15410,
    totalCustomers: 11970,
    avgOrderValue: 141.47,
    growthRate: 0
  },
  {
    year: 2023,
    totalRevenue: 2652000,
    totalOrders: 18580,
    totalCustomers: 13600,
    avgOrderValue: 142.73,
    growthRate: 21.65
  },
  {
    year: 2024,
    totalRevenue: 3099000,
    totalOrders: 21625,
    totalCustomers: 15370,
    avgOrderValue: 143.33,
    growthRate: 16.85
  }
];

// Utility functions
export const getSalesDataByYear = (year: number): SalesData[] => {
  return salesData.filter(data => data.year === year);
};

export const getYearlySummary = (year: number): YearlySummary | undefined => {
  return yearlySummaries.find(summary => summary.year === year);
};

export const getFilteredData = (threshold: number): SalesData[] => {
  return salesData.filter(data => data.revenue >= threshold);
};

export const getAvailableYears = (): number[] => {
  return [...new Set(salesData.map(data => data.year))].sort((a, b) => b - a);
};