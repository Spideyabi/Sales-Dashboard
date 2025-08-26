# Sales Dashboard Application

A comprehensive sales analytics dashboard built with **atomic design principles** using Next.js 15, TypeScript, and modern web technologies. This application provides interactive data visualization, filtering capabilities, and comprehensive sales reporting features.

## 🚀 Features

### Core Functionality
- **Multi-Year Sales Data**: View sales data for 2022, 2023, and 2024
- **Interactive Charts**: Switch between bar charts, line graphs, and pie charts
- **Custom Filtering**: Set custom sales thresholds to filter data
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Analytics**: Dynamic metrics with year-over-year growth indicators

### Advanced Features
- **Atomic Design Architecture**: Clean, maintainable component structure
- **Multiple Chart Types**: Bar, line, and pie chart visualizations using Recharts
- **Custom Filter Input**: User-defined sales threshold filtering
- **Year-over-Year Comparison**: Growth metrics and trend analysis
- **Preset Filters**: Quick-access filter buttons for common thresholds
- **Responsive Grid Layout**: Adaptive layout for all screen sizes

## 🏗️ Architecture

This project follows **Atomic Design Principles**:

```
components/
├── atoms/           # Basic building blocks
│   ├── MetricCard.tsx
│   └── ChartTypeToggle.tsx
├── molecules/       # Groups of atoms
│   ├── FilterInput.tsx
│   ├── RevenueChart.tsx
│   └── YearSelector.tsx
├── organisms/       # Complex components
│   ├── DashboardMetrics.tsx
│   └── DashboardControls.tsx
└── templates/       # Page layouts
    └── DashboardLayout.tsx
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite (via Next.js)

## 📊 Data Structure

The application uses mock sales data with the following structure:

```typescript
interface SalesData {
  year: number;
  month: string;
  revenue: number;
  orders: number;
  customers: number;
  avgOrderValue: number;
}
```

Mock data includes:
- **3 years** of monthly sales data (2022-2024)
- **Realistic growth patterns** showing year-over-year improvement
- **Comprehensive metrics** including revenue, orders, customers, and AOV

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sales-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Usage

### Dashboard Navigation
1. **Home Page**: Overview of features and technology stack
2. **Dashboard Page** (`/dashboard`): Main analytics interface

### Dashboard Features
1. **Year Selection**: Choose between 2022, 2023, or 2024
2. **Chart Type Toggle**: Switch between bar, line, and pie charts
3. **Sales Filter**: Set custom minimum sales thresholds
4. **Metrics Cards**: View key performance indicators with growth trends

### Interactive Elements
- **Hover Effects**: Detailed tooltips on chart elements
- **Responsive Charts**: Automatically resize based on screen size
- **Filter Presets**: Quick-access buttons for common filter values
- **Growth Indicators**: Color-coded trend arrows showing performance changes

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for main actions and data points
- **Secondary**: Green for positive trends and success states
- **Accent**: Orange for highlights and warnings
- **Neutral**: Gray scales for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Heading Scale**: h1 (3xl) to h3 (lg)
- **Body Text**: Base size with readable line heights

### Spacing System
- **Grid**: 8px base unit system
- **Components**: Consistent padding and margin using Tailwind classes
- **Layout**: Responsive grid with appropriate breakpoints

## 📈 Data Insights

The mock data demonstrates:
- **Steady Growth**: 21.65% growth from 2022 to 2023
- **Continued Expansion**: 16.85% growth from 2023 to 2024
- **Seasonal Patterns**: Higher sales during holiday periods (November/December)
- **Customer Growth**: Increasing customer base year-over-year

## 🔮 Future Enhancements

### Planned Features
- **API Integration**: Connect to real sales data APIs
- **Export Functionality**: Download charts and reports as PDF/Excel
- **Advanced Filters**: Date range selectors, product categories
- **User Authentication**: Personal dashboards and saved views
- **Real-time Updates**: WebSocket integration for live data

### Technical Improvements
- **Performance Optimization**: Chart virtualization for large datasets
- **PWA Support**: Offline functionality and mobile app experience
- **Testing Suite**: Unit and integration tests with Jest/Cypress
- **Analytics**: User behavior tracking and performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please open an issue on the GitHub repository.

---

**Built with ❤️ using atomic design principles and modern web technologies**