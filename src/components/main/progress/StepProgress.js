import styles from './StepProgress.module.scss'
import { ReactComponent as Check} from '../../../icons/Check.svg'

function Step({step, currentStep}){
  return (
    <div className={styles.progressIconGroups}>
      <div class={currentStep >= step? styles.progressIconDone : styles.progressIconUndone}>
        <div class={styles.progressIconText}>{currentStep > step ? <Check />: step}</div>
      </div>
    </div>
  )
}


function ProgressLine({className}){
  return (
    <div className={className}></div>
  )
}

export function StepProgress({currentStep}){
  return (
    <section className={styles.stepProgressContainer}>
      <h2 className={styles.stepProgressTitle}>結帳</h2>
      <div className={styles.stepProgressWrapper}>
        <Step
        currentStep={currentStep}
        step={1}
        />
        <ProgressLine 
        className={styles.leftProgressLine} 
        />
        <Step
        currentStep={currentStep}
        step={2}
        />
        <ProgressLine className={`${currentStep >= 2 ? styles.progressLineDone : styles.progressIconUndone} ${styles.rightProgressLine}`}
        />
        <Step
        currentStep={currentStep}
        step={3}
        />
      </div>
    </section>
  )
}