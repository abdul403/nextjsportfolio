"use client";

import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// fetching data using client side component using useEffect

const Dashboard = () => {
  // const [data, setData] = useState([]);

  // const [error, setError] = useState(false);
  // const [isloading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();
  console.log(session);

  const router = useRouter();

  //  using SWR -> stale while revalidate

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { error, mutate, isLoading, data } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,

    fetcher
  );

  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          img,
          content,
          username: session.data.user.name,
        }),
      });

      e.target.reset();
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.img}
                      className={styles.img}
                      alt="image"
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.postDelete}
                    onClick={() => {
                      handleDelete(post._id);
                    }}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>

        <form onSubmit={handleSubmit} className={styles.new}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
          />
          <input type="text" placeholder="Image Url" className={styles.input} />
          <textarea
            placeholder="Content"
            cols="30"
            rows="10"
            className={styles.textArea}
          ></textarea>

          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
