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
  var messenger = `
  <!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
  FB.init({
      xfbml            : true,
      version          : 'v7.0'
  });
  };
  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<!-- Your customer chat code -->
<div class="fb-customerchat"
  attribution=setup_tool
  page_id="103703514917752"
  theme_color="#67b868">
</div>
`
  const store = useStore(pageProps.initialReduxState);

  return (
    <ToastProvider
      placement="bottom-left"
      autoDismissTimeout={6000}
      autoDismiss
    >
      <Provider store={store}>
        <Component {...pageProps} />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: messenger }}
        ></div>
      </Provider>
    </ToastProvider>
  );
}
