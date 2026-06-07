import { Link } from 'react-router-dom';
import styles from './NeoButton.module.css';

export default function NeoButton({
  children,
  href,
  to,
  variant = 'default',
  size = 'default',
  shadow = 'default',
  className = '',
  external = false,
  ...props
}) {
  const classes = [
    styles.btn,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`shadow-${shadow}`],
    className,
  ].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
