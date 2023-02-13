import { Cart } from "./components/main/cart/Cart.js";
import { Progress } from "./components/main/Progress.js";



function App() {
  return (
    <div className="App">
      <Progress
      currentStep={3} 
      />
      <Cart />
    </div>
  );
}

export default App;
