import Button from "@component/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact  page",
  description: "This is Contact  page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgcontainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.img} />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>{" "}
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
