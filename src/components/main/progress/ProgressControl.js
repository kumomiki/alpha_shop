import styles from "./ProgressControl.module.scss";
import {ReactComponent as PrevArrow } from '../../../icons/PrevArrow.svg'
import {ReactComponent as NextArrow } from '../../../icons/NextArrow.svg'


export function ProgressControl({ currentStep, phase, handleBtnPrevClick, handleBtnNextClick, className }) {
  return (
    <section class={`${styles.btnContainer} ${className}`} data-phase={phase}>
      <div className={styles.btnWrapper}>
        <button 
        onClick={handleBtnPrevClick}
        disabled={currentStep === 1 && true}
        class={styles.btnPrev}>
          <PrevArrow 
          className={styles.prevArrow}
          />
          <div className={styles.btnText}>上一步</div>
        </button>
        <button 
        onClick={handleBtnNextClick}
        class={styles.btnNext}>
          <div className={styles.btnText}>{currentStep === 3 ? '確認下單':'下一步'}</div>
          {currentStep < 3 && <NextArrow 
          className={styles.nextArrow}
          />}
          </button>
      </div>
    </section>
  );
}
