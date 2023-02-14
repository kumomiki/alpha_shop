import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";




function App() {
  return (
    <div className="App">
      <Header />
      <Main
      currentStep={3} 
      />
    </div>
  );
}

export default App;
