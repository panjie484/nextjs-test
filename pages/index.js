import Head from "next/head";
import Link from "next/link";

export default function Home(props) {
  const { current } = props;

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="">Current Time is {current}</div>
        <div>
          <Link href={{ pathname: "blog/[id]", query: { id: "vue" } }}>
            Vue
          </Link>
        </div>
        <div>
          <Link href={{ pathname: "blog/[id]", query: { id: "react" } }}>
            React
          </Link>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  console.log("getStaticProps is running");
  const date = new Date();

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  const current = h + ":" + m + ":" + s;

  return {
    props: {
      current,
    },
    revalidate: 5, //it doesn't work on dev mode
  };
}
