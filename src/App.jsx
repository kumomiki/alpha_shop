import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer.jsx";
import { useContext, useState } from "react";
import {
  CartContext,
  CartContextProvider
} from "./components/main/cart/CartContext.js";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const { totalPrice } = useContext(CartContext);

  function handleBtnPrevClick() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  function handleBtnNextClick() {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 3) {
      console.log(`小計: ${totalPrice()}`);
    }
  }

  return (
    <div className={styles.appContainer}>
      <Header />
      <CartContextProvider>
        <Main
          currentStep={currentStep}
          onBtnPrevClick={handleBtnPrevClick}
          onBtnNextClick={handleBtnNextClick}
        />
      </CartContextProvider>
      <Footer />
    </div>
  );
}

export default App;
