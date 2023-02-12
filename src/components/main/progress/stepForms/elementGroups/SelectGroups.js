import styles from './SelectGroups.module.scss'
import { ReactComponent as Rectangle } from '../../../../../icons/Rectangle.svg'


export function SelectGroups({label, options}){
  return (
    <div className={styles.selectGroupsContainer}>
      <div className={styles.selectLabel}>{label}</div>
      <div className={styles.selectWrapper}>
         <Rectangle className={styles.rectangle} />
         <select className={styles.selectItems} required>
          {options.map((option) => {
            return(
              <option value={option.value} key={option.value}>{option.name}</option>
            )
          })}
         </select>
      </div>
    </div>
  )
}
