import { forwardRef } from "react";
import styles from "./index.module.css";

export const Input = forwardRef((props, ref) => {
  return (
    <>
      <label className={styles.inputUser} htmlFor="searchUser">
        <div className={styles.InputDiv}>
          <input
            ref={ref}
            placeholder="Digite o nome de um usuário no GitHub"
            id="searchUser"
            name="procurar usuário"
            type="text"
            maxLength={15}
          />
        </div>
      </label>
    </>
  );
});
