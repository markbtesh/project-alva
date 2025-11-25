import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

function Leadership() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure smooth fade-in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => {
      clearTimeout(timer);
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

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedLeader !== null) {
        setSelectedLeader(null);
      }
    };

    if (selectedLeader !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedLeader]);
  const leaders = [
    {
      name: 'William Clapp',
      title: 'Founder & CEO',
      image: '/Headshots/1_will-clapp.png',
      bio: 'William has over 23 years of experience in energy infrastructure development and a proven track record of multi-billion dollar project execution. He pioneered the first well in the Bone Springs formation and developed proprietary technical IP to identify major plays in U.S. basins. Will has deployed over 5GW of power generation capacity globally and established strong relationships with leading investment firms. His innovative financial strategies and large acquisitions have positioned at the forefront of the AI power race. Will holds a Juris Doctor and graduated magna cum laude from Texas Tech University. He also served with the United States Special Operations Force as part of the 75th Ranger Regiments.'
    },
    {
      name: 'Sam Feder',
      title: 'Founder & Chief Strategy Officer',
      image: '/Headshots/sam_feder_5.jpeg',
      bio: 'Sam has over 14 years of experience in the industrial and finance management sectors, specializing in large-scale infrastructure development with advanced technology implementation, software management systems, proven expertise in mechanical design, large-scale demand systems, and utility service installations serving millions of users. As the founder of multiple successful companies, he has successfully delivered over 150 major projects across industrial, commercial, and government sectors. Sam\'s technical expertise, combined with a proven track record of industrial development execution, technology implementation, extensive background in finance, regulatory compliance, and business leadership has facilitated his ability to foster growth and operational excellence throughout diverse sectors, establishing as an industry leader. He holds master-level trade certifications and specialized training spanning mechanical systems, utility infrastructure, and safety compliance.'
    },
    {
      name: 'Will Latta',
      title: 'Chief Power Officer',
      image: '/Headshots/will_latta.jpeg',
      bio: 'Will Latta has 25 years of experience with a proven track record of building successful teams and companies in the energy sector. He founded and led LP Amina, an environmental engineering firm that provided turnkey services to clients in the US and China. Latta also held various leadership positions at Alstom Power, including Director of Product Engineering and Director of Six Sigma. He successfully completed over 70 power plant projects and received multiple industry awards. Latta holds an MBA from Duke University and a Bachelor\'s degree in Mechanical Engineering from Georgia Institute of Technology.'
    },
    {
      name: 'Avi Huberfeld',
      title: 'President',
      image: '/Headshots/avi-h.jpg',
      bio: 'Avi brings 9+ years of sophisticated financial expertise with a distinguished track record in public markets investment and portfolio management. As a former Investment Analyst at Millennium Management, he\'s developed deep expertise in risk assessment and strategic capital allocation across diverse market conditions with particular focus on energy and power sectors. Huberfeld\'s experience spans multiple asset classes and market cycles, providing him with the strategic perspective essential for driving financial performance in high-growth energy infrastructure ventures. He holds a Bachelor of Science degree from Yeshiva University with concentrations in finance.'
    },
    {
      name: 'Hanna Ashlag',
      title: 'Director in Finance & Administration',
      image: '/Headshots/hanna_ashlag.jpg',
      bio: 'Hanna brings 7 years of experience serving as Director of Finance and Administration, operating as a strategic partner to the founders and executive team. Her experience includes financial and multifaceted oversight spanning finance, coordination, and strategic forecasting where she managed multi-million-dollar budgets for high-rise and infrastructure projects, bringing proven expertise in financial stewardship and organizational administration. Ashlag coordinates cross-functional initiatives, ensures alignment between strategic vision and execution, and maintains rigorous financial controls. She pursues continuing education in corporate and business finance and maintains active certifications in specialized accounting practices.'
    }
  ];

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
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden menu-fade-in">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-outfit font-medium transition-all duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/resources"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-outfit font-medium transition-all duration-200 border-t border-gray-200"
                  >
                    Resource Center
                  </Link>
                  <a
                    href="https://wtssynergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-outfit font-medium transition-all duration-200 border-t border-gray-200"
                  >
                    A WTS Company
                  </a>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-outfit font-medium transition-all duration-200 border-t border-gray-200"
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
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-[slowRotate_120s_linear_infinite]" style={{ transformOrigin: 'center center' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-100/30 rounded-full blur-3xl animate-[slowRotate_160s_linear_infinite_reverse]" style={{ transformOrigin: 'center center' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-outfit font-bold text-gray-900 mb-6 tracking-tight">
            Leadership Team
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6"></div>
          <p className="text-xl lg:text-2xl text-gray-600 font-outfit font-light max-w-2xl mx-auto">
            Meet the visionaries driving innovation in next-generation power solutions
          </p>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {leaders.map((leader, index) => (
            <div
              key={index}
              onClick={() => setSelectedLeader(index)}
              className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] flex-shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-outfit font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-gray-600 font-outfit font-medium text-sm mb-4 leading-relaxed">
                  {leader.title}
                </p>
                <p className="text-gray-500 font-outfit font-light text-sm leading-relaxed line-clamp-3">
                  {leader.bio}
                </p>
                <button className="mt-4 text-blue-600 font-outfit font-medium text-sm hover:text-blue-700 transition-colors">
                  Read more →
                </button>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal - Rendered via Portal */}
      {selectedLeader !== null && createPortal(
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10 rounded-t-2xl">
              <div>
                <h2 className="text-3xl font-outfit font-bold text-gray-900 mb-1">
                  {leaders[selectedLeader].name}
                </h2>
                <p className="text-gray-600 font-outfit font-medium">
                  {leaders[selectedLeader].title}
                </p>
              </div>
              <button
                onClick={() => setSelectedLeader(null)}
                className="w-10 h-10 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-8 py-8">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="aspect-[3/4] rounded-xl shadow-lg overflow-hidden bg-gray-100">
                    <img
                      src={leaders[selectedLeader].image}
                      alt={leaders[selectedLeader].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 font-outfit font-light text-base leading-relaxed">
                    {leaders[selectedLeader].bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-outfit font-light">
          © 2025 ALVA Power. All Rights Reserved. A WTS company
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Leadership;

