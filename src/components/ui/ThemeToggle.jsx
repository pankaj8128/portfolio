import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.toggle} ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={styles.iconWrapper}>
        {theme === 'dark' ? (
          <Sun size={18} className={styles.icon} />
        ) : (
          <Moon size={18} className={styles.icon} />
        )}
      </div>
    </button>
  );
}
