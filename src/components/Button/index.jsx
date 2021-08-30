import styles from "./index.module.css";
export const Button = ({ customFunction }) => {
  return (
    <>
      <button className={styles.buttonSearch} onClick={customFunction}>
        Pesquisar
      </button>
    </>
  );
};
