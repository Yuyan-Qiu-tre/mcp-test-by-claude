import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Store400DailySalesChart = () => {
  // BigQueryから取得したデータ
  const salesData = [
    {
      date: '2025-06-01',
      totalSales: 210,
      displayDate: '6/1'
    }
  ];

  return (
    <div className="w-full p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">店番400 日別売上数</h1>
        <p className="text-gray-600">日別の総売上数の推移</p>
      </div>

      {/* 棒グラフ */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">日別売上数（棒グラフ）</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="displayDate" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '4px'
              }}
              formatter={(value) => [value + '個', '売上数']}
              labelFormatter={(label) => `日付: ${label}`}
            />
            <Bar 
              dataKey="totalSales" 
              fill="#3b82f6" 
              stroke="#2563eb"
              strokeWidth={1}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 折れ線グラフ */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">日別売上数（折れ線グラフ）</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="displayDate" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '4px'
              }}
              formatter={(value) => [value + '個', '売上数']}
              labelFormatter={(label) => `日付: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="totalSales" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 2, fill: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* データサマリー */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">データサマリー</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">総データ数</h3>
            <p className="text-2xl font-bold text-blue-600">{salesData.length}日</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">最大売上数</h3>
            <p className="text-2xl font-bold text-green-600">
              {Math.max(...salesData.map(d => d.totalSales))}個
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">平均売上数</h3>
            <p className="text-2xl font-bold text-purple-600">
              {(salesData.reduce((sum, d) => sum + d.totalSales, 0) / salesData.length).toFixed(1)}個
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>※ 現在のデータには2025年6月1日の1日分のみが含まれています</p>
        <p>※ 店番400の売上データを対象としています</p>
      </div>
    </div>
  );
};

export default Store400DailySalesChart;