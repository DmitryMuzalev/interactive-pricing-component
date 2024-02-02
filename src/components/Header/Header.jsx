import styles from "./Header.module.scss";
import { ReactComponent as PatternCircles } from "../../assets/pattern-circles.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Simple, traffic-based pricing</h1>
        <p>
          <span>Sing-up for our 30-day trial.</span>
          <span>No credit card required.</span>
        </p>
      </div>
      <PatternCircles className={styles.headerIcon} />
    </header>
  );
}
export { Header };
