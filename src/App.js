import { StepOne } from "./components/main/progress/stepForms/StepOne.js";
import { StepThree } from "./components/main/progress/stepForms/StepThree.js";
import { StepTwo } from "./components/main/progress/stepForms/StepTwo.js";
import { StepProgress } from "./components/main/progress/StepProgress.js";


function App() {
  return (
    <div className="App">
      <StepProgress/>
      <StepOne />
      <StepTwo />
      <StepThree />
    </div>
  );
}

export default App;
