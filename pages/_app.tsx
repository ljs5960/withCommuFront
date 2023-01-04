import '../styles/globals.css'
import type {AppProps} from 'next/app'
import ToastUtils from "../utils/ToastUtile";
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import wrapper2 from "../redux/store/store";
import {Provider} from "react-redux";

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