import { GitHubCat } from "../../components/GitHubCat";

import styles from "./index.module.css";
import publicStyle from "../../publicModules/public.module.css";

import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const goToUserRoute = () => {
    history.push("/user");
  };
  return (
    <>
      <main>
        <article className={publicStyle.contentContainer}>
          <div className={styles.gridMain}>
            <div className={styles.contentText}>
              <h2>Olá, bem vindo a minha aplicação React</h2>

              <p>
                Aqui você encontrará a minha implementação do {""}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/recrutamento-compasso/api-github-interview"
                >
                  Desafio Compasso
                </a>
              </p>
              <button
                onClick={goToUserRoute}
                className={publicStyle.customButton}
              >
                Começar
              </button>
            </div>
            <div className={styles.catIMGContainer}>
              <GitHubCat alt={"github cat"} />
            </div>
          </div>
        </article>
      </main>
    </>
  );
};
