import styles from "./Cart.module.scss";
import { ReactComponent as Minus } from "../../../icons/Minus.svg";
import { ReactComponent as Plus } from "../../../icons/Plus.svg";
import { useState } from "react";

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

function ProductLists({ data, onPlus, onMinus }) {
  const productItems = data.map((product) => (
    <div
      class={styles.productWrapper}
      data-count={product.quantity}
      data-price={product.price}
      key={product.id}
    >
      <img class={styles.imgContainer} src={product.img} alt={product.name} />
      <div class={styles.productInfo}>
        <div className={styles.productNameAndControl}>
          <div class={styles.productName}>{product.name}</div>
          <div class={styles.productControlContainer}>
            <div class={styles.productControl}>
              <Minus className={styles.minus}
              onClick={() => onMinus(product.id)} />
              <span class={styles.productCount}>{product.quantity}</span>
              <Plus className={styles.plus} 
              onClick={() => onPlus(product.id)} />
            </div>
          </div>
        </div>
        <div class={styles.productPrice}>${product.price}</div>
      </div>
    </div>
  ));

  return <div className={styles.productContainer}>{productItems}</div>;
}

export function Cart() {
  const [currentProducts, setCurrentProducts] = useState(products);

  function handlePlusClick(id) {
    setCurrentProducts(
      currentProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }else{
          return product
        }
      })
    );
  }

    function handleMinusClick(id) {
      let nextProducts = currentProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }else{
          return product
        }
      })

      nextProducts = nextProducts.filter((newProduct) => newProduct.quantity > 0);

      setCurrentProducts(nextProducts)
  }

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductLists
        data={currentProducts}
        onPlus={handlePlusClick}
        onMinus={handleMinusClick}
      />
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
