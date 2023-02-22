import styles from './Main.module.scss'
import { Cart } from './main/cart/Cart'
import { ProgressControl } from './main/progress/ProgressControl'
import { StepOne } from './main/progress/stepForms/StepOne'
import { StepThree } from './main/progress/stepForms/StepThree'
import { StepTwo } from './main/progress/stepForms/StepTwo'
import { StepProgress } from './main/progress/StepProgress'
import { useState } from 'react'


export function Main(){
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
    <section className={styles.MainContainer}>
      <StepProgress
      className={styles.stepProgress}
      currentStep={currentStep}
      />
      <div className={styles.stepForms}>
      {currentStep === 1 && <StepOne/> }
      {currentStep === 2 && <StepTwo /> }
      {currentStep === 3 && <StepThree />}
      </div>
      <Cart
      className={styles.cart}
      />
      <ProgressControl
      className={styles.progressControl}
      currentStep={currentStep} 
      onBtnPrevClick={handleBtnPrevClick}
      onBtnNextClick={handleBtnNextClick}
      />
    </section>
  )
}