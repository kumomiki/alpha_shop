import styles from './RadioGroups.module.scss'

export function RadioGroups({label, fee, price, period, id}){
  return (
    <div className={styles.radioContainer}>
      <label className={styles.radioGroup} data-price={fee}>
        <input id={id} type="radio" name="shipping" checked />
        <div className={styles.shippingInfo}>
          <div className={styles.shippingFeeInfo}>
            <div className={styles.text}>{label}</div>
            <div className={styles.price}>{price}</div>
          </div>
          <div className={styles.period}>{period}</div>
        </div>
      </label>
    </div>
  );
}