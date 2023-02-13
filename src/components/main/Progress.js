import styles from './Progress.module.scss'
import { ProgressControl } from './progress/ProgressControl'
import { StepOne } from './progress/stepForms/StepOne'
import { StepThree } from './progress/stepForms/StepThree'
import { StepTwo } from './progress/stepForms/StepTwo'
import { StepProgress } from './progress/StepProgress'

export function Progress({currentStep}){
  return (
    <section className={styles.progressContainer}>
      <StepProgress
      currentStep={currentStep}
      />
      {currentStep === 1 && <StepOne /> }
      {currentStep === 2 && <StepTwo /> }
      {currentStep === 3 && <StepThree />}
      <ProgressControl
      currentStep={currentStep} />
    </section>
  )
}