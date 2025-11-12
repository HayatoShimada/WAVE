"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function HomePage() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const img = new Image();
    img.src = "/background.jpg";
    img.onload = () => {
      // 次のフレームでアニメーションを開始
      requestAnimationFrame(() => {
        setIsBackgroundLoaded(true);
      });
    };
    // エラー時も表示を開始する
    img.onerror = () => {
      requestAnimationFrame(() => {
        setIsBackgroundLoaded(true);
      });
    };
  }, []);

  // マウントされるまで何も表示しない
  if (!isMounted) {
    return <div className={styles.container}></div>;
  }

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <header className={styles.top}>
        <div className={`${styles.notice} ${isBackgroundLoaded ? styles.fadeIn : styles.hidden}`} style={{ animationDelay: "2s" }}>
          COMING SOON
        </div>
      </header>

      {/* Center Section */}
      <main className={styles.center}>
        <div className={`${styles.logo} ${isBackgroundLoaded ? styles.fadeIn : styles.hidden}`} style={{ animationDelay: "0s" }}>
          <img src="/wave_logo_2.svg" alt="WAVE" className={styles.logoImage} />
        </div>
        <nav className={`${styles.navigation} ${isBackgroundLoaded ? styles.fadeIn : styles.hidden}`} style={{ animationDelay: "1s" }}>
          <Link 
            href="https://bio.site/halca_wave" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            HAL ca / Works
          </Link>
          <Link 
            href="https://www.instagram.com/wa_ve.jp/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </Link>
          <Link 
            href="https://www.facebook.com/wave.halca" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Facebook
          </Link>
          <a 
            href="mailto:info@wa-ve.jp"
            className={styles.link}
          >
            Contact
          </a>
        </nav>
      </main>

      {/* Bottom Section */}
      <footer className={styles.bottom}>
        <div className={`${styles.copyright} ${isBackgroundLoaded ? styles.fadeIn : styles.hidden}`} style={{ animationDelay: "3s" }}>
          © WA/VE 2025
        </div>
      </footer>
    </div>
  );
}