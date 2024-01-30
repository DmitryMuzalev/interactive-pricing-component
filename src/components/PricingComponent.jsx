function PricingComponent() {
  return (
    <div>
      <div>100k pageviews</div>
      <div className="price">
        <div>$16.00</div>
        <span> / month</span>
      </div>
      <input type="range" />
      <div>
        <div>Monthly Billing</div>
        <input type="checkbox" />
        <div>
          Yearly Billing <span>25% discount</span>
        </div>
      </div>
      <div>
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
      </div>
    </div>
  );
}
export { PricingComponent };
