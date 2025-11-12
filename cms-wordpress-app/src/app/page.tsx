"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import styles from "./page.module.css";

export default function HomePage() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 追加：要素参照 & CSS変数設定先
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const bottomRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef  = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    // マウントされていない場合は実行しない
    if (!isMounted || !containerRef.current) return;

    // 実際のビューポート高さを取得してCSS変数に設定（アドレスバーを考慮）
    const setViewportHeight = () => {
      // visualViewport APIが利用可能な場合はそれを使用（より正確）
      const vh = window.visualViewport?.height || window.innerHeight;
      const vhValue = `${vh}px`;
      
      // ルート要素にCSS変数を設定
      document.documentElement.style.setProperty("--vh", vhValue);
      
      // containerにも設定（念のため）
      if (containerRef.current) {
        containerRef.current.style.setProperty("--vh", vhValue);
      }
    };

    // gap を計算して CSS 変数へ
    const recalcGap = () => {
      if (!containerRef.current) return;
      // visualViewport APIが利用可能な場合はそれを使用
      const vh = window.visualViewport?.height || window.innerHeight;
      const topH = 51;
      const bottomH = 43.5;
      const logoH = 60;
      const navH = 272;
      const ratio = 148 / 636;           // 指定比率
      const totalGap = (vh - (topH + bottomH + logoH + navH));
      const gap = Math.max(24, totalGap * ratio); // 最小値24pxを確保

      containerRef.current.style.setProperty("--dyn-gap", `${gap}px`);
    };

    // 両方の関数を実行
    const updateAll = () => {
      setViewportHeight();
      recalcGap();
    };

    // 即座に実行
    updateAll();

    // リサイズとオリエンテーション変更のリスナーを追加
    window.addEventListener("resize", updateAll);
    window.addEventListener("orientationchange", updateAll);
    
    // visualViewport APIが利用可能な場合は、そのイベントも監視
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateAll);
      window.visualViewport.addEventListener("scroll", updateAll);
    }
    
    // 次のフレームでも実行（レイアウト確定後）
    requestAnimationFrame(() => {
      requestAnimationFrame(updateAll);
    });

    return () => {
      window.removeEventListener("resize", updateAll);
      window.removeEventListener("orientationchange", updateAll);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateAll);
        window.visualViewport.removeEventListener("scroll", updateAll);
      }
    };

  }, [isMounted]);

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
    <div ref={containerRef} className={styles.container}>
      {/* Top Section */}
      <header ref={topRef} className={styles.top}>
        <div
          className={`${styles.notice} ${isBackgroundLoaded ? styles.fadeIn : styles.hidden}`}
          style={{ animationDelay: "2s" }}
        >
          COMING SOON
        </div>
      </header>

      {/* Center Section */}
      <main className={styles.center}>
        <div
          ref={logoRef}
          className={`${styles.logo} ${isBackgroundLoaded ? styles.fadeIn : styles.hidden}`}
          style={{ animationDelay: "0s" }}
        >
          <img src="/wave_logo_2.svg" alt="WAVE" className={styles.logoImage} />
        </div>

        <nav
          ref={navRef}
          className={`${styles.navigation} ${isBackgroundLoaded ? styles.fadeIn : styles.hidden}`}
          style={{ animationDelay: "1s" }}
        >
          <div className={styles.leftGroup}>
            <Link href="https://bio.site/halca_wave" target="_blank" rel="noopener noreferrer" className={styles.link}>
              HAL ca / Works
            </Link>
            <Link href="https://www.instagram.com/wa_ve.jp/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Instagram
            </Link>
          </div>
          <div className={styles.centerSpacer} aria-hidden="true" />
          <div className={styles.rightGroup}>
            <Link href="https://www.facebook.com/wave.halca" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Facebook
            </Link>
            <a href="mailto:info@wa-ve.jp" className={styles.link}>Contact</a>
          </div>
        </nav>
      </main>

      {/* Bottom Section */}
      <footer ref={bottomRef} className={styles.bottom}>
        <div
          className={`${styles.copyright} ${isBackgroundLoaded ? styles.fadeIn : styles.hidden}`}
          style={{ animationDelay: "3s" }}
        >
          © WA/VE 2025
        </div>
      </footer>
    </div>
  );
}