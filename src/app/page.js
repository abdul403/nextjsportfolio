import Button from "@component/components/Button/Button";
import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";

export const metadata = {
  title: "Landing page",
  description: "This is Landing page",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry
        </p>

        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="Hero Image" />
      </div>
    </div>
  );
}
