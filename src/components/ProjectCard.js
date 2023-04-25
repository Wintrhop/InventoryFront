import React from "react";

import styles from "../styles/components/ProjectCard.module.scss";
const ProjectCard = ({ item }) => {
    const endDate = item.endDate
  return (
    <>
      <div className={styles.projectCardContainer} key={item._id}>
        <div className={styles.projectName}>{item.name}</div>

        <div className={styles.datesContainer}>
          <div>Fecha de inicio</div>
          <span>{item.startDate}</span>
          {
            endDate!==undefined?<><div>Fecha de fin</div>
            <span>{endDate}</span></>:<></>
          }
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
