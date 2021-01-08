import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";
import links from "../data/links.json";
import places from "../data/places.json";
import tools from "../data/tools.json";

export default function Blog(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <p>List of posts:</p>
            <ul>
                {props.posts.map(function (post, idx) {
                    return (
                        <li key={idx}>
                            <Link href={"/posts/" + post.slug}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {links.map(function (post, idx) {
                    return (
                        <li key={idx}>
                            <Link href={"/posts/" + post.slug}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {places.map(function (post, idx) {
                    return (
                        <li key={idx}>
                            <Link href={"/posts/" + post.slug}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {tools.map(function (post, idx) {
                    return (
                        <li key={idx}>
                            <Link href={"/posts/" + post.slug}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </DefaultLayout>
    );
}

export async function getStaticProps() {
    const config = await getConfig();
    const allPosts = await getAllPosts();
    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description,
        },
    };
}
