import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

function SkillBar({ name, level }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.skill} ref={ref}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{
            transform: visible ? `scaleX(${level / 100})` : 'scaleX(0)',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
}
