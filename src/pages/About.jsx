import { whatIDo } from '../data/whatIDo';
import WhatIDo from '../components/about/WhatIDo';
import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.page}>
      <div className={`${styles.content} container`}>
        <div className={styles.hero}>
          <span className={styles.label}>About Me</span>
          <h1 className={styles.heading}>
            Crafting Digital Solutions with
            <br />
            Modern Technologies.
          </h1>
          <p className={styles.bio}>
            I'm a Computer Engineering student and full-stack developer with a passion for
            building robust, scalable systems. My experience spans real-time web applications,
            production mobile apps, backend architecture with Node.js and Python, and database
            design. During a full-stack internship I hardened production APIs and built a shared
            theme system across a four-repository ecosystem. I enjoy tackling complex engineering
            challenges — from designing server-authoritative multiplayer game engines to building
            AI-powered verification pipelines. I'm always eager to learn emerging technologies and
            apply clean, maintainable practices to every project I build.
          </p>
        </div>

        <section className={styles.whatIDo}>
          <h2 className={styles.sectionTitle}>What I Do:</h2>
          <WhatIDo data={whatIDo} />
        </section>
      </div>
    </main>
  );
}
