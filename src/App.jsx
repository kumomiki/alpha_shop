import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import styles from './App.module.scss'
import { Footer } from "./components/Footer.jsx";




function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Main
      />
      <Footer />
    </div>
  );
}

export default App;
