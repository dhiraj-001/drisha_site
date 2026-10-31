import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'lg' | 'md' | 'none';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const MotionLink = motion.create(Link);

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    'group relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy/40 disabled:opacity-50 disabled:cursor-not-allowed select-none [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:translate-x-1';

  const roundedClasses = {
    full: 'rounded-full',
    lg: 'rounded-xl',
    md: 'rounded-lg',
    none: 'rounded-none',
  };

  const variants = {
    primary:
      'bg-[#722f37] hover:bg-[#5a252c] !text-white shadow-sm hover:shadow-md shadow-burgundy/20 border border-burgundy/30 transition-all duration-300',
    secondary:
      'bg-champagne !text-charcoal hover:bg-champagne-light border border-warm-sand/50 shadow-sm hover:shadow-md transition-all duration-300',
    outline:
      'border-1.5 border-burgundy !text-burgundy bg-transparent hover:bg-burgundy hover:!text-white shadow-sm hover:shadow-md transition-all duration-300',
    'outline-white':
      'border-1.5 border-white/60 !text-white bg-white/10 hover:bg-white hover:!text-charcoal backdrop-blur-sm shadow-sm transition-all duration-300',
    white:
      'bg-white !text-charcoal hover:bg-ivory border border-warm-sand/30 shadow-sm hover:shadow-md transition-all duration-300',
    ghost:
      '!text-charcoal hover:!text-burgundy hover:bg-burgundy/5 active:bg-burgundy/10 transition-all duration-200',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs xl:text-sm font-medium tracking-wide',
    md: 'px-5 py-2.5 text-sm font-medium',
    lg: 'px-7 py-3.5 text-base font-semibold',
  };

  const classes = `${baseStyles} ${roundedClasses[rounded]} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) {
      return (
        <MotionLink
          to={href}
          className={classes}
          {...motionProps}
        >
          {children}
        </MotionLink>
      );
    }

    const defaultTarget = href.startsWith('http') ? '_blank' : undefined;
    const defaultRel = href.startsWith('http') ? 'noopener noreferrer' : undefined;

    return (
      <motion.a
        href={href}
        target={target ?? defaultTarget}
        rel={rel ?? defaultRel}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
