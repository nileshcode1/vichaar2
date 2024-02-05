import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
     
      </div>
      <div className={styles.logo}>VichaarDhara</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;



 //<img src="/VD-white.png" alt="Logo" width={75} height={75} />;