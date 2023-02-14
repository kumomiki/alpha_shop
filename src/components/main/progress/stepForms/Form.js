import styles from './Form.module.scss'

export function Form({title, children, className}){
  return (
    <div className={`${styles.formContainer} ${className}`}>
      <h3 className={styles.formTitle}>{title}</h3>
      {children}
    </div>

  )
}