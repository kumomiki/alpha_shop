import styles from "./StepProgress.module.scss";
import { ReactComponent as Check } from "../../../icons/Check.svg";

function Step({ step, currentStep }) {
  return (
    <div className={styles.progressIconGroups}>
      <div
        class={
          currentStep >= step
            ? styles.progressIconDone
            : styles.progressIconUndone
        }
      >
        <div class={styles.progressIconText}>
          {currentStep > step ? <Check /> : step}
        </div>
      </div>
    </div>
  );
}

function ProgressLabel({ label }) {
  return <div className={styles.progressLabel}>{label}</div>;
}

function ProgressLine({ className }) {
  return <div className={className}></div>;
}

export function StepProgress({ currentStep, className }) {
  return (
    <section className={`${styles.stepProgressContainer} ${className}`}>
      <h2 className={styles.stepProgressTitle}>結帳</h2>
      <div className={styles.stepProgressWrapper}>
        <div className={styles.stepLabelGroups}>
          <Step currentStep={currentStep} step={1} />
          <ProgressLabel label="寄送地址" />
        </div>
        <ProgressLine className={styles.leftProgressLine} />
        <div className={styles.stepLabelGroups}>
          <Step currentStep={currentStep} step={2} />
          <ProgressLabel label="運送方式" />
        </div>
        <ProgressLine
          className={`${
            currentStep >= 2
              ? styles.progressLineDone
              : styles.progressIconUndone
          } ${styles.rightProgressLine}`}
        />
        <div className={styles.stepLabelGroups}>
          <Step currentStep={currentStep} step={3} />
          <ProgressLabel label="付款資訊" />
        </div>
      </div>
    </section>
  );
}
