import Posts from "../components/Posts";
import cookie from 'next-cookies'

function Home() {

  return (
    <div className="container mx-auto text-center mt-16">
      <h1>NextJS + PrismaJS Starter</h1>
      <h3>With Server-Side Authentication</h3>
      <Posts />
    </div>
  );
}


Home.getInitialProps = async function(ctx) {
  const {__logged_in_status} = cookie(ctx);
  
  const client = ctx.apolloClient
  //const state = client.extract()

  return { __logged_in_status };
};



export default Home;