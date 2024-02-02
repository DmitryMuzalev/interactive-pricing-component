import { clsx } from "clsx";
import styles from "./Range.module.scss";

function Range({ progress, prise, pageviews, isYear, handler }) {
  const rangeContainer = clsx(styles.rangeContainer, "block");

  const formatMoney = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cost = !isYear
    ? formatMoney.format(prise)
    : formatMoney.format(prise - prise * 0.25);

  return (
    <div className={rangeContainer}>
      <p className={styles.pageviews}>{`${pageviews} pageviews`}</p>
      <div className={styles.price}>
        <div className={styles.priceMoney}>{cost}</div>
        <span>{` / ${isYear ? "year" : "month"}`}</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={25}
        value={progress}
        onChange={handler}
        style={{
          background: `linear-gradient(to right, var(--cyan-100) ${progress}%, var(--blue-200) ${progress}%)`,
        }}
      />
    </div>
  );
}
export { Range };
