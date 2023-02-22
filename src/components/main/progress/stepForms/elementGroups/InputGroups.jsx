import styles from './InputGroups.module.scss'


export function InputGroups({label, placeholder, type, maxLength, id}){
  const InputId = 'input_' + id
  return (
    <div className={`${styles.inputGroupContainer} ${InputId}`}>
      <div className={styles.inputLabel}>{label}</div>
      <input 
      type={type} 
      placeholder={placeholder} 
      maxLength={maxLength}
      />
    </div>
  )
}