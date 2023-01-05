import '../styles/globals.css'
import type {AppProps} from 'next/app'
import SSRProvider from 'react-bootstrap/SSRProvider';
import wrapper2 from "../redux/store/store";
import {Provider} from "react-redux";
import ToastUtils from "@utils/ToastUtile";

import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/tailwind.css";

function App({Component, pageProps}: AppProps) {
  let {store, props} = wrapper2.useWrappedStore(pageProps);
  return (
      <>
        <Provider store={store}>
          <ToastUtils/>
          <SSRProvider>
            <Component {...props.pageProps} />
          </SSRProvider>
        </Provider>
      </>
  )
}

export default App;