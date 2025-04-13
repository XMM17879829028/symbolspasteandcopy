import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-[#FFF5EB]">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.svg" alt="Symbols Copy & Paste" className="h-8 w-auto" />
              <span className="text-xl md:text-2xl font-bold text-[#F4963F] truncate">
                Symbols Copy & Paste
              </span>
            </Link>
            
            <button 
              type="button"
              onClick={toggleMenu}
              className="md:hidden p-2 text-[#F4963F] hover:text-[#E3852E]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 border-t md:border-t-0 gap-4 md:gap-4`}>
              <Link 
                to="/egypt" 
                className="text-[#F4963F] hover:text-[#E3852E] transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Ancient Egypt Symbols
              </Link>
              <Link 
                to="/lenny" 
                className="text-[#F4963F] hover:text-[#E3852E] transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                (͠≖ ͜ʖ͠≖) Lenny Face
              </Link>
              <Link 
                to="/lenny-generator" 
                className="text-[#F4963F] hover:text-[#E3852E] transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                ☞(ᗒᎲᗕ)☞ Generator
              </Link>
              <Link 
                to="/art" 
                className="text-[#F4963F] hover:text-[#E3852E] transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Symbols Art
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className={`pt-16 md:pt-20 ${menuOpen ? 'pt-52' : ''}`}>
        <Outlet />
      </div>

      <footer className="mt-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm md:text-base">
          Click any symbol to copy and add to the text area above
        </div>
      </footer>
    </div>
  );
}

export default Layout