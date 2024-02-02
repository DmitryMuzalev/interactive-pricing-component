import { clsx } from "clsx";
import styles from "./CTA.module.scss";

function CTA() {
  const ctaContainer = clsx(styles.ctaContainer, " block");

  return (
    <div className={ctaContainer}>
      <ul className={styles.advantages}>
        <li>Unlimited websites</li>
        <li>100% data ownership</li>
        <li>Email reports</li>
      </ul>
      <button className="btn">Start my trial</button>
    </div>
  );
}
export { CTA };
