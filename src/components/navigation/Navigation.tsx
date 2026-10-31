
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

  const { scrollY, scrollYProgress } = useScroll();

  // Scroll behavior:
  // - Glass background after 40px
  // - Hide navbar when scrolling down past 400px
  // - Reveal navbar when scrolling up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setIsScrolled(latest > 40);

    if (isMobileOpen || latest <= 400) {
      setIsHidden(false);
      return;
    }

    if (latest > previous + 2) {
      setIsHidden(true);
    } else if (latest < previous - 2) {
      setIsHidden(false);
    }
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setHoveredHref(null);
  }, [location.pathname]);

  // Keep navbar visible when mobile menu opens
  useEffect(() => {
    if (isMobileOpen) {
      setIsHidden(false);
    }
  }, [isMobileOpen]);

  // Lock body scrolling and support Escape key
  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileOpen]);

  const activeHref = hoveredHref ?? location.pathname;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none"
        initial={reduceMotion ? false : { y: -80 }}
        animate={{
          y: isHidden && !isMobileOpen ? -120 : 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <nav
          aria-label="Main navigation"
          className={`
            pointer-events-auto relative mx-auto flex
            h-14 lg:h-[72px] max-w-7xl items-center justify-between
            px-4 sm:px-6 lg:px-8
            transition-all duration-500 ease-out
            ${
              isScrolled
                ? `
                  rounded-full
                  bg-ivory/60
                  backdrop-blur-xl
                  border border-white/50
                  shadow-[0_8px_30px_rgba(35,25,20,0.08)]
                `
                : `
                  rounded-none
                  bg-transparent
                  border border-transparent
                  shadow-none
                `
            }
          `}
        >
          {/* LOGO */}
          <Link
            to="/"
            aria-label={`${siteConfig.name} homepage`}
            className="
              relative z-10 flex shrink-0 items-center
              rounded-full
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-burgundy
            "
          >
            <img
              src="/brand/drisha-logo.png"
              alt={siteConfig.name}
              width="200"
              height="200"
              className="
                h-10 sm:h-11 lg:h-12 w-auto object-contain
                transition-transform duration-300
                hover:scale-[1.03]
              "
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul
            className="hidden lg:flex items-center gap-1 xl:gap-2"
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
                    className={`
                      relative z-10 block
                      px-4 py-3
                      text-[13px] font-medium tracking-wide
                      rounded-full
                      transition-colors duration-300
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-burgundy
                      ${
                        isActive
                          ? 'text-burgundy'
                          : 'text-charcoal/75 hover:text-burgundy'
                      }
                    `}
                  >
                    {link.label}
                  </Link>

                  {/* Animated underline */}
                  {isHighlighted && (
                    <motion.span
                      layoutId="nav-highlight"
                      aria-hidden="true"
                      className="
                        absolute bottom-0
                        left-4 right-4
                        h-[2px]
                        rounded-full
                        bg-burgundy
                      "
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : {
                              type: 'spring',
                              stiffness: 420,
                              damping: 34,
                            }
                      }
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3">

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <Button
                href={siteConfig.consumerAppLink}
                size="sm"
                rounded="full"
                className="
                  transition-transform duration-300
                  hover:-translate-y-0.5
                "
              >
                Plan your journey
                <ArrowUpRight
                  size={15}
                  className="ml-1.5"
                  aria-hidden="true"
                />
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="
                lg:hidden relative z-10
                grid h-10 w-10 place-items-center
                rounded-full
                text-charcoal
                transition-all duration-300
                hover:bg-warm-sand/30
                active:scale-95
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-burgundy
              "
              onClick={() => setIsMobileOpen((open) => !open)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileOpen ? 'close' : 'open'}
                  initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.18 }}
                  className="flex items-center justify-center"
                >
                  {isMobileOpen ? (
                    <X size={22} strokeWidth={1.8} />
                  ) : (
                    <Menu size={22} strokeWidth={1.8} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* SCROLL PROGRESS */}
          {isScrolled && !reduceMotion && (
            <motion.span
              aria-hidden="true"
              className="
                absolute bottom-0
                left-6 right-6
                h-[2px]
                origin-left
                rounded-full
                bg-burgundy/70
              "
              style={{
                scaleX: scrollYProgress,
              }}
            />
          )}
        </nav>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="
              fixed inset-0 z-40
              flex flex-col
              bg-ivory
              px-6 sm:px-10
              pb-8
              pt-28 sm:pt-32
              overflow-y-auto
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
            }}
          >
            {/* MOBILE NAV LINKS */}
            <ul
              className="
                flex flex-1 flex-col
                justify-center
                gap-1
                max-w-2xl mx-auto w-full
              "
            >
              {navigationLinks.map((link, index) => {
                const isActive = location.pathname === link.href;

                return (
                  <motion.li
                    key={link.href}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 20 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.05 + index * 0.055,
                      duration: reduceMotion ? 0 : 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`
                        group flex items-center justify-between
                        border-b border-warm-sand/40
                        py-4
                        text-[30px] sm:text-4xl
                        font-bold tracking-tight
                        transition-colors duration-300
                        ${
                          isActive
                            ? 'text-burgundy'
                            : 'text-charcoal hover:text-burgundy'
                        }
                      `}
                      style={{
                        fontFamily: 'var(--font-family-heading)',
                      }}
                    >
                      <span>{link.label}</span>

                      <span className="flex items-center gap-3">
                        {isActive && (
                          <span
                            className="
                              h-2 w-2
                              rounded-full
                              bg-burgundy
                            "
                            aria-hidden="true"
                          />
                        )}

                        <ArrowUpRight
                          size={22}
                          strokeWidth={1.6}
                          className="
                            opacity-0
                            -translate-x-2 translate-y-2
                            group-hover:opacity-100
                            group-hover:translate-x-0
                            group-hover:translate-y-0
                            transition-all duration-300
                          "
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* MOBILE CTA */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduceMotion ? 0 : 0.3,
                duration: reduceMotion ? 0 : 0.35,
              }}
              className="space-y-3 pt-6 max-w-2xl mx-auto w-full"
            >
              <Button
                href={siteConfig.consumerAppLink}
                size="lg"
                rounded="full"
                className="w-full justify-center gap-2"
              >
                Consumer App (v1.0.0)
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Button>

              <Button
                href={siteConfig.partnerAppLink}
                variant="outline"
                size="lg"
                rounded="full"
                className="w-full justify-center gap-2"
              >
                Partner App (v1.0.0)
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Button>

              <p className="text-center text-xs tracking-wide text-taupe pt-1">
                Northeast India and across the nation.
                <br />
                Group mobility platform.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
