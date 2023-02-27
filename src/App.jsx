import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer.jsx";
import { useContext, useState } from "react";
import {
  CartContext,
  CartContextProvider
} from "./components/main/cart/CartContext.js";
import { FormContext, FormContextProvider } from "./components/main/progress/FormContext.js";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const { totalPrice } = useContext(CartContext);
  const { paymentInfo } =useContext(FormContext)


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
      console.log(`付款資訊: ${paymentInfo}`)
    }
  }

  return (
    <div className={styles.appContainer}>
      <Header />
      <FormContextProvider>
        <CartContextProvider>
          <Main
            currentStep={currentStep}
            onBtnPrevClick={handleBtnPrevClick}
            onBtnNextClick={handleBtnNextClick}
          />
        </CartContextProvider>
      </FormContextProvider>
      <Footer />
    </div>
  );
}

export default App;
