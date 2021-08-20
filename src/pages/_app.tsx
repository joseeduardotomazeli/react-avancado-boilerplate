import { AppProps } from 'next/app';

import GlobalStyle from 'styles/global';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default App;
