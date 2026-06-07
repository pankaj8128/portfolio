import { projects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import NeoButton from '../components/ui/NeoButton';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <main className={styles.page}>
      <div className={`${styles.content} container`}>
        {/* Header - centered, matching original */}
        <div className={styles.hero}>
          <h1 className={styles.heading}>FEATURED PROJECTS</h1>
          <div className={styles.headingBar} />
        </div>

        {/* Projects List - vertical, full-width */}
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Card - matching original exactly */}
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaHeading}>READY TO COLLABORATE?</h2>
          <p className={styles.ctaText}>
            Let's discuss how I can help build your next project.
          </p>
          <div className={styles.ctaButtons}>
            <NeoButton to="/contact" className={styles.ctaBtn}>
              REACH OUT
            </NeoButton>
            <NeoButton to="/resume" variant="neutral" className={styles.ctaBtn}>
              SEE MY EXPERIENCE
            </NeoButton>
          </div>
        </div>
      </div>
    </main>
  );
}
