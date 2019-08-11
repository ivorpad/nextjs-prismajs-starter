import App, { Container } from "next/app";
import Page from '../components/Page'
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo'

// function Layout(props) {
//   const { children } = props;
//   return <div className="layout">{children}</div>;
// }

class RootApp extends App {

    static async getInitialProps({ Component, ctx }) {
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      pageProps.query = ctx.query;
      return { pageProps };
  }

  render() {
     const { Component, apollo, pageProps } = this.props;
     return (
       <Container>
         <ApolloProvider client={apollo}>
            <Page apolloClient={apollo}>
              <Component {...pageProps} />
            </Page>
         </ApolloProvider>
       </Container>
     );
  }
}


export default withApollo(RootApp);