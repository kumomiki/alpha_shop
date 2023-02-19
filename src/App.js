import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import styles from './App.module.scss'




function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Main
      currentStep={2} 
      />
    </div>
  );
}

export default App;
