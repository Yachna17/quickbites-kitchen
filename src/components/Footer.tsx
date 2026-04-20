import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brand}>
          <h3>QuickBites <span>Kitchen</span></h3>
          <p>Healthy 15-Minute Recipes for Busy People. We believe cooking at home should be fast, delicious, and good for you.</p>
        </div>
        <div className={styles.links}>
          <h4>Categories</h4>
          <Link href="/category/breakfast">Breakfast</Link>
          <Link href="/category/lunch">Lunch</Link>
          <Link href="/category/dinner">Dinner</Link>
          <Link href="/category/snacks">Snacks</Link>
        </div>
        <div className={styles.links}>
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} QuickBites Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
}
