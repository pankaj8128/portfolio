import styles from './Timeline.module.css';

export default function Timeline({ data }) {
  return (
    <ul className={styles.container}>
      {data.map((item, index) => (
        <li key={index} className={styles.timeline}>
          <div className={styles.title}>
            {item.title}
          </div>
          <div className={styles.institution}>
            {item.institution}
          </div>
          <div className={styles.period}>
            {item.period}
          </div>
          <div className={styles.description}>
            {item.description && <p>{item.description}</p>}
            {item.highlights && item.highlights.length > 0 && (
              <ul>
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.line}>
            <div className={styles.bullet}></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
