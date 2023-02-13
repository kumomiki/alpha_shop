import styles from './Main.module.scss'
import { Cart } from './main/cart/Cart'
import { ProgressControl } from './main/progress/ProgressControl'
import { StepOne } from './main/progress/stepForms/StepOne'
import { StepThree } from './main/progress/stepForms/StepThree'
import { StepTwo } from './main/progress/stepForms/StepTwo'
import { StepProgress } from './main/progress/StepProgress'



export function Main({currentStep}){
  return (
    <section className={styles.MainContainer}>
      <StepProgress
      currentStep={currentStep}
      />
      {currentStep === 1 && <StepOne /> }
      {currentStep === 2 && <StepTwo /> }
      {currentStep === 3 && <StepThree />}
      <Cart />
      <ProgressControl
      currentStep={currentStep} />
    </section>
  )
}