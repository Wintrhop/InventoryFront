import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NoSSRWrapper from "@/components/NoSSRWrapper";
import NavBr from "@/components/NavBr";

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
    
      
        <NoSSRWrapper children={<NavBr />}/>
              <Component {...pageProps} />
            
            
      
      
    </>
  );
}

export default wrapper.withRedux(App);
