import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function DashboardLayout({ children, title = "Sales Dashboard" }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 mt-2">
            Interactive sales analytics and reporting dashboard
          </p>
        </div>
        
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
}