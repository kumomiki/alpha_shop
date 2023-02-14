import styles from './Header.module.scss'
import { ReactComponent as Hamburger } from '../icons/Hamburger.svg' 
import { ReactComponent as Logo } from '../icons/Logo.svg' 

export function Header(){
  return (
    <header class={styles.siteHeader}>
      <div class={styles.headerContainer}>
        <Hamburger 
        className={styles.hamburger}
        />
        <Logo 
        className={styles.logo}
        />
      </div>
    </header>
  )
}