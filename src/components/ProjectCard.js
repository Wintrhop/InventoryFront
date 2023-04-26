import React from "react";

import styles from "../styles/components/ProjectCard.module.scss";
const ProjectCard = ({ item }) => {
  const endDate = item.endDate;
  return (
    <>
    <div className={styles.card}><div className={styles.projectCardContainer}>
        <div className={styles.header}>
          <div className={styles.projectName}>{item.name}</div>

          <div
            className={`${styles.datesContainer} ${styles.colorWhiteSecondary}`}
          >
            <div>Iniciado el {item.startDate}</div>
          </div>
        </div>
        <div className={styles.footer}>
          {endDate !== undefined ? (
            <>
              <div className={`${styles.datesContainer} ${styles.colorBlack}`}>
                finalizado el {endDate}
              </div>
            </>
          ) : (
            <>
              <div className={`${styles.datesContainer} ${styles.colorBlack}`}>
                Projecto en ejecución
              </div>
            </>
          )}
        </div>
      </div></div>
      
    </>
  );
};

export default ProjectCard;
