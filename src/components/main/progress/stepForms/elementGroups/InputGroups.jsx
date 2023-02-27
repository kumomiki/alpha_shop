import { useContext } from 'react'
import { FormContext } from '../../FormContext'
import styles from './InputGroups.module.scss'


export function InputGroups({label, placeholder, type, maxLength, id}){
  const { handleInputChange } = useContext(FormContext)
  const InputId = 'input_' + id

  return (
    <div className={`${styles.inputGroupContainer} ${InputId}`}>
      <div className={styles.inputLabel}>{label}</div>
      <input 
      type={type}
      id={id}
      placeholder={placeholder} 
      maxLength={maxLength}
      onChange={handleInputChange}
      />
    </div>
  )
}