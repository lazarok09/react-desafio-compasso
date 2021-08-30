import styles from "./index.module.css";
import { Link } from "react-router-dom";

export const Aside = () => {
  return (
    <aside>
      <div className={styles.asideContainer}>
        <div>
          <Link to="/">
            <h1 className={styles.title}>Dev Search</h1>
          </Link>
        </div>
        <div className={styles.flexBox}>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.links}
            href="https://github.com/lazarok09?tab=repositories"
          >
            GitHub
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={styles.links}
            href="https://www.linkedin.com/in/lazarok09/"
          >
            LinkedIn
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={styles.links}
            href="https://www.linkedin.com/in/lazarok09/"
          >
            Post
          </a>
        </div>
      </div>
    </aside>
  );
};
