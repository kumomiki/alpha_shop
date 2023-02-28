import styles from "./Header.module.scss";
import { ReactComponent as Hamburger } from "../icons/Hamburger.svg";
import { ReactComponent as Logo } from "../icons/Logo.svg";
import { ReactComponent as Search } from "../icons/Search.svg";
import { ReactComponent as ShoppingCart } from "../icons/ShoppingCart.svg";
import { ReactComponent as Moon } from "../icons/Moon.svg";

export function Header({ handleHamburgerClick }) {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        <Hamburger className={styles.hamburger} />
        <a href="/" className={styles.logo}>
          <Logo />
        </a>
        <nav className={`${styles.navMenuContainer} ${styles.menuHidden}`}>
          <ul className={styles.navMenuWrapper} disabled={handleHamburgerClick}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                男款
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                女款
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                最新消息
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                客製商品
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">
                聯絡我們
              </a>
            </li>
          </ul>
        </nav>
        <div className={`${styles.navIconList} ${styles.menuHidden}`}>
          <Search />
          <ShoppingCart className={styles.navShoppingCart} />
          <Moon />
        </div>
      </div>
    </header>
  );
}
