import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vanshika</h1>
        <p className={styles.description}>
          I'm an aspiring Software Developer with a strong foundation in coding and a passion for innovative technology solutions. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:vanshieverma@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
