import styles from './Form.module.scss'

export function Form({title, children}){
  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>{title}</h3>
      {children}
    </div>

  )
}