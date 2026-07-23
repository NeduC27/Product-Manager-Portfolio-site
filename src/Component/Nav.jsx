import { useState, useEffect } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-me' },
    { name: 'Projects', path: '/project' },
    { name: 'Skills', path: '/skill' },
    { name: 'Contact', path: '/contact-me' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/80 backdrop-blur-xl /*border-b border-white/5*/ py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative group">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-slate-500"
          >
            NEDU<span className="text-blue-500">.</span>
          </motion.h1>
          <div className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-bold uppercase tracking-[0.2em] transition-all hover:text-blue-400 ${
                location.pathname === link.path ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-block"
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
          <Link 
            to="/contact-me"
            className="bg-white text-gray-950 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <RiMenu3Line />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950 border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-black uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-blue-500' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;