import { useState, useEffect } from 'react';
import { commonSymbols, egyptSymbols, lennySymbols, artSymbols } from '../data/fallbackSymbols';

// 定义符号数据类型
export interface SymbolCategory {
  category: string;
  items: string[];
}

export interface SymbolsData {
  [key: string]: {
    path: string;
    name: string;
  };
}

// 符号类别配置
export const symbolsConfig: SymbolsData = {
  common: {
    path: '/data/common-symbols.json',
    name: 'Common Symbols'
  },
  egypt: {
    path: '/data/egypt-symbols.json',
    name: 'Egyptian Symbols'
  },
  lenny: {
    path: '/data/lenny-symbols.json',
    name: 'Lenny Face'
  },
  art: {
    path: '/data/art-symbols.json',
    name: 'Symbols Art'
  }
};

/**
 * Custom Hook for loading symbol data
 * @param type symbol type: common, egypt, lenny
 * @returns symbol data, loading state and error message
 */
export const useSymbols = (type: string) => {
  const [symbols, setSymbols] = useState<SymbolCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        setLoading(true);
        
        // First try to get cached data from local storage
        const cachedData = localStorage.getItem(`symbols_${type}`);
        const cachedTime = localStorage.getItem(`symbols_${type}_time`);
        
        // If cache exists and is less than 24 hours old, use it
        if (cachedData && cachedTime) {
          const now = new Date().getTime();
          const cacheTime = Number.parseInt(cachedTime, 10);
          
          // Cache is less than 24 hours old
          if (now - cacheTime < 24 * 60 * 60 * 1000) {
            setSymbols(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
        }
        
        // No valid cache, fetch from server
        const config = symbolsConfig[type];
        if (!config) {
          throw new Error(`Invalid symbol type: ${type}`);
        }
        
        // Get data from specified path
        const response = await fetch(config.path);
        if (!response.ok) {
          throw new Error(`Failed to fetch symbol data: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Store in local cache
        localStorage.setItem(`symbols_${type}`, JSON.stringify(data));
        localStorage.setItem(`symbols_${type}_time`, new Date().getTime().toString());
        
        setSymbols(data);
      } catch (err) {
        console.error('Error loading symbol data:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
        
        // Load fallback data in case of error
        let fallbackData: SymbolCategory[] = [];
        
        switch (type) {
          case 'common':
            fallbackData = commonSymbols;
            break;
          case 'egypt':
            fallbackData = egyptSymbols;
            break;
          case 'lenny':
            fallbackData = lennySymbols;
            break;
          case 'art':
            fallbackData = artSymbols;
            break;
        }
        
        if (fallbackData.length > 0) {
          console.log(`Loading ${type} symbols from fallback data`);
          setSymbols(fallbackData);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSymbols();
  }, [type]);

  return { symbols, loading, error };
};

export default useSymbols; 