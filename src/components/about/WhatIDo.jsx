import { Server, Layout, Database, Bot } from 'lucide-react';
import styles from './WhatIDo.module.css';

const iconMap = {
  server: Server,
  layout: Layout,
  database: Database,
  bot: Bot,
};

export default function WhatIDo({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((item, index) => {
        const Icon = iconMap[item.icon] || Layout;
        return (
          <div
            key={index}
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.iconWrapper}>
              <Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
