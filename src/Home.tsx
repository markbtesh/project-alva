import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling on homepage
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
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


  return (
    <>
      {/* Navigation Bar */}
      <nav className="w-full backdrop-blur-sm absolute top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-end">
            {/* Toggle Menu Button */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-[#DFFFDF]/20 bg-black/30 hover:bg-black/50 hover:border-[#DFFFDF]/40 transition-all duration-200"
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-5 h-5 text-[#DFFFDF] transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
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
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-[#DFFFDF]/20 bg-black/90 backdrop-blur-md shadow-lg overflow-hidden menu-fade-in">
                  <Link
                    to="/leadership"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-[#DFFFDF] hover:text-[#AFFF6E] hover:bg-[#DFFFDF]/10 font-outfit font-medium transition-all duration-200"
                  >
                    Leadership
                  </Link>
                  <Link
                    to="/resources"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-[#DFFFDF] hover:text-[#AFFF6E] hover:bg-[#DFFFDF]/10 font-outfit font-medium transition-all duration-200 border-t border-[#DFFFDF]/10"
                  >
                    Resource Center
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-[#DFFFDF] hover:text-[#AFFF6E] hover:bg-[#DFFFDF]/10 font-outfit font-medium transition-all duration-200 border-t border-[#DFFFDF]/10"
                  >
                    Contact
                  </Link>
                  <a
                    href="https://wtssynergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-[#DFFFDF] hover:text-[#AFFF6E] hover:bg-[#DFFFDF]/10 font-outfit font-medium transition-all duration-200 border-t border-[#DFFFDF]/10"
                  >
                    A WTS Company
                  </a>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-[#DFFFDF] hover:text-[#AFFF6E] hover:bg-[#DFFFDF]/10 font-outfit font-medium transition-all duration-200 border-t border-[#DFFFDF]/10"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="h-screen bg-black relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 opacity-0 animate-intro-30"></div>

        <div className="absolute inset-0 opacity-0 animate-intro-30 animate-flicker">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3CDCDC]/10 rounded-full blur-3xl animate-[slowRotate_120s_linear_infinite]" style={{ transformOrigin: 'center center' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AFFF6E]/10 rounded-full blur-3xl animate-[slowRotate_160s_linear_infinite_reverse]" style={{ transformOrigin: 'center center' }}></div>
        </div>

        <div className="relative overflow-hidden z-10 mx-auto w-screen px-6 text-center pb-[36rem] translate-y-60 rounded-t-full scale-x-150 bg-black border-t-2 border-[#DFFFDF]/10 shadow-[0_0_120px_0_rgba(60,220,220,0.15)] before:content-[''] before:absolute before:-inset-x-8 before:-inset-y-14 before:-z-10 before:rounded-t-[9999px] before:bg-[radial-gradient(80%_80%_at_50%_0%,rgba(60,220,220,0.15),rgba(175,255,110,0.08)_45%,transparent_75%)] before:opacity-0 before:blur-3xl before:transform before:animate-[bgPulse_120s_linear_infinite] before:animate-introBefore before:animate-flicker before:origin-center after:content-[''] after:absolute after:inset-0 after:bg-[url('/world.png')] after:bg-cover after:bg-center after:-z-20 after:rounded-t-full after:animate-worldFloat">
          <div className="mb-6 transform transition-transform duration-500 mt-28 scale-x-75">
            <div className="relative w-full max-w-md mx-auto">
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full blur-3xl opacity-0 animate-intro-70 animate-flicker "></div>
              <img
                src="/alva-white.svg"
                alt="ALVA logo"
                className="w-full logo-glow-intro"
              />
            </div>
          </div>

          <div className="space-y-4 animate-fade-in scale-x-50 font-outfit">
            <p className="text-[#AFFF6E] text-xl lg:text-2xl xl:text-[28px] font-medium tracking-[0.2em] drop-shadow-[0_0_12px_rgba(175,255,110,0.4)] uppercase scale-x-125">UTILITY OF THE AI ERA</p>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#3CDCDC] to-transparent animate-divider-width"></div>
            <p className="text-[#AFFF6E]/50 text-sm lg:text-base xl:text-lg tracking-[0.35em] uppercase font-light drop-shadow-[0_0_10px_rgba(60,220,220,0.3)]">
              Next Generation Power Solutions
            </p>
          </div>
        
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3CDCDC]/50 to-transparent"></div>
      </div>
    </>
  );
}

export default Home;

