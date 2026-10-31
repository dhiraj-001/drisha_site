import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { siteConfig, footerLinks } from '../../data/content';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1a1715] text-white/80 -mt-px overflow-hidden">
      {/* Background subtle ambiance glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-sand/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative container-editorial pt-12 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block group mb-6 focus:outline-none" aria-label={siteConfig.name}>
                <img
                  src="/brand/drisha-logo-white.png"
                  alt={siteConfig.name}
                  width="200"
                  height="200"
                  className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>

              <p
                className="text-lg lg:text-xl font-semibold text-white/95 mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                {siteConfig.tagline}
              </p>

              <p className="text-sm leading-relaxed text-white/60 max-w-md mb-8">
                {siteConfig.supportingStatement}
              </p>
            </div>

            {/* Quick Contact & Regional Operational Status */}
            <div className="space-y-3 pt-6 border-t border-white/10 max-w-md">
              <div className="flex items-center gap-2.5 text-xs text-white/70">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-medium text-white/90">Live Operations</span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">Assam, Meghalaya & Across India</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60">
                <a
                  href="mailto:support@drishamobility.com"
                  className="flex items-center gap-1.5 hover:text-champagne transition-colors"
                >
                  <Mail size={13} className="text-warm-sand" />
                  <span>support@dnamobility.com</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-warm-sand" />
                  <span>Guwahati Hub</span>
                </span>
              </div>
            </div>
          </div>

          {/* Nav Links: 2 cols on mobile, 4 cols on tablet/desktop */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6 pt-2 lg:pt-0">
            {/* Explore */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-warm-sand mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-sand/60" />
                Explore
              </h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/65 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Partners */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-warm-sand mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-sand/60" />
                Partners
              </h4>
              <ul className="space-y-3">
                {footerLinks.partners.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/65 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-warm-sand mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-sand/60" />
                Business
              </h4>
              <ul className="space-y-3">
                {footerLinks.business.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/65 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-warm-sand mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-sand/60" />
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/65 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#141211] mt-3">
        <div className="container-editorial py-6 pb-8 sm:pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45 text-center sm:text-left">
            © {CURRENT_YEAR} DN Mobility Technologies Pvt. Ltd. All rights reserved.
          </p>

          <p className="text-xs text-white/40 text-center">
            {siteConfig.positioning}
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors py-1.5 px-3 rounded-full hover:bg-white/5"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
