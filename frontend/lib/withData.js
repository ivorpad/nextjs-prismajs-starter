import withApollo from "next-with-apollo";
import { ApolloClient, HttpLink, InMemoryCache} from "apollo-boost";

const httpLink = new HttpLink({
  uri: "http://localhost:4545",
  credentials: "include"
});
const cache = new InMemoryCache();


function createClient() {
  return new ApolloClient({
    link: httpLink,
    cache
  });
}

export default withApollo(createClient);
