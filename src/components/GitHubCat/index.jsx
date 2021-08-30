import githubcat from "./githubcat.png";
import styles from "./index.module.css";
export const GitHubCat = ({ altText }) => {
  return (
    <>
      <img className={styles.githubcatImage} src={githubcat} alt={altText} />
    </>
  );
};
