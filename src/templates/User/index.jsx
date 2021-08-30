// import styles from "./index.module.css";
import { createRef, useEffect, useState } from "react";

import publicStyle from "../../publicModules/public.module.css";
import styles from "./index.module.css";
import { Input } from "../../components/Input";
import { useFetch } from "../../hooks/useFetch";
import { Button } from "../../components/Button";
import { UserFrame } from "../../components/UserFrame";
import { NoUserFounded } from "../../components/NoUserFounded";
// custom hook
import { useMedia } from "../../hooks/useMedia";
// context hook
import { UserContext } from "../../context/UserContext/context";
import { useContext } from "react";

export const User = () => {
  // ref which will be forward to Input component.
  const inputRef = createRef();

  const [fetchData] = useFetch();
  const [data, setData] = useState();
  const [didFounded, setDidFounded] = useState();

  const context = useContext(UserContext);
  const { setUser } = context;

  // custom media hook to watch our width size from window.screen
  const match = useMedia("(min-width: 1000px)");

  useEffect(() => {}, [match]);
  // end custom media hook

  // execute a async promise that will return as response, data which contains our user name, from the GitHub API.
  const doSearch = async () => {
    if (inputRef.current.value !== "") {
      let url = `https://api.github.com/users/${inputRef.current.value}`;
      /* Se você for utilizar uma rota autenticada, use o código de fetch com  headers */
      // const headers = {
      //   Authorization: `Token ${process.env.REACT_APP_TOKEN_ACESS_KEY}`,
      // };
      // const responseJSON = await fetchData(url, headers);
      const responseJSON = await fetchData(url);

      if (responseJSON.message !== undefined) {
        setDidFounded(false);
        setData(undefined);
        return;
      }
      if (responseJSON.login !== undefined) {
        setData(responseJSON);
        // set to our context the login
        setUser(responseJSON.login);
        setDidFounded(true);
      }
    }
  };

  return (
    <main>
      <div className={publicStyle.contentContainer}>
        <div className={publicStyle.gridTwo}>
          <section id="first-grid" className={styles.contentText}>
            <h1 className={styles.headingLowerSize}>
              Aqui você terá uma breve apresentação do que irá acontecer ao
              digitar um nome no input abaixo
            </h1>

            <p>
              Ao digitar o nome de um usuário no GitHub, a aplicação irá
              renderizar informações via{" "}
              <span className={publicStyle.colorGreen}>FETCH API.</span> Com
              esse recurso do JavaScript, dentro do React, conseguimos
              renderizar componentes com dados dinâmicos em tempo real e com
              extrema performace. {""}
              <i>
                No componente{" "}
                {match ? " à direita" : "mais abaixo, após digitar um usário"}
                {""}, é possível observar a renderização. Você também pode
                navegar entre os repositórios da pessoa ou seus repositórios
                favoritos.
              </i>
            </p>

            <Input ref={inputRef} />
            <Button customFunction={doSearch} />
          </section>
          {data !== undefined && data.id !== undefined && (
            <UserFrame data={data} />
          )}
          {!didFounded && <NoUserFounded />}
        </div>
      </div>
    </main>
  );
};
