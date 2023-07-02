"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import styles from "./page.module.css";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
    toast.success()
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
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

        <button className={styles.button}>Login</button>
      </form>

      <button className={styles.googleBtn} onClick={() => signIn("google")}>
        Login With Google
      </button>

      <div>
        <p className={styles.or}>OR</p>
        <Link className={styles.link} href={"/dashboard/register"}>
          want to register?
        </Link>
      </div>
    </div>
  );
};

export default Login;
