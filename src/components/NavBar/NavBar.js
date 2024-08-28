import Container from "../Container/Container";
import { NavLink } from 'react-router-dom';
import styles from "./NavBar.module.scss"
import '../../styles/global.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.bar}>
          <a href="/"><span className="fa fa-tasks" /></a>
          <ul className={styles.list}>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;