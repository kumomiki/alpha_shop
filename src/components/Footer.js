import { ReactComponent as Logo } from "../icons/Logo.svg";
import styles from "./Footer.module.scss";

const items = [
  {
    title: "客戶服務",
    lists: ["運送說明", "退換貨相關", "付款資訊", "FAQ"],
  },
  {
    title: "關於我們",
    lists: ["品牌故事", "媒體聯繫", "Press kit"],
  },
  {
    title: "資訊",
    lists: ["隱私權政策", "Cookie", "GDPR"],
  },
  {
    title: "追蹤 ALPHA SHOP",
    lists: ["+886 02134-45678"],
  },
];

function FooterItems({ data }) {
  const footerItems = data.map((item) => (
    <div className={styles.itemsWrapper}>
      <h2 className={styles.itemsTitle}>{item.title}</h2>
      <div className={styles.items} key={item.lists}>
        {item.lists.map((listItem) => (
          <div className={styles.item} key={listItem}>
            {listItem}
          </div>
        ))}
      </div>
    </div>
  ));

  return <section className={styles.itemsContainer}>{footerItems}</section>;
}

export function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <Logo className={styles.logo} />
        <FooterItems data={items} />
      </div>
    </section>
  );
}
