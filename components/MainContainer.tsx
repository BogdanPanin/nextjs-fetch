import { GetStaticProps } from "next";
import Head from "next/head";
import { A } from "../components/";
import styles from "../styles/header.module.scss";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs, js " + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <A href="/" className={styles.header__link} text="Главная"></A>
          <A
            href="/users"
            className={styles.header__link}
            text="Пользователи"
          ></A>
        </nav>
      </header>
      <>{children}</>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default MainContainer;
