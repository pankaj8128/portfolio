import { Download } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { experiences } from '../data/experience';
import { education } from '../data/education';
import { technicalSkills, otherSkills, knowledge } from '../data/skills';
import NeoButton from '../components/ui/NeoButton';
import NeoBadge from '../components/ui/NeoBadge';
import TableOfContents from '../components/ui/TableOfContents';
import Timeline from '../components/resume/Timeline';
import Skills from '../components/resume/Skills';
import { useIsLarge } from '../hooks/useMediaQuery';
import styles from './Resume.module.css';

const tocSections = [
  { id: 'summary', title: 'Summary' },
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'technical-skills', title: 'Technical Skills' },
  { id: 'other-skills', title: 'Other Skills' },
  { id: 'knowledges', title: 'Knowledges' },
];

const experiencesTimeline = experiences.map((exp) => ({
  title: exp.title,
  institution: exp.company,
  period: exp.period,
  description: exp.description,
  highlights: exp.highlights,
}));

const educationsTimeline = education.map((edu) => ({
  title: edu.field,
  institution: edu.school,
  period: edu.period,
  description: edu.description,
}));

export default function Resume() {
  const isLarge = useIsLarge();

  return (
    <main className={`${styles.page} container`}>
      <div className={styles.layout}>
        {/* Main content */}
        <div className={styles.main}>
          <h1 className={styles.heading}>Resume</h1>

          {/* Download section */}
          <div className={styles.downloadSection}>
            <p className={styles.downloadText}>
              Download my resume for a detailed summary of my experience.
            </p>
            <NeoButton
              href={personalInfo.resumeUrl}
              external
              variant="zinc"
              size="sm"
              shadow="sm"
            >
              <Download size={16} strokeWidth={2.5} />
              Download Resume (PDF)
            </NeoButton>
          </div>

          {/* Summary */}
          <section id="summary" className={`${styles.section} scroll-mt`}>
            <h2 className={styles.sectionTitle}>Summary:</h2>
            <p className={styles.text}>
              Driven Computer Engineering student with strong full-stack development skills and a
              focus on building production-grade, scalable applications. Experienced in designing
              real-time systems with WebSockets, architecting RESTful backends with Node.js and
              Python, and building interactive frontends with React. Proficient in relational
              database design, Docker containerization, and clean code practices. Solved 350+
              problems on LeetCode demonstrating strong DSA proficiency. Seeking challenging
              opportunities to apply engineering fundamentals to impactful software projects.
            </p>
          </section>

          {/* Experience */}
          <section id="experience" className={`${styles.section} scroll-mt`}>
            <h2 className={styles.sectionTitle}>Experience:</h2>
            <Timeline data={experiencesTimeline} />
          </section>

          {/* Education */}
          <section id="education" className={`${styles.section} scroll-mt`}>
            <h2 className={styles.sectionTitle}>Education:</h2>
            <Timeline data={educationsTimeline} />
          </section>

          {/* Technical Skills */}
          <section id="technical-skills" className={`${styles.section} scroll-mt`}>
            <h2 className={styles.sectionTitle}>Technical Skills:</h2>
            <Skills data={technicalSkills} />
          </section>

          {/* Other Skills */}
          <section id="other-skills" className={`${styles.section} scroll-mt`}>
            <h2 className={styles.sectionTitle}>Other Skills:</h2>
            <Skills data={otherSkills} />
          </section>

          {/* Knowledges */}
          <section id="knowledges" className={`${styles.section} scroll-mt`}>
            <h2 className={styles.sectionTitle}>Knowledges:</h2>
            <div className={styles.tagCloud}>
              {knowledge.map((item) => (
                <NeoBadge key={item} shadow="sm">
                  {item}
                </NeoBadge>
              ))}
            </div>
          </section>
        </div>

        {/* Spacer */}
        <div className={styles.spacer} />

        {/* Table of Contents Sidebar */}
        <div className={styles.sidebar}>
          {isLarge && (
            <TableOfContents
              sections={tocSections}
              className={styles.toc}
            />
          )}
        </div>
      </div>
    </main>
  );
}
