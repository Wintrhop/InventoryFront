'use client';
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = () => {
    const { push } = useRouter();

    useEffect(() => {
        
       push('/about');
    }, []);
  return <></>;
};

export default RedirectPage;
