import styles from './App.module.css'
import LogoDefault from './assets/images/logo-default.svg'
function App() {
  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={LogoDefault} alt="Imagem do portfolio logo" />
          <h1>Lucas, O Suporte</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
