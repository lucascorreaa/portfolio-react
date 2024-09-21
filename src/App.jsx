import styles from './App.module.css'
import LogoDefault from './assets/images/logo-default.svg'
import ArrowDown from './assets/images/arrow-down.svg'
function App() {
  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={LogoDefault} alt="Imagem do portfolio logo" />
          <h1>Lucas, O Suporte</h1>
        </div>
        <nav className={styles.nav}>
          <a href="">
            <p><span>#</span> home</p>
          </a>
          <a href="">
            <p><span>#</span> works</p>
          </a>
          <a href="">
            <p><span>#</span> about-me</p>
          </a>
          <a href="">
            <p><span>#</span> contacts</p>
          </a>
          <button>
            <p>EN</p>
            <img src={ArrowDown} alt="icone de seta para baixo" />
          </button>
        </nav>
      </header>
    </div>
  );
}

export default App;
