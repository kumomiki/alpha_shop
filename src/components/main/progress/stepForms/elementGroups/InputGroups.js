import styles from './InputGroups.module.scss'


export function InputGroups({label, placeholder, type, maxLength, id, className}){
  const classNameId = 'input_' + id
  return (
    <div className={`${styles.inputGroupContainer} ${classNameId}`}>
      <div className={styles.inputLabel}>{label}</div>
      <input 
      type={type} 
      placeholder={placeholder} 
      maxLength={maxLength}
      className={className}
      />
    </div>
  )
}