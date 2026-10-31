import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationLinks, siteConfig } from '../../data/content';
import { Button } from '../ui/Button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileOpen(false);
  }

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/92 backdrop-blur-md border-b border-warm-sand/25 shadow-sm shadow-charcoal/5 py-0'
            : 'bg-transparent border-b border-transparent py-1'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <nav className="container-editorial flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-10 flex items-center gap-3 group focus:outline-none"
            aria-label={siteConfig.name}
          >
            <img
              src="/brand/drisha-logo.svg"
              alt={siteConfig.name}
              width="200"
              height="40"
              className="h-8 lg:h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-charcoal/[0.04] p-1.5 rounded-full border border-warm-sand/25 backdrop-blur-md shadow-xs">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-xs xl:text-sm font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-burgundy bg-white shadow-xs font-semibold'
                      : 'text-charcoal/75 hover:text-charcoal hover:bg-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href={siteConfig.consumerAppLink} size="sm" rounded="full">
              Plan Your Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2.5 rounded-full text-charcoal hover:bg-warm-sand/20 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-ivory/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-warm-sand/20 pb-4">
              <Link to="/" onClick={() => setIsMobileOpen(false)} aria-label={siteConfig.name}>
                <img
                  src="/brand/drisha-logo.svg"
                  alt={siteConfig.name}
                  width="140"
                  height="32"
                  className="h-7 w-auto"
                />
              </Link>
              <button
                className="p-2 rounded-full text-charcoal hover:bg-warm-sand/20 transition-colors"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col items-start gap-5 py-6">
              {navigationLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="w-full"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block py-2 text-2xl font-bold tracking-tight transition-colors ${
                      location.pathname === link.href
                        ? 'text-burgundy'
                        : 'text-charcoal hover:text-burgundy'
                    }`}
                    style={{ fontFamily: 'var(--font-family-heading)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-warm-sand/20 pt-6 space-y-4">
              <Button
                href={siteConfig.consumerAppLink}
                size="lg"
                rounded="full"
                className="w-full justify-center"
              >
                Plan Your Journey
              </Button>
              <p className="text-center text-xs text-taupe">
                Northeast India & Across the Nation • Group Mobility Platform
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
