import { RadioGroups } from "./components/main/progress/stepForms/elementGroups/RadioGroups.js";
import { StepOne } from "./components/main/progress/stepForms/StepOne.js";
import { StepThree } from "./components/main/progress/stepForms/StepThree.js";


function App() {
  return (
    <div className="App">
      <StepOne />
      <RadioGroups 
      label='標準運送'
      fee='0'
      price='免費'
      period='約3~7個工作天'
      id='shippingStandard'
      />
      <StepThree />
    </div>
  );
}

export default App;
