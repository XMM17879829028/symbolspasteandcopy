import { type FC, useState, useRef, useEffect } from 'react';
import { ClipboardCopy, Trash2, ChevronUp } from 'lucide-react';

interface SymbolsPageProps {
  symbols: Array<{
    category: string;
    items: string[];
  }>;
}

const SymbolsPage: FC<SymbolsPageProps> = ({ symbols }) => {
  const [inputText, setInputText] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastPosition, setToastPosition] = useState({ x: 0, y: 0 });
  const [toastMessage, setToastMessage] = useState('');
  const [loading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 判断符号大小的函数

  // 获取符号卡片样式
  const getSymbolCardStyle = (symbol: string) => {
    // 基础样式
    const baseStyle = "flex items-center justify-center bg-white rounded-md border border-gray-200 hover:shadow-sm hover:bg-gray-50 transition-all duration-200 whitespace-pre overflow-visible";
    
    // 检查是否为ASCII艺术 (包含换行符)
    if (symbol.includes('\n')) {
      return `${baseStyle} text-[10px] md:text-xs p-1 md:p-2 min-h-[80px] md:min-h-[120px] min-w-[160px] md:min-w-[200px]`;
    }
    
    // 常规符号统一大小
    return `${baseStyle} text-base md:text-lg h-[40px] md:h-[48px]`;
  };

  // 获取网格布局样式
  const getGridStyle = (category: string) => {
    // 对于ASCII艺术使用更宽松的布局
    if (category === 'house') {
      return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6';
    }
    
    // 对于Lenny Face和其他特殊符号使用中等布局
    if (category.includes('Lenny') || category.includes('Special') || category.includes('Funny') || category.includes('Table Flip') || category.includes('Shrug')) {
      return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 md:gap-2';
    }
    
    // 对于普通符号使用更紧凑的布局
    return 'grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-1 md:gap-2';
  };

  const showToastMessage = (message: string, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setToastPosition({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 40
    });
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  };

  const copyToClipboard = async (symbol: string, event: React.MouseEvent) => {
    try {
      await navigator.clipboard.writeText(symbol);
      setInputText(prev => prev + symbol);
      showToastMessage('Copied! ✨', event);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleClearAll = (event: React.MouseEvent) => {
    setInputText('');
    showToastMessage('Cleared! 🧹', event);
  };

  const handleCopyAll = async (event: React.MouseEvent) => {
    try {
      await navigator.clipboard.writeText(inputText);
      showToastMessage('All Copied! 📋', event);
    } catch (err) {
      console.error('Failed to copy all:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-8">
      <div className="sticky top-[72px] bg-[#FFF5EB] pt-2 pb-2 md:pt-4 md:pb-4 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center">
              <select 
                onChange={(e) => scrollToCategory(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F4963F] focus:border-transparent bg-white text-sm md:text-base"
              >
                <option value="">Jump to category...</option>
                {symbols.map((category) => (
                  <option key={category.category} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Your symbols can be freely combined here."
                className="w-full p-3 md:p-4 border rounded-lg shadow-sm h-24 md:h-32 focus:outline-none focus:ring-2 focus:ring-[#F4963F] focus:border-transparent bg-white text-sm md:text-base"
              />
              <div className="flex flex-row md:flex-col gap-2 mt-2 md:mt-0">
                <button
                  type="button"
                  onClick={handleCopyAll}
                  className="flex-1 md:flex-auto p-2 md:p-3 bg-[#F4963F] text-white rounded-lg hover:bg-[#E3852E] transition-colors flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                  disabled={loading || !inputText}
                >
                  <ClipboardCopy className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Copy All</span>
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="flex-1 md:flex-auto p-2 md:p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                  disabled={loading || !inputText}
                >
                  <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Clear All</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-2 md:px-4 py-2 md:py-4 mt-[20px] md:mt-[30px]">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-t-2 border-b-2 border-[#F4963F]" />
          </div>
        ) : (
          <div className="grid gap-2 md:gap-4">
            {symbols.map((category) => (
              <div 
                key={category.category} 
                ref={(el) => { categoryRefs.current[category.category] = el; }}
                className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 scroll-mt-64 md:scroll-mt-80"
              >
                <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-700 border-b pb-2">{category.category}</h2>
                <div className={getGridStyle(category.category)}>
                  {category.items.map((symbol) => (
                    <button
                      type="button"
                      key={symbol}
                      onClick={(e) => copyToClipboard(symbol, e)}
                      className={getSymbolCardStyle(symbol)}
                    >
                      {symbol}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 p-2 md:p-3 bg-[#F4963F] text-white rounded-full shadow-lg hover:bg-[#E3852E] transition-colors"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}

      {showToast && (
        <div
          style={{
            position: 'absolute',
            left: `${toastPosition.x}px`,
            top: `${toastPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 50,
          }}
          className="bg-[#F4963F] text-white px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium shadow-lg animate-bounce"
        >
          {toastMessage}
        </div>
      )}

      {/* SEO 优化内容 */}
      <div className="prose max-w-none text-gray-600 text-sm md:text-base">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800">Symbols Copy and Paste - Your Ultimate Symbol Resource</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-gray-700">Welcome to Symbols Copy and Paste</h3>
            <p className="mb-4">
              Our Symbols Copy and Paste platform offers an extensive collection of symbols, characters, and special text elements 
              ready for instant use. Whether you're looking to enhance your social media posts, create unique usernames, or add 
              special characters to your documents, our Symbols Copy and Paste tool makes it effortless.
            </p>
            <p className="mb-4">
              The Symbols Copy and Paste collection features a wide range of categories, including common symbols, mathematical 
              notations, currency symbols, arrows, and decorative characters. Each symbol in our collection is carefully curated 
              to ensure compatibility across different platforms and devices.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-gray-700">Why Use Our Symbols Copy and Paste Tool?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Instant access to hundreds of unique symbols</li>
              <li>Easy one-click copy functionality</li>
              <li>Well-organized symbol categories</li>
              <li>Mobile-friendly interface</li>
              <li>Regular updates with new symbols</li>
              <li>Universal compatibility across platforms</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-gray-700">How to Use Symbols Copy and Paste</h3>
          <p className="mb-4">
            Using our Symbols Copy and Paste tool is straightforward. Simply browse through our categorized collection, find 
            the symbol you need, and click to copy. Our intuitive interface makes it easy to discover and use symbols for any 
            purpose. The Symbols Copy and Paste feature works seamlessly across all modern browsers and devices.
          </p>
          <p className="mb-4">
            Each symbol in our Symbols Copy and Paste collection is tested for compatibility with major platforms and 
            applications. Whether you're using social media, messaging apps, or document editors, our symbols will display 
            correctly on your chosen platform.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Popular Symbol Categories</h3>
          <p className="mb-4">
            Our Symbols Copy and Paste tool includes various popular categories such as emoji symbols, mathematical symbols, 
            currency symbols, and decorative characters. Each category in our Symbols Copy and Paste collection is carefully 
            curated to provide the most relevant and frequently used symbols.
          </p>
          <p className="mb-4">
            The Symbols Copy and Paste platform is regularly updated with new symbols and categories based on user requests 
            and trending usage patterns. We ensure that our symbol collection stays current with the latest Unicode standards 
            and digital communication trends.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Using Symbols in Different Contexts</h3>
          <p className="mb-4">
            Our Symbols Copy and Paste tool is perfect for various applications. Use special symbols to enhance your social 
            media presence, create unique usernames, add flair to your messages, or incorporate mathematical notation in your 
            documents. The Symbols Copy and Paste feature supports all these use cases and more.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-700">Technical Support and Compatibility</h3>
          <p>
            The Symbols Copy and Paste tool is designed to work flawlessly across different operating systems and platforms. 
            Our symbols are Unicode-compliant and tested for compatibility with major browsers and applications. If you 
            encounter any issues with specific symbols, our comprehensive guide provides solutions for common compatibility 
            challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SymbolsPage;