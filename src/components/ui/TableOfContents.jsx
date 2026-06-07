import { Menu, ArrowUp, ChevronRight } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import NeoButton from './NeoButton';
import styles from './TableOfContents.module.css';

export default function TableOfContents({ sections, className = '', style = {} }) {
  const sectionIds = sections.map((s) => s.id);
  const activeId = useScrollSpy(sectionIds);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 56 + 20; // HEADER_HEIGHT + offset
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`${styles.toc} ${className}`} style={style} aria-label="Table of Contents">
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerIconWrapper}>
          <Menu size={20} strokeWidth={3} />
        </div>
        <div>
          <h3 className={styles.headerTitle}>CONTENTS</h3>
          <p className={styles.headerSubtitle}>NAVIGATE RESUME</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {sections.map((section, index) => {
          const isActive = activeId === section.id;
          return (
            <NeoButton
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              variant={isActive ? 'default' : 'neutral'}
              shadow="sm"
              className={styles.item}
            >
              <div className={`${styles.number} ${isActive ? styles.numberActive : ''}`}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className={styles.label}>{section.title}</div>
              <div className={styles.arrow}>
                <ChevronRight size={16} strokeWidth={2.5} />
              </div>
            </NeoButton>
          );
        })}
      </nav>

      {/* Scroll to Top button */}
      <div className={styles.footer}>
        <NeoButton
          variant="zinc"
          shadow="sm"
          onClick={scrollToTop}
          className={styles.backToTop}
        >
          <ArrowUp size={16} strokeWidth={2.5} />
          <span className={styles.backToTopText}>BACK TO TOP</span>
        </NeoButton>
      </div>
    </div>
  );
}
