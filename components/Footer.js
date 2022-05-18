import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <div className={styles.link}>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image src="/img/link.png" height="40" width="40" alt="" />
            </div>
          </Link>
        </h1>
      </div>

      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM SETREET NY <br /> 213 2546 5896
        </div>
        <div className={styles.cardItem}>
          contact@younus.dev <br /> 213 2546 5896
        </div>
      </div>

      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US: <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          &copy; 2022 YOUNUS INTERECTIVE
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
