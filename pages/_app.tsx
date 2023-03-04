import "@components/styles/fonts/fonts.css";
import "@components/styles/globals.css";

import type { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import { cofigureStore } from "@components/store";
import { wrapper } from "../store/auth/store";

function App({ Component, pageProps }: AppProps) {
  // const store = cofigureStore();
  return (
    <>
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </>
  );
}

export default wrapper.withRedux(App);
