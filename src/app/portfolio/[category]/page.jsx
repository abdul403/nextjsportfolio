import Button from "@component/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import NotFound, { notFound } from "next/navigation";
import { items } from "./data";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  const category = params.category;

  const capatilizeWord = category.toUpperCase();

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{capatilizeWord}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
