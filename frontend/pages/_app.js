import React from "react";
import { Container } from "next/app";

function Layout(props) {
  const { children } = props;
  return <div className="layout">{children}</div>;
}

function RootApp(props) {
  const { Component, pageProps } = props;
  return (
    <Container>
      <p>hello there</p>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  );
}

export default RootApp;