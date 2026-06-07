import styles from './NeoBadge.module.css';

export default function NeoBadge({
  children,
  variant = 'default',
  shadow = 'none',
  className = '',
  ...props
}) {
  const classes = [
    styles.badge,
    styles[`variant-${variant}`],
    styles[`shadow-${shadow}`],
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
