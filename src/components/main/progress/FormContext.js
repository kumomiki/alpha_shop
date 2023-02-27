import { createContext, useState } from "react";

const paymentData = {
  cardName: "",
  cardNumber: "",
  expiredDate: "",
  cvc: "",
};

const FormContext = createContext(paymentData);

function FormContextProvider({ children }) {
  const [paymentInfo, setPaymentInfo] = useState(paymentData);

  function handleInputChange(e) {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <FormContext.Provider value={{ paymentInfo, setPaymentInfo, handleInputChange }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormContextProvider };
