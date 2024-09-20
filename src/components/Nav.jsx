import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";
import ThemeIcon from "./other/ThemeIcon";
import { useContext } from "react";
import { ThemeContext } from "../providers/themeContext";
import { useAuthContext } from "../providers/authContext";


export default function Nav() {
  const {theme} = useContext(ThemeContext);
  const {isLoggedIn, logout} = useAuthContext();

  const themeClass = theme === "dark-theme" ? styles["dark-theme"] : styles["light-theme"];

  return (
    // <nav className={themeClass}>
    <nav className={`${styles.navbar} ${themeClass}`}>
      <h2><Link to="/">Home</Link></h2>
      <h2><Link to="/products">Products</Link></h2>
      <h2><Link to="/orders">Order</Link></h2>
      {isLoggedIn && <h2><Link to="/profile">Profile</Link></h2>}
      {isLoggedIn ? <h2 onClick={logout}>LogOut</h2> : <h2><Link to="/login">Login</Link></h2>}
      
      <h2><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></h2>
      <ThemeIcon/>
    </nav>
  )
}
