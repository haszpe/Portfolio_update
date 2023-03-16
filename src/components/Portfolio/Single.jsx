import React from "react";
import styles from "./Single.module.css";
import image from "../../assets/image.jpg";

const Single = () => {
  return (
    <>
    <div className={styles.wrap}>
      <div class={styles.card}>
        <img src={image} />
        <div>
          <h2>Title</h2>
          <h3>Tech Stack:</h3>
          <p>
            Soon you can invest in Sid Harman's new attractive property, set in
            the heart of Athens.
          </p>
          <button>Website</button>
          <button>Source</button>
        </div>
      </div>

      <div class={styles.card}>
        <img src={image} />
        <div>
          <h2>Title</h2>
          <h3>Tech Stack:</h3>
          <p>
            Soon you can invest in Sid Harman's new attractive property, set in
            the heart of Athens.
          </p>
          <button>Website</button>
          <button>Source</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Single;
