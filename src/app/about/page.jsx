import Button from "@component/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "About  page",
  description: "This is About  page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="Image"
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcreafting award winning digital experience
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Eius placeat
            quisquam,nemo soluta quia magnam dicta iste eum omnis Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Veritatis officia velit
            perferendis excepturi tempore obcaecati quaerat beatae ut nemo
            expedita accusamus amet facilis quas, assumenda reiciendis sit ipsum
            inventore error. asperiores velit. Exercitationem, beatae.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            voluptatum architecto qui est eius ipsa, officia in ut, odio ab
            dolore eligendi! Amet.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos porro aperiam, iure aut officia sint quasi eaque vero,
            quis nemo laboriosam. Corporis
            <br />
            <br />
            -quidem labore sunt voluptate illo aperiam dolores cupiditate?
            <br />
            <br />
            -quidem labore sunt voluptate illo aperiam dolores cupiditate?
          </p>

          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
