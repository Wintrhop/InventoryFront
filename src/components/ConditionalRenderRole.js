import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConditionalRenderToken from "./ConditionalRenderToken";

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
        
        childrenOnline={userUi}
      />
    </>
  );
};

export default ConditionalRenderRole;
