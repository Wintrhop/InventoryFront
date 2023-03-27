import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SSRProvider from "react-bootstrap/SSRProvider";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}