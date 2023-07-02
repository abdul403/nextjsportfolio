"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./page.module.css";

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account created successfully ");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="UserName"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />

        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
      {error && "Something Went Wrong"}
      <p>OR</p>
      <Link href={"/dashboard/login"} className={styles.link}>
        Login With an existing account
      </Link>
    </div>
  );
};

export default Register;
