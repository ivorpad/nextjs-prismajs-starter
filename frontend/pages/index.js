import Posts from "../components/Posts";
import cookie from 'next-cookies'

function Home() {

  return (
    <div>
      <h1>Hello</h1>
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