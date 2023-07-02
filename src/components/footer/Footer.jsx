import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>@webDev, All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={20}
          height={20}
          className={styles.icons}
          alt="kalam Facebook Accont "
        />
        <Image
          src="/2.png"
          width={20}
          className={styles.icons}
          height={20}
          alt="kalam Instagram Accont "
        />
        <Image
          src="/3.png"
          width={20}
          className={styles.icons}
          height={20}
          alt="kalam Twitter Accont "
        />
        <Image
          src="/4.png"
          width={20}
          className={styles.icons}
          height={20}
          alt="kalam Youtube Accont "
        />
      </div>
    </div>
  );
};

export default Footer;
