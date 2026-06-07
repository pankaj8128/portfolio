import { personalInfo } from '../data/personal';
import NeoButton from '../components/ui/NeoButton';
import NeoBadge from '../components/ui/NeoBadge';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      <h1 className={styles.heading}>
        <NeoBadge variant="zinc" className={styles.badge}>
          <span>{personalInfo.name}</span>
        </NeoBadge>

        {personalInfo.heroHeading.map((line, i) => (
          <span key={i} className={styles.headingLine}>
            {line}
          </span>
        ))}
      </h1>

      <p className={styles.subtitle}>
        {personalInfo.heroSubtitle.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < personalInfo.heroSubtitle.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className={styles.cta}>
        <NeoButton to="/about" className={styles.ctaBtn}>
          Explore
        </NeoButton>
        <NeoButton to="/contact" variant="neutral" className={styles.ctaBtn}>
          Contact
        </NeoButton>
      </div>
    </main>
  );
}
