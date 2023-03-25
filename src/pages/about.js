import styles from "../styles/pages/About.module.scss";
import Link from "next/link";
import { useState } from "react";
import React from 'react'

function about() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((count) => count + 1);
  };
  const decres= ()=>{
    setCounter((count)=> count -1)
  }
  return (
    <div className={styles.txt}>
      <div>about aqui</div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>contador</div>
      <div>{counter}</div>
      <div><button onClick={()=>increment()}>incrementar</button><button onClick={()=>decres()}>restar</button></div>
    </div>
  );
}

export default about;
