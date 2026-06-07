import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Sidebar from './Sidebar';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { personalInfo } from '../../data/personal';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when resizing to desktop
  useEffect(() => {
    if (!isMobile && sidebarOpen) setSidebarOpen(false);
  }, [isMobile, sidebarOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.inner} container`}>
          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Link to="/" className={styles.logo} onClick={() => setSidebarOpen(false)}>
              {personalInfo.logoText}
            </Link>
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${styles.navLink} ${
                      location.pathname === link.path ? styles.navLinkActive : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMobile && (
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          links={navLinks}
        />
      )}
    </>
  );
}
