import styles from "./ProgressControl.module.scss";
import {ReactComponent as PrevArrow } from '../../../icons/PrevArrow.svg'
import {ReactComponent as NextArrow } from '../../../icons/NextArrow.svg'


export function ProgressControl({ currentStep, phase, onBtnPrevClick, onBtnNextClick, className }) {
  return (
    <section
      className={`${styles.btnContainer} ${className}`}
      data-phase={phase}
    >
      <div className={styles.btnWrapper}>
        <button
          onClick={onBtnPrevClick}
          disabled={currentStep === 1 && true}
          className={styles.btnPrev}
        >
          <PrevArrow className={styles.prevArrow} />
          <div className={styles.btnText}>上一步</div>
        </button>
        <button onClick={onBtnNextClick} className={styles.btnNext}>
          <div className={styles.btnText}>
            {currentStep === 3 ? "確認下單" : "下一步"}
          </div>
          {currentStep < 3 && <NextArrow className={styles.nextArrow} />}
        </button>
      </div>
    </section>
  );
}
