import styles from "./index.module.css";
import { GitHubCat } from "../GitHubCat";
export const NoUserFounded = () => {
  return (
    <>
      <section className={styles.section}>
        <p className={styles.contentText}>Nenhum usuário encontrado... :(</p>
        <div className={styles.GitHubCatLowerSize}>
          <GitHubCat />
        </div>
      </section>
    </>
  );
};
