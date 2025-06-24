# mcp-test-by-claude

Test repository created by Claude

## Contents

### Store400DailySalesChart.jsx
店番400の日別売上数を可視化するReactコンポーネントです。

#### 機能
- 日別売上数の棒グラフ表示
- 日別売上数の折れ線グラフ表示  
- データサマリー（総データ数、最大売上数、平均売上数）

#### 使用技術
- React
- Recharts (グラフライブラリ)
- Tailwind CSS (スタイリング)

#### データソース
BigQueryから抽出した店番400の販売データ

#### 使用方法
```jsx
import Store400DailySalesChart from './Store400DailySalesChart';

function App() {
  return (
    <div>
      <Store400DailySalesChart />
    </div>
  );
}
```

#### 必要な依存関係
```bash
npm install react recharts
```

#### 注意事項
- 現在のデータには2025年6月1日の1日分のみが含まれています
- 実際の使用時は、salesDataの部分を動的なデータ取得に変更してください