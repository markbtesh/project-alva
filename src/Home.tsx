import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_jzgo659',      // Replace with your EmailJS service ID
        'template_4g6utmm',     // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'NmKrGL0HfGr4y4CVL'       // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    Resources
                  </Link>
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
      <div className="min-h-screen bg-black relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 opacity-0 animate-intro-30"></div>

        <div className="absolute inset-0 opacity-0 animate-intro-30 animate-flicker">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3CDCDC]/10 rounded-full blur-3xl animate-[slowRotate_120s_linear_infinite]" style={{ transformOrigin: 'center center' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AFFF6E]/10 rounded-full blur-3xl animate-[slowRotate_160s_linear_infinite_reverse]" style={{ transformOrigin: 'center center' }}></div>
        </div>

        <div className="relative overflow-hidden z-10 mx-auto w-screen px-6 text-center pb-[92rem] translate-y-60 rounded-t-full scale-x-150 bg-black border-t-2 border-[#DFFFDF]/10 shadow-[0_0_120px_0_rgba(60,220,220,0.15)] before:content-[''] before:absolute before:-inset-x-8 before:-inset-y-14 before:-z-10 before:rounded-t-[9999px] before:bg-[radial-gradient(80%_80%_at_50%_0%,rgba(60,220,220,0.15),rgba(175,255,110,0.08)_45%,transparent_75%)] before:opacity-0 before:blur-3xl before:transform before:animate-[bgPulse_120s_linear_infinite] before:animate-introBefore before:animate-flicker before:origin-center after:content-[''] after:absolute after:inset-0 after:bg-[url('/world.png')] after:bg-cover after:bg-center after:-z-20 after:rounded-t-full after:animate-worldFloat">
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
   


  {/* Contact Form Section */}
  <div className="absolute bottom-0 left-0 right-0 min-h-screen bg-black py-32 px-6 overflow-hidden content-center">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3CDCDC]/5 rounded-full blur-3xl animate-[slowRotate_120s_linear_infinite]" style={{ transformOrigin: 'center center' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AFFF6E]/5 rounded-full blur-3xl animate-[slowRotate_160s_linear_infinite_reverse]" style={{ transformOrigin: 'center center' }}></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[#DFFFDF] text-4xl lg:text-5xl font-outfit font-regular tracking-[-0.01em] drop-shadow-[0_0_16px_rgba(60,220,220,0.35)]">
              Get In Touch
            </h2>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#3CDCDC] to-transparent"></div>
            <p className="text-[#AFFF6E] text-lg font-outfit font-light tracking-wide">
              Ready to power the future? Let's connect.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-[#DFFFDF] font-outfit font-light mb-2 text-sm tracking-wide">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#404040] rounded-lg text-[#DFFFDF] font-outfit placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#606060] focus:ring-2 focus:ring-[#606060]/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-[#DFFFDF] font-outfit font-light mb-2 text-sm tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#404040] rounded-lg text-[#DFFFDF] font-outfit placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#606060] focus:ring-2 focus:ring-[#606060]/20 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-[#DFFFDF] font-outfit font-light mb-2 text-sm tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#404040] rounded-lg text-[#DFFFDF] font-outfit placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#606060] focus:ring-2 focus:ring-[#606060]/20 transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#2a2a2a] border border-[#404040] text-[#DFFFDF] font-outfit font-medium tracking-wide rounded-lg hover:bg-[#353535] hover:border-[#606060] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#2a2a2a] disabled:hover:border-[#404040] transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-center py-4 px-6 bg-[#AFFF6E]/20 border border-[#AFFF6E]/50 rounded-lg text-[#AFFF6E] font-outfit">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center py-4 px-6 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 font-outfit drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
          <p className="text-center absolute -bottom-28 left-0 right-0 text-[#3d3d3d] text-sm font-outfit font-light tracking-wide z-10">
          All rights reserved.
        </p>
        </div>

       
      </div>


      </div>
    </>
  );
}

export default Home;

