import { createContext, useState } from "react";

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

const CartContext = createContext(products);

function CartContextProvider({ children }) {
  const [currentProducts, setCurrentProducts] = useState(products);

  const totalPrice = function isTotal() {
    let total = 0;
    currentProducts.map((product) => (total = total + product.price));
    return total;
  };

  return (
    <CartContext.Provider
      value={{ currentProducts, setCurrentProducts, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
