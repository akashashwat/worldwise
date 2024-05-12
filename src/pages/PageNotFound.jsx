import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
import image from "../../public/dog-chilling.webp";

export default function PageNotFound() {
  return (
    <div className={styles.PageNotFound}>
      <div>
        <h1>Whoops! 🚧</h1>
        <h2>You may have mistyped the address or the page may have moved</h2>
        <img src={image} alt="dog-image" />
        <h2>Looks like this page went on vacation.</h2>
        Go to <Link to="/"> WorldWise</Link>
      </div>
    </div>
  );
}
