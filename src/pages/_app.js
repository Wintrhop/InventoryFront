import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SSRProvider from "react-bootstrap/SSRProvider";
import NavBr from "@/components/NavBr";
import { store } from "@/store/store";
import styles from "@/styles/Home.module.scss";
import ReduxProvider from "@/store/ReduxProvider";
import { Provider } from "react-redux";
import { wrapper } from "@/store/store";

 function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return (
    <>
    
      <SSRProvider>
        
            <NavBr />
            <main className={styles.main}>
              <Component {...pageProps} />
            </main>
           
      </SSRProvider>
      
    </>
  );
}
export default wrapper.withRedux(App);
