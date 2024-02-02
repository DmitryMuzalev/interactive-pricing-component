import styles from "./PricingComponent.module.scss";
function PricingComponent({ children }) {
  return <main className={styles.pricingComponent}>{children}</main>;
}
export { PricingComponent };
