import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home(props) {
  const { current } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push({ pathname: "about" });
  };

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
        <button onClick={handleClick}>About</button>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  console.log("getStaticProps is running on index");
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
