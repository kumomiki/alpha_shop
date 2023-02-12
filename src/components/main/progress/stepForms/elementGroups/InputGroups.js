import styles from './InputGroups.module.scss'


export function InputGroups({label, placeholder, type, maxLength}){
  return (
    <div className={styles.inputGroupContainer}>
      <div className={styles.inputLabel}>{label}</div>
      <input 
      type={type} 
      placeholder={placeholder} 
      maxLength={maxLength}
      />
    </div>
  )
}