import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { isExpired } from "react-jwt";
import { useSelector } from "react-redux";
import RedirectPage from "./RedirectPage";

const ConditionalRenderRole = () => {
const router = useRouter();
  const reduxToken = useSelector((state) => state.auth.token);
  const reduxRole = useSelector((state) => state.auth.role);
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
  }, [reduxToken, reduxRole]);
  const tokenExpired = isExpired(token);
//   const handleOffLine =()=> router.push('/');
  return (
  <> 
  {tokenExpired?<>offline</>:
  <RedirectPage/>
  }
  </>
  );
};

export default ConditionalRenderRole;
