import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Leadership() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth fade-in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const leaders = [
    {
      name: 'William Clapp',
      title: 'Founder & Chief Executive Officer',
      image: '/Headshots/1_will-clapp.png',
      bio: '20+ years energy sector leadership, pioneered Bone Springs drilling, Former US Army Ranger in the 75th Ranger Regiments, JD - Seattle University School of Law, BA - Texas Tech.'
    },
    {
      name: 'Sam Feder',
      title: 'Founder & Chief Strategy Officer',
      image: '/Headshots/sam_feder_5.jpeg',
      bio: '14+ Years leading 150+ major infrastructure projects. NYC high-rise mechanical systems expert, multiple venture exits'
    },
    {
      name: 'Will Latta',
      title: 'Chief Power Officer',
      image: '/Headshots/will_latta.jpeg',
      bio: '30 years power generation experience. Founded $100M energy firms. MBA - Duke, Professional Engineer.'
    },
    {
      name: 'Avi Huberfeld',
      title: 'Chief Financial Officer',
      image: '/Headshots/profile-placeholder.jpg',
      bio: 'Former investor at Millennium Management, 9+ years public markets expertise. BS - Yeshiva University.'
    },
    {
      name: 'Hanna Ashlag',
      title: 'Director of Finance & Administration',
      image: '/Headshots/hanna_ashlag.jpg',
      bio: 'Strategic operations leader with 7 years cross-functional management in industrial project & executive partnerships.'
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
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 font-outfit font-medium transition-colors duration-200"
            >
              Home
            </Link>
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
              className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
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
              <div className="p-6 flex-grow flex flex-col transition-transform duration-300 group-hover:-translate-y-4">
                <h3 className="text-2xl font-outfit font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-gray-600 font-outfit font-medium text-sm mb-4 leading-relaxed">
                  {leader.title}
                </p>
                <p className="text-gray-500 font-outfit font-light text-sm leading-relaxed flex-grow overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {leader.bio}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-outfit font-light">
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Leadership;

