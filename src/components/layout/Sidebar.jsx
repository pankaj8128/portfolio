import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen, onClose, links }) {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`${styles.link} ${
                    location.pathname === link.path ? styles.linkActive : ''
                  }`}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
