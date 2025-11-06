import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import articlesData from './articles.json';

interface Article {
  id: number;
  title: string;
  publication: string;
  author: string;
  date: string;
  intro: string;
  url: string;
  image: string;
}

function Resources() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const tradingViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sort articles by date (newest first) and set state
    const sortedArticles = [...articlesData].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setArticles(sortedArticles);
    
    // Fade in animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  // Load TradingView widget
  useEffect(() => {
    const container = tradingViewRef.current;
    if (!container) return;
    
    // Clear container first
    container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    
    // Create and configure script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.type = 'text/javascript';
    
    const widgetConfig = {
      colorTheme: 'light',
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: '100%',
      height: 600,
      plotLineColorGrowing: 'rgba(25, 118, 210, 1)',
      plotLineColorFalling: 'rgba(25, 118, 210, 1)',
      gridLineColor: 'rgba(240, 243, 250, 1)',
      scaleFontColor: 'rgba(120, 123, 134, 1)',
      belowLineFillColorGrowing: 'rgba(25, 118, 210, 0.12)',
      belowLineFillColorFalling: 'rgba(25, 118, 210, 0.12)',
      belowLineFillColorGrowingBottom: 'rgba(25, 118, 210, 0)',
      belowLineFillColorFallingBottom: 'rgba(25, 118, 210, 0)',
      symbolActiveColor: 'rgba(33, 150, 243, 0.12)',
      tabs: [
        {
          title: 'Market',
          symbols: [
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
            { s: 'FOREXCOM:NSXUSD', d: 'Nasdaq 100' },
            { s: 'FOREXCOM:DJI', d: 'Dow 30' },
            { s: 'FOREXCOM:UKXGBP', d: 'UK 100' },
            { s: 'INDEX:NKY', d: 'Nikkei 225' },
            { s: 'INDEX:DEU30', d: 'DAX Index' }
          ],
          originalTitle: 'Market'
        },
        {
          title: 'Futures',
          symbols: [
            { s: 'FOREXCOM:SPXUSD', d: 'E-Mini S&P 500' },
            { s: 'FOREXCOM:NSXUSD', d: 'E-Mini Nasdaq' },
            { s: 'FOREXCOM:DJI', d: 'Dow 30' },
            { s: 'TVC:USOIL', d: 'Crude Oil' },
            { s: 'OANDA:NATGASUSD', d: 'Natural Gas' },
            { s: 'OANDA:XAUUSD', d: 'Gold' }
          ],
          originalTitle: 'Futures'
        },
        {
          title: 'Crypto',
          symbols: [
            { s: 'COINBASE:BTCUSD', d: 'Bitcoin' },
            { s: 'COINBASE:ETHUSD', d: 'Ethereum' },
            { s: 'BINANCE:BNBUSD', d: 'BNB' },
            { s: 'COINBASE:SOLUSD', d: 'Solana' },
            { s: 'COINBASE:ADAUSD', d: 'Cardano' },
            { s: 'COINBASE:XRPUSD', d: 'Ripple' }
          ],
          originalTitle: 'Crypto'
        },
        {
          title: 'EU',
          symbols: [
            { s: 'INDEX:DEU30', d: 'DAX Index' },
            { s: 'FOREXCOM:UKXGBP', d: 'UK 100' },
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
            { s: 'FOREXCOM:NSXUSD', d: 'Nasdaq 100' },
            { s: 'FOREXCOM:DJI', d: 'Dow 30' },
            { s: 'INDEX:NKY', d: 'Nikkei 225' }
          ],
          originalTitle: 'EU'
        },
        {
          title: 'Asia',
          symbols: [
            { s: 'INDEX:NKY', d: 'Nikkei 225' },
            { s: 'INDEX:HSI', d: 'Hang Seng' },
            { s: 'INDEX:TWII', d: 'Taiwan Weighted' },
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
            { s: 'FOREXCOM:NSXUSD', d: 'Nasdaq 100' },
            { s: 'FOREXCOM:DJI', d: 'Dow 30' }
          ],
          originalTitle: 'Asia'
        },
        {
          title: 'Forex',
          symbols: [
            { s: 'FX:EURUSD', d: 'EUR/USD' },
            { s: 'FX:GBPUSD', d: 'GBP/USD' },
            { s: 'FX:USDJPY', d: 'USD/JPY' },
            { s: 'FX:USDCHF', d: 'USD/CHF' },
            { s: 'FX:AUDUSD', d: 'AUD/USD' },
            { s: 'FX:USDCAD', d: 'USD/CAD' }
          ],
          originalTitle: 'Forex'
        },
        {
          title: 'Commodities',
          symbols: [
            { s: 'OANDA:XAUUSD', d: 'Gold' },
            { s: 'OANDA:XAGUSD', d: 'Silver' },
            { s: 'TVC:USOIL', d: 'Crude Oil' },
            { s: 'OANDA:NATGASUSD', d: 'Natural Gas' },
            { s: 'OANDA:CORNUSD', d: 'Corn' },
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' }
          ],
          originalTitle: 'Commodities'
        },
        {
          title: 'Bonds',
          symbols: [
            { s: 'EUREX:FGBL1!', d: 'Euro Bund' },
            { s: 'EUREX:FBTP1!', d: 'Euro BTP' },
            { s: 'EUREX:FGBM1!', d: 'Euro BOBL' },
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
            { s: 'FOREXCOM:DJI', d: 'Dow 30' },
            { s: 'INDEX:DEU30', d: 'DAX Index' }
          ],
          originalTitle: 'Bonds'
        }
      ]
    };
    
    script.innerHTML = JSON.stringify(widgetConfig);
    container.appendChild(script);

    return () => {
      // Cleanup
      if (container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(s => s.remove());
        container.innerHTML = '';
      }
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className={`min-h-screen bg-white ${isVisible ? 'page-fade-in' : 'opacity-0'}`}>
      {/* Navigation Bar */}
      <nav className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/alva-white.svg"
                alt="ALVA logo"
                className="h-8 w-auto filter brightness-0"
              />
            </Link>
            {/* Toggle Menu Button */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 bg-white/50 hover:bg-white/80 hover:border-gray-400 transition-all duration-200"
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-5 h-5 text-gray-700 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden menu-fade-in">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-outfit font-medium transition-all duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/leadership"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-outfit font-medium transition-all duration-200 border-t border-gray-200"
                  >
                    Leadership
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-outfit font-medium transition-all duration-200 border-t border-gray-200"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

 

      {/* Section 1: Live Market Data */}
      <section className="max-w-7xl mx-auto px-6 py-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 font-outfit mb-6">Live Market Watch</h2>
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 min-h-[400px]">
          {/* TradingView Market Overview Widget */}
          <div className="w-full h-full">
            <div className="tradingview-widget-container" ref={tradingViewRef}>
              <div className="tradingview-widget-container__widget"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Related Articles */}
      <section className="max-w-7xl mx-auto px-6 py-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 font-outfit mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Article Image */}
              <div className="w-full h-48 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Article';
                  }}
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Heading - Article Title */}
                <h3 className="text-xl font-bold text-gray-900 font-outfit mb-3 leading-tight">
                  {article.title}
                </h3>

                {/* Subheading - Publication and Author */}
                <div className="flex items-center text-sm text-gray-600 mb-2 font-outfit">
                  <span className="font-semibold">{article.publication}</span>
                  {article.author && article.author !== article.publication && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{article.author}</span>
                    </>
                  )}
                </div>

                {/* Date */}
                <p className="text-sm text-gray-500 mb-4 font-outfit">
                  {formatDate(article.date)}
                </p>

                {/* Intro Text */}
                <p className="text-gray-700 mb-4 leading-relaxed font-outfit">
                  {article.intro}
                </p>

                {/* Read More Link */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold font-outfit transition-colors duration-200"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer Spacing */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-outfit font-light">
          @ 2025 ALVA Power. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Resources;
