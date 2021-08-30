import styles from "./index.module.css";
import star from "../../img/star.svg";
import repos from "../../img/package.svg";
import { Link } from "react-router-dom";

export const UserFrame = ({ data }) => {
  return (
    <section id="second-grid" className={styles.userFrame}>
      <div className={styles.imgFrame}>
        <img
          className={styles.userAvatar}
          src={data.avatar_url}
          alt="fotografia do usuário pesquisado"
        />
      </div>

      <div className={styles.flexUserInfo}>
        <div className={styles.userFrameContent}>
          <p className={styles.userName}>
            {!!data.name ? data.name : data.login}
          </p>
        </div>
        <div className={styles.userFrameContent}>
          <img
            className={styles.iconSize}
            src={star}
            alt="uma estrela simbolizando os repositórios que o usuário deu like ou começou a seguir ou ainda os que são os seus favoritos."
          />
          <Link className={styles.starredLink} to="/starred">
            Favoritos
          </Link>
        </div>
        <div className={styles.userFrameContent}>
          <img
            className={styles.iconSize}
            src={repos}
            alt="uma imagem que representa um pacote, para simbolizar os repositórios de código que existem dentro do github do usuário. "
          />
          <Link className={styles.starredLink} to="/repos">
            Repositórios
          </Link>
        </div>
      </div>
    </section>
  );
};
