import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "../Starred/index.module.css";
import publicStyle from "../../publicModules/public.module.css";

import { UserContext } from "../../context/UserContext/context";
// components
// custom hook
import { useFetch } from "../../hooks/useFetch";

export const Repos = () => {
  const [fetchData] = useFetch();
  const [data, setData] = useState();
  const history = useHistory();

  const context = useContext(UserContext);
  const { user, setUser } = context;

  const fetchRef = useRef(async () => {
    let url = `https://api.github.com/users/${user}/repos`;
    /* Se você for utilizar uma rota autenticada, use o código de fetch com  headers */
    // const headers = {
    //   Authorization: `Token ${process.env.REACT_APP_TOKEN_ACESS_KEY}`,
    // const responseJSON = await fetchData(url, headers);
    // };
    const responseJSON = await fetchData(url);
    setData(responseJSON);
    return responseJSON;
  });

  useEffect(() => {
    fetchRef.current();
  }, []);

  const handleBackToUser = () => {
    history.push("/user");
  };

  const handleGoToStarred = () => {
    history.push("/starred");
    setUser(user);
  };

  return (
    <main>
      <div className={publicStyle.contentContainer}>
        <h2 className={styles.heading}>
          Aqui você pode{!!user ? "" : "rá"} ver todos os repositórios do
          usuário {""}
          {user}
        </h2>
        {/* This part just shows if the user goes to /starred without enter a user to our input searchUser */}
        {!user && (
          <>
            <p className={styles.upperParagraph}>
              É preciso que você primeiro digite um usuário na página anterior.
            </p>
            <button onClick={handleBackToUser} className={styles.customButton}>
              Voltar
            </button>
          </>
        )}
        <div className={publicStyle.colorWhite}>
          {data?.map((repos) => (
            <div className={styles.container} key={repos.id}>
              <div>
                <p className={styles.title}>{repos.name}</p>
              </div>
              <div>
                <p className={styles.description}>
                  {repos.description
                    ? repos.description
                    : "esse repositório não contém descrição"}
                </p>
              </div>
              <div>
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href={repos.html_url}
                >
                  {repos.html_url}
                </a>
              </div>
            </div>
          ))}
          {/* Filter if our array have a empty value on return, that means the user does not have a  starred repository  */}
          {user && data?.filter((obj) => data[0] === "") && (
            <>
              <p className={styles.upperParagraph}>
                Esse usuário não tem mais repositórios
              </p>
              <button
                onClick={handleBackToUser}
                className={styles.customButton}
              >
                Voltar
              </button>
              <button
                onClick={handleGoToStarred}
                className={styles.customButton}
              >
                Favoritos
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};
