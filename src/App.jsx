import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import styles from './App.module.scss'
import { Footer } from "./components/Footer.jsx";
import { useState } from 'react'




function App() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleBtnPrevClick(){
  if(currentStep > 1){
    setCurrentStep(currentStep - 1)
  }
}

function handleBtnNextClick(){
  if(currentStep < 3){
    setCurrentStep(currentStep + 1)
  }
}

  return (
    <div className={styles.appContainer}>
      <Header />
      <Main
      currentStep={currentStep} 
      onBtnPrevClick={handleBtnPrevClick}
      onBtnNextClick={handleBtnNextClick}
      />
      <Footer />
    </div>
  );
}

export default App;
