import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import styles from "../styles/components/ProjectChart.module.scss";
import ProjectCard from "./ProjectCard";

const ProjectCharts = () => {
  const reduxToken = useSelector((state) => state.auth.token);
  const [projectsQty, setProjectsQty] = useState("");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProjects = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_INVENTORY_BACK_API}/api/projects/`,
        {
          headers: {
            Authorization: `Bearer ${reduxToken}`,
          },
        }
      );

      setProjects(data.data);
      setProjectsQty(data.data.length);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      <div className={styles.projectContainer}>
        <LoadingSpinner
          loadState={isLoading}
          elementToRend={
            <>
              {projects.map((item) => {
                return (
                  <div className={styles.cardContainer} key={item._id}>
                    <ProjectCard item={item} />
                  </div>

                  // link en la card para direccionar y consulta
                );
              })}
            </>
          }
        />
      </div>
    </>
  );
};

export default ProjectCharts;
