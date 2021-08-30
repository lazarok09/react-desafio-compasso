import { Link } from "react-router-dom";
import styles from "./index.module.css";
import house from "../../img/house.svg";
export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>

        <div>
          <Link to="/">
            <img
              className={styles.iconSize}
              src={house}
              alt="um ícone de uma casa em tamanho reduzido"
            />
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
    </footer>
  );
};
