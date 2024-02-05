import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Writers</b> Discover stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p2.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Welcome to VichaarDhaara</h1>
          <p className={styles.postDesc}>
            Your space for sharing stories and unleashing creativity. Here, your
            narratives about the world find a home, connecting diverse
            perspectives. Join us in weaving the fabric of ideas that
            collectively shapes our understanding.
          </p>
          <p className={styles.postDesc}>
            Login to Write your Ideas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
