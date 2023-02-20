import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import styles from './App.module.scss'
import { Footer } from "./components/Footer.js";




function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Main
      currentStep={2} 
      />
      <Footer />
    </div>
  );
}

export default App;
