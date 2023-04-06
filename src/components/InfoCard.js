import React from "react";
import styles from "../styles/components/InfoCard.module.scss";
const InfoCard = ({ title, text1, text2, compFlexDirection, textFlexDirection }) => {
    let compDirection = '';
    let textDirection = '';
    compFlexDirection==='column'? compDirection= styles.compDirCol :compDirection=''
    textFlexDirection==='column'? textDirection= styles.textDirCol :textDirection=''
    console.log(compDirection);
  return (
    <>
      <div className={`${styles.infoCardContainerFlex} ${compDirection}`}>
        <div className={`${styles.infoCardTitle}`}>
          <h4>{title}</h4>
        </div>
        <div className={`${styles.infoCardContainerText} ${textDirection}`}>
          <p>{text1}</p>
          <p>{text2}</p>    
        </div>
      </div>
    </>
  );
};

export default InfoCard;
