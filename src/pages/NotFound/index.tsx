import { Link } from "react-router-dom";
import Button from "../../components/Button/index";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Page not found!</h1>
      <p className={styles.err}>404</p>
      <p className={styles.text}>
        The requested page does not exist. It may have been deleted or an
        incorrect address was specified in the request.
      </p>
      <Link to="/">
        <Button text={"Go back to the main page"} />
      </Link>
    </div>
  );
};

export default NotFoundPage;
