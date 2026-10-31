import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationLinks, siteConfig } from '../../data/content';
import { Button } from '../ui/Button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  // Scroll state: condense after 40px, hide on scroll down, reveal on scroll up
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 40);
    setIsHidden(latest > previous && latest > 400 && !isMobileOpen);
  });

  // Close the mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMobileOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isMobileOpen]);

  const activeHref = hoveredHref ?? location.pathname;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -120 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <nav
          aria-label="Main"
          className={`pointer-events-auto relative mx-auto flex h-14 lg:h-16 max-w-6xl items-center justify-between overflow-hidden rounded-full pl-5 pr-2 transition-all duration-300 ${
            isScrolled
              ? 'bg-ivory/85 backdrop-blur-xl border border-warm-sand/40 shadow-lg shadow-charcoal/10'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label={siteConfig.name}
            className="relative z-10 flex items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
          >
            <img
              src="/brand/drisha-logo.png"
              alt={siteConfig.name}
              width="200"
              height="200"
              className="h-8 lg:h-9 w-auto"
            />
          </Link>

          {/* Desktop links: one sliding highlight follows hover, rests on the active page */}
          <ul
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const isHighlighted = activeHref === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    to={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    onMouseEnter={() => setHoveredHref(link.href)}
                    onFocus={() => setHoveredHref(link.href)}
                    onBlur={() => setHoveredHref(null)}
                    className={`relative z-10 block px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-burgundy ${
                      isActive ? 'text-burgundy' : 'text-charcoal/75 hover:text-charcoal'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {isHighlighted && (
                    <motion.span
                      layoutId="nav-highlight"
                      aria-hidden
                      className={`absolute inset-0 rounded-full ${
                        isActive && !hoveredHref ? 'bg-burgundy/10' : 'bg-charcoal/[0.06]'
                      }`}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 420, damping: 34 }
                      }
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button href={siteConfig.consumerAppLink} size="sm" rounded="full">
                Plan your journey
              </Button>
            </div>
            <button
              className="lg:hidden relative z-10 grid h-10 w-10 place-items-center rounded-full text-charcoal hover:bg-warm-sand/25 transition-colors focus-visible:outline-2 focus-visible:outline-burgundy"
              onClick={() => setIsMobileOpen((o) => !o)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Scroll progress, sits on the bar's bottom edge */}
          {isScrolled && !reduceMotion && (
            <motion.span
              aria-hidden
              className="absolute bottom-0 left-6 right-6 h-px origin-left bg-burgundy/70"
              style={{ scaleX: scrollYProgress }}
            />
          )}
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col bg-ivory px-6 pb-8 pt-24 sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {navigationLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center justify-between border-b border-warm-sand/30 py-4 text-3xl font-bold tracking-tight transition-colors ${
                        isActive ? 'text-burgundy' : 'text-charcoal hover:text-burgundy'
                      }`}
                      style={{ fontFamily: 'var(--font-family-heading)' }}
                    >
                      {link.label}
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-burgundy" aria-hidden />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="space-y-4 pt-6">
              <Button
                href={siteConfig.consumerAppLink}
                size="lg"
                rounded="full"
                className="w-full justify-center"
              >
                Plan your journey
                <ArrowUpRight size={18} className="ml-1.5" aria-hidden />
              </Button>
              <p className="text-center text-xs text-taupe">
                Northeast India and across the nation. Group mobility platform.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}