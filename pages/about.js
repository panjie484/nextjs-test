import Link from "next/link";

export default function about(props) {
  const { sitename, req_headers, req_method} = props;
  
  console.log(req_headers)
  return (
    <div>
      <h1>About - {sitename}</h1>
      <Link href="/">back to Home</Link>
      <div>
        <div>host: {req_headers.host}</div>
        <div>connection: {req_headers.connection}</div>
        <div>cache-control: {req_headers["cache-control"]}</div>
        <div>accept: {req_headers["accept"]}</div>
      </div>
      <div>Request Method: {req_method}</div>
    </div>
  );
}

// it fetches data from the server, will be slower than static.
export async function getServerSideProps(ctx) {
  console.log("getServerSideProps is running on About");

  const { params, req, res } = ctx;

  // Node.js HTTP
  // http://nodejs.org/api/http.html

  // console.log(req)
  // console.log('req.headers', req.headers)
  // console.log('req.method', req.method)

  // console.log(req.constructor.name)
  // console.log(res.constructor.name)

  return {
    props: {
      sitename: "Jay learns NextJS",
      req_headers: req.headers,
      req_method: req.method,
    },
  };
}
