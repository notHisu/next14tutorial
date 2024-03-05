import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Huhu Help Me Please</div>
      <div className={styles.text}>
        <p>© 2024. All rights reserved.</p>
      </div>
    </div>
  );
}
