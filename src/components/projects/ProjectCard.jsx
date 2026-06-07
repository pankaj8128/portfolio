import { ExternalLink, Code, Smartphone, Monitor } from 'lucide-react';
import NeoBadge from '../ui/NeoBadge';
import NeoButton from '../ui/NeoButton';
import styles from './ProjectCard.module.css';

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const categoryColors = {
  'Web Development': '#57534e',
  'Mobile Development': '#000000',
  'Desktop Application': '#475569',
  'Enterprise Software': '#0d9488',
};

const categoryIcons = {
  'Web Development': Code,
  'Mobile Development': Smartphone,
  'Desktop Application': Monitor,
};

export default function ProjectCard({ project }) {
  const CategoryIcon = categoryIcons[project.category] || Code;
  const categoryBg = categoryColors[project.category] || '#57534e';

  return (
    <article className={styles.card}>
      {/* Category Header */}
      <div className={styles.categoryHeader} style={{ backgroundColor: categoryBg }}>
        <CategoryIcon size={20} color="#fff" strokeWidth={2.5} />
        <span className={styles.categoryText}>{project.category?.toUpperCase()}</span>
      </div>

      {/* Title & Summary */}
      <div className={styles.header}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.summary}>{project.summary}</p>
      </div>

      <div className={styles.body}>
        {/* Description Box */}
        <div className={styles.descriptionBox}>
          <p className={styles.description}>{project.description}</p>
        </div>

        {/* Tech Stack */}
        {project.techStack?.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>TECH STACK</h3>
            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <NeoBadge key={tech} variant="neutral" shadow="none" className={styles.techBadge}>
                  {tech}
                </NeoBadge>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures?.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>KEY FEATURES</h3>
            <div className={styles.featuresGrid}>
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureDot} />
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className={styles.footer}>
        <NeoButton
          href={project.githubUrl}
          external
          variant="zinc"
          shadow="default"
          className={`${styles.actionBtn} ${!project.githubUrl ? styles.disabled : ''}`}
        >
          <GithubIcon size={20} />
          VIEW CODE
        </NeoButton>
        <NeoButton
          href={project.liveUrl || undefined}
          external
          variant="default"
          shadow="default"
          className={`${styles.actionBtn} ${!project.liveUrl ? styles.disabled : ''}`}
        >
          <ExternalLink size={20} strokeWidth={2.5} />
          LIVE DEMO
        </NeoButton>
      </div>
    </article>
  );
}
