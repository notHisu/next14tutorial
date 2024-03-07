import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20432992/pexels-photo-20432992/free-photo-of-funchal-at-madeira.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>06.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          deleniti quos tempora voluptas eaque tempore consequuntur earum optio
          quae deserunt sed corporis blanditiis provident voluptatem aliquid
          beatae vero vel inventore!
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE{" "}
        </Link>
      </div>
    </div>
  );
}
