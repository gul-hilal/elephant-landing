import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./App.module.css";
import elephantPng from "./assets/elephant.png";

export default function ComingSoonElephantLab() {
  const root = useRef(null);
  const tl = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ repeat: -1, yoyo: true })
        .to(imgRef.current, { y: -6, duration: 1.8, ease: "sine.inOut" }, 0)
        .to("#shadow", { scale: 0.94, opacity: 0.65, duration: 1.8, transformOrigin: "50% 50%", ease: "sine.inOut" }, 0);

      gsap.timeline({ repeat: -1, yoyo: true })
        .to("#glow", { opacity: 0.9, scale: 1.06, duration: 1.6, transformOrigin: "50% 50%", ease: "sine.inOut" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.brand}>
          elephantlab<span className={styles.muted}>.studio</span>
        </h1>

        <div className={styles.stage}>
          <div id="glow" className={styles.glow} />
          <div className={styles.shadowWrap}>
            <svg width="260" height="40" viewBox="0 0 260 40" fill="none">
              <ellipse id="shadow" cx="130" cy="20" rx="120" ry="12" fill="black" opacity="0.45"/>
            </svg>
          </div>
          <img src={elephantPng} alt="Elephant" ref={imgRef} className={styles.elephantImg} />
        </div>

        <div className={styles.copy}>
          <p className={styles.headline}>Coming Soon</p>
          <p className={styles.sub}>
            Sanat × teknoloji tabanlı deneyimler. İlk gösterim için yakında tekrar bak.
          </p>
          <blockquote className={styles.motto}>
            “Fil, doğruluğu, aklı ve ölçülü olmayı simgeler.” <span>—</span>
          </blockquote>
        </div>

        <div className={styles.links}>
          
          
          <a href="#">Instagram</a>
          <span>•</span>
          <a href="#">Behance</a>
        </div>
      </div>
    </div>
  );
}
