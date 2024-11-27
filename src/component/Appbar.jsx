import { NavLink } from "react-router-dom"
import styles from './Appbar.module.css'

const Appbar = () => {

  return (
    <nav className={styles.appbar}>
      <NavLink className={styles.brand} to="/">
        <span>Acontece Aqui</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/events' className={({ isActive }) => (isActive ? styles.active : "")}>
            Eventos
          </NavLink>
        </li>
        <li>
          <NavLink to='/categories' className={({ isActive }) => (isActive ? styles.active : "")} >
            Categorias
            </NavLink>
      </li>
      <li>
        <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : "")}>
          Sobre
        </NavLink>
      </li>
    </ul >
    </nav >
  )
}

export default Appbar