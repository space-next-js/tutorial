'use client';

import Link from "next/link";
import styles from "../styles/movie-tabs.module.css";

export function Tabs({ activeTab, id }: { activeTab: string; id: string }) {
  return (
    <div className={styles.tabs}>
      <Link 
        href={`/movies/${id}?tab=info`}
        className={`${styles.tab} ${activeTab === "info" ? styles.active : ""}`}
      >
        비디오
      </Link>
      <Link 
        href={`/movies/${id}?tab=credits`}
        className={`${styles.tab} ${activeTab === "credits" ? styles.active : ""}`}
      >
        출연진
      </Link>
    </div>
  );
}