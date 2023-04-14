import AboutInfo from "@/components/AboutInfo";
import styles from "../styles/pages/About.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { wrapper } from "@/store/store";
import { changeName, changeRole, changeToken } from "@/store/slices/authSlice";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      console.log("State on server", store.getState().auth);
      
      return {
        props: {
          
        },
      };
    }
);

function about(props) {
  return (
    <>
      <AboutInfo />
    </>
  );
}

export default about;
