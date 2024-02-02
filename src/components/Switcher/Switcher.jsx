import styles from "./Switcher.module.scss";
import { clsx } from "clsx";

function Switcher({ isYear, handler }) {
  const switcherContainer = clsx(styles.switcherContainer, "block");
  const switcherDiscount = clsx(styles.switcherDiscount, "discount");

  return (
    <div className={switcherContainer}>
      <div>Monthly Billing</div>
      <label className={styles.switcher}>
        <input type="checkbox" checked={isYear} onChange={handler} />
        <span className={styles.switcherSlider}></span>
      </label>
      <div>
        Yearly Billing
        <span className={switcherDiscount}>
          25% <span>discount</span>
        </span>
      </div>
    </div>
  );
}
export { Switcher };
