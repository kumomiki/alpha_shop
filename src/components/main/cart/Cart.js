import styles from "./Cart.module.scss";
import { ReactComponent as Minus } from "../../../icons/Minus.svg";
import { ReactComponent as Plus } from "../../../icons/Plus.svg";

const products = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

function ProductLists({ data }) {
  const productItems = data.map((product) => (
    <div
      class={styles.productWrapper}
      data-count={product.quantity}
      data-price={product.price}
      key={product.id}
    >
      <img class={styles.imgContainer} src={product.img} alt={product.name} />
      <div class={styles.productInfo}>
        <div class={styles.productName}>{product.name}</div>
        <div class={styles.productControlContainer}>
          <div class={styles.productControl}>
            <Minus />
            <span class={styles.productCount}>{product.quantity}</span>
            <Plus />
          </div>
        </div>
        <div class={styles.productPrice}>${product.price}</div>
      </div>
    </div>
  ));

  return <div className={styles.productContainer}>{productItems}</div>;
}

export function Cart() {
  return (
    <section className={styles.cartContainer}>
      <ProductLists data={products} />
      <div className={styles.cartInfoWrapper}>
      <div class={styles.cartInfoShipping}>
        <div class={styles.cartText}>運費</div>
        <div class={styles.cartPrice}>$待設定</div>
      </div>
      <div class={styles.cartInfoTotal}>
        <div class={styles.cartText}>小計</div>
        <div class={styles.cartPrice}>$待設定</div>
      </div>
      </div>
    </section>
  );
}
