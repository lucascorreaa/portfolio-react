import { useEffect } from "react";
import styles from "./App.module.css";
import {
  LogoDefault,
  LogoOutline,
  ArrowDown,
  GitHubIcon,
  DribbleIcon,
  FigmaIcon,
} from "./assets/images";
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
            <p>
              <span>#</span> home
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span> works
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span> about-me
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span> contacts
            </p>
          </a>
          <select name="" id="">
            <option value="">EN</option>
            <option value="">PT</option>
          </select>
        </nav>
      </header>
      <aside className={styles.asideMedia}>
        <div className={styles.line}></div>
        <a href="">
          <img src={GitHubIcon} alt="icone do github" />
        </a>
        <a href="">
          <img src={DribbleIcon} alt="icone do dribble" />
        </a>
        <a href="">
          <img src={FigmaIcon} alt="icone do figma" />
        </a>
      </aside>
    </div>
  );
}

export default App;
