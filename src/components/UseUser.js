import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export function UseUser() {
  
  const reduxToken = useSelector((state) => state.auth.token);
  const user = reduxToken;

  useEffect(()=> {
    if (!user) {
        Swal.fire({
            showConfirmButton: false,
            timer: 1800,
            timerProgressBar: true,
            icon: "warning",
            title: 'Inicia Sesión',
          });
        Router.push("/")
        ;}
  }, [user]);
  return user;
}