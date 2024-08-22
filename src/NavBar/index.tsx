import { Menu } from "react-feather";
import styles from "./NavBar.module.css";
import Drawer from "../Drawer";
import React from "react";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className={styles.navBar}>
      <a className={styles.logo} href="">
        My App
      </a>
      <button
        className={styles.menuBtn}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Menu />
      </button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <ul className={styles.navMenu}>
          <li className={styles.navMenuItem}>
            <a href="">Home</a>
          </li>
          <li className={styles.navMenuItem}>
            <a href="">About</a>
          </li>
          <li className={styles.navMenuItem}>
            <a href="">Contact</a>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
}

export default NavBar;
