import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          With a team of creative and innovative experts, we bring digital ideas
          to life with a goal to help your brand meet its objectives. We strive
          to create digital experiences that are not just beautiful, but also
          functional, innovative and result-oriented.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experiences </p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experiences </p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experiences </p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
}
