import React from "react";
import styles from "../styles/components/spinner.module.scss";

const LoadingSpinner = ({ loadState, elementToRend }) => {
  return (
    <>{loadState ? <span className={styles.loader}></span> : elementToRend}</>
  );
};

export default LoadingSpinner;
