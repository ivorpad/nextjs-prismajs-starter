import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head></Head>
        <title>Admin Template</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}