import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Blogid(props) {
  const router = useRouter();
  const { result } = props;

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next App" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>blogid - {result}</h1>
        {router.query.id && <h3>{router.query.id}</h3>}
        <Link href="/">Back to Home</Link>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  console.log("getStaticProps is running");

  const { params } = context;
  const blogid = params.id;

  return {
    props: {
      result: blogid,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "react" } }, { params: { id: "vue" } }],
    fallback: false,
  };
}
