import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";
import Headeroo from "@components/Header";
import Footeroo from "@components/Footer";

export default function DefaultLayout(props) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <Header />
            <Headeroo title="Welcome to my app!" />
            {props.children}
            <Footer />
            <Footeroo />
        </main>
    );
}
