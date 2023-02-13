import styles from './RadioGroups.module.scss'

export function RadioGroups({label, fee, price, period, id}){
  return (
    <div className={styles.radioContainer}>
    <label class={styles.radioGroup} data-price={fee}>
      <input id={id} type="radio" name="shipping"  checked/>
        <div class={styles.shippingInfo}>
          <div class={styles.shippingFeeInfo}>
            <div class={styles.text}>{label}</div>
            <div class={styles.price}>{price}</div>
          </div>
          <div class={styles.period}>{period}</div>
        </div>
    </label>
    </div>
  )
}