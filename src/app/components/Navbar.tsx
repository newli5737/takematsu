import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, id?: number) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ホーム', path: 'home' },
    { name: '会社案内', path: 'company' },
    { name: '事業内容', path: 'services' },
    { name: '施工実績', path: 'projects' },
    { name: 'ニュース', path: 'news' },
    { name: '採用情報', path: 'recruitment' },
    { name: 'アクセス', path: 'access' },
    { name: 'お問い合わせ', path: 'contact' },
  ];

  const isTransparentPage = currentPage !== 'news-detail';
  const isNavTransparent = isTransparentPage && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isNavTransparent
        ? 'bg-black/20 backdrop-blur-md border-b border-white/10'
        : 'bg-white shadow-lg border-b border-gray-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/images/logo.png"
              alt="Takematsu Logo"
              className={`h-10 sm:h-12 w-auto transition-all ${!isNavTransparent ? 'brightness-90 contrast-125' : ''}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`px-2 xl:px-3 py-2 rounded-md font-medium text-sm xl:text-base transition-all whitespace-nowrap ${currentPage === item.path
                    ? (isNavTransparent ? 'bg-white text-primary' : 'bg-primary text-white')
                    : (isNavTransparent ? 'text-white hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100')
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${isNavTransparent ? 'text-white' : 'text-gray-700'}`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`lg:hidden pb-4 transition-all duration-300 ${isNavTransparent ? 'bg-black/90 backdrop-blur-lg' : 'bg-white shadow-xl'
            }`}>
            <div className="flex flex-col space-y-1 px-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-md text-left font-medium transition-all ${currentPage === item.path
                      ? 'bg-primary text-white'
                      : (isNavTransparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100')
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
