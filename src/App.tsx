import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// 使用React.lazy懒加载页面组件
const SymbolsPage = lazy(() => import('./components/SymbolsPage'));
const LennyGenerator = lazy(() => import('./components/LennyGenerator'));

// 懒加载不同类型的符号数据 
// 这将优化初始加载时间
import { useSymbols } from './hooks/useSymbols';

function CommonSymbolsPage() {
  // 使用自定义hook加载符号
  const { symbols, loading, error } = useSymbols('common');
  
  if (error) {
    console.error('加载通用符号失败:', error);
    // 显示错误页面或加载后备数据
    // 这里可以从fallbackSymbols中导入数据作为备份
  }

  return <SymbolsPage symbols={symbols} />;
}

function EgyptSymbolsPage() {
  const { symbols, loading, error } = useSymbols('egypt');
  
  if (error) {
    console.error('加载埃及符号失败:', error);
  }

  return <SymbolsPage symbols={symbols} />;
}

function LennySymbolsPage() {
  const { symbols, loading, error } = useSymbols('lenny');
  
  if (error) {
    console.error('加载Lenny Face符号失败:', error);
  }

  return <SymbolsPage symbols={symbols} />;
}

// 添加符号艺术页面组件
function ArtSymbolsPage() {
  const { symbols, loading, error } = useSymbols('art');
  
  if (error) {
    console.error('加载符号艺术失败:', error);
  }

  return <SymbolsPage symbols={symbols} />;
}

// 加载指示器组件
const LoadingIndicator = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F4963F]" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<LoadingIndicator />}>
              <CommonSymbolsPage />
            </Suspense>
          } />
          <Route path="egypt" element={
            <Suspense fallback={<LoadingIndicator />}>
              <EgyptSymbolsPage />
            </Suspense>
          } />
          <Route path="lenny" element={
            <Suspense fallback={<LoadingIndicator />}>
              <LennySymbolsPage />
            </Suspense>
          } />
          <Route path="lenny-generator" element={
            <Suspense fallback={<LoadingIndicator />}>
              <LennyGenerator />
            </Suspense>
          } />
          <Route path="art" element={
            <Suspense fallback={<LoadingIndicator />}>
              <ArtSymbolsPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;