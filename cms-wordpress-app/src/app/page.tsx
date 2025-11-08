import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <header className={styles.top}>
        <div className={styles.notice}>
          COMING SOON
        </div>
      </header>

      {/* Center Section */}
      <main className={styles.center}>
        <div className={styles.logo}>
          <img src="/wave_logo.svg" alt="WAVE" className={styles.logoImage} />
        </div>
        <nav className={styles.navigation}>
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
        <div className={styles.copyright}>
          © WA/VE 2025
        </div>
      </footer>
    </div>
  );
}