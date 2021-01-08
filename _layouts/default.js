import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";
import HeaderToo from "@components/HeaderToo";
import Headeroo from "@components/Header";
import Footeroo from "@components/Footer";
import styles from "../components/layout.module.css";

export default function DefaultLayout(props) {
    return (
        <main className={styles.container}>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <HeaderToo siteTitle="Welcome to my app!" />
            <Header />
            <Headeroo title="Welcome to my app!" />
            {props.children}
            <Footer />
            <Footeroo />
        </main>
    );
}
