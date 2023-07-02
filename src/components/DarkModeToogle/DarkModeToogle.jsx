"use client";

import React, { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";
import styles from "./darkModeToogle.module.css";

const DarkModeToogle = () => {
  const { toggle, mode } = useContext(Themecontext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToogle;
