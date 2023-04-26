import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConditionalRenderToken from "./ConditionalRenderToken";
import styles from '../styles/components/ConditionalRole.module.scss'

const ConditionalRenderRole = ({
  
  adminUi,
  clientUi,
  projectWorkerUi,
  supportUi,
}) => {
  const reduxToken = useSelector((state) => state.auth.token);
  const reduxRole = useSelector((state) => state.auth.role);
  const [userUi, setUserUi] = useState(null);

  useEffect(() => {
    if (reduxRole === "admin") setUserUi(adminUi);
    if (reduxRole === "client") setUserUi(clientUi);
    if (reduxRole === "projectWorker") setUserUi(projectWorkerUi);
    if (reduxRole === "support") setUserUi(supportUi);
  }, [reduxToken, reduxRole]);
  return (
    <>
      <ConditionalRenderToken
        className={styles.userUi}
        childrenOnline={userUi}
      />
    </>
  );
};

export default ConditionalRenderRole;
