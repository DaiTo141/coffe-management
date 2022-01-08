import "../public/styles/boxicons.min.css";
import "../public/styles/globals.css";
import "../public/styles/flaticon.css";
import "../public/styles/bootstrap.min.css";
import "animate.css";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { useStore } from "../store";
// import 'react-accessible-accordion/dist/fancy-example.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ToastProvider
      placement="bottom-left"
      autoDismissTimeout={6000}
      autoDismiss
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ToastProvider>
  );
}
