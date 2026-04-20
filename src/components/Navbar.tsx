"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          QuickBites <span>Kitchen</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
        <div className={styles.actions}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
