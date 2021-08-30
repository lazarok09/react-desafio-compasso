import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import publicStyle from "../../publicModules/public.module.css";
import styles from "./index.module.css";

import { UserContext } from "../../context/UserContext/context";
// components
import { NoStarredFounded } from "../../components/NoStarredFounded";
// custom hook
import { useFetch } from "../../hooks/useFetch";

export const Starred = () => {
  const [fetchData] = useFetch();
  const [data, setData] = useState();
  const history = useHistory();

  const context = useContext(UserContext);
  const { user, setUser } = context;

  const fetchRef = useRef(async () => {
    let url = `https://api.github.com/users/${user}/starred`;
    /* Se você for utilizar uma rota autenticada, use o código de fetchData com headers */
    // const headers = {
    //   Authorization: `Token ${process.env.REACT_APP_TOKEN_ACESS_KEY}`,
    // };
    // const responseJSON = await fetchData(url, headers);
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
  const handleGoToRepos = () => {
    history.push("/repos");
    setUser(user);
  };
  return (
    <main>
      <div className={publicStyle.contentContainer}>
        <h2 className={styles.heading}>
          Aqui você pode{!!user ? "" : "rá"} ver todos os repositórios favoritos
          do usuário {""}
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
          {data?.map((starred) => (
            <div className={styles.container} key={starred.id}>
              <div>
                <p className={styles.title}>{starred.name}</p>
              </div>
              <div>
                <p className={styles.description}>
                  {starred.description
                    ? starred.description
                    : "esse repositório não contém descrição"}
                </p>
              </div>
              <div>
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href={starred.html_url}
                >
                  {starred.html_url}
                </a>
              </div>
            </div>
          ))}
          {/* Filter if our array have a empty value on return, that means the user does not have a  starred repository  */}
          {user && data?.filter((obj) => data[0] === "") && (
            <>
              <NoStarredFounded style={styles.upperParagraph} />
              <button
                onClick={handleBackToUser}
                className={styles.customButton}
              >
                Voltar
              </button>
              <button onClick={handleGoToRepos} className={styles.customButton}>
                Repositórios
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};
