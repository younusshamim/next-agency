import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Intro from "../components/Intro";
import Services from "../components/Services";
import { data } from "../data";
import Testimonials from "../components/Testimonials";

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agency Website</title>
        <meta name="description" content="Personal/Agency Website by next js" />
      </Head>

      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
