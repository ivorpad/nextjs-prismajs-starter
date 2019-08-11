import withApollo from "next-with-apollo";
import { ApolloClient, HttpLink, InMemoryCache} from "apollo-boost";

const httpLink = new HttpLink({
  uri: "http://localhost:4545",
  credentials: "include"
});

const cache = new InMemoryCache();


export default withApollo(({ctx, headers, initialState}) => {
  return new ApolloClient({
    link: httpLink,
    ssrMode: true,
    cache
  });
});
