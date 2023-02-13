import { ProgressControl } from "./components/main/progress/ProgressControl.js";
import { StepOne } from "./components/main/progress/stepForms/StepOne.js";
import { StepThree } from "./components/main/progress/stepForms/StepThree.js";
import { StepTwo } from "./components/main/progress/stepForms/StepTwo.js";
import { StepProgress } from "./components/main/progress/StepProgress.js";


function App() {
  return (
    <div className="App">
      <StepProgress
      currentStep={3}
      />
      <StepOne />
      <StepTwo />
      <StepThree />
      <ProgressControl 
       currentStep={1}
      />
    </div>
  );
}

export default App;
