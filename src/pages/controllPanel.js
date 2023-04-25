import ConditionalRenderRole from '@/components/ConditionalRenderRole'
import React from 'react'

import AdminPanel from '@/components/AdminPanel';
import ClientPanel from '@/components/ClientPanel';
import ProjectWorkerPanel from '@/components/ProjectWorkerPanel';
import SupportPanel from '@/components/SupportPanel';
import { UseUser } from '@/components/UseUser';
import { useSelector } from 'react-redux';
import styles from '../styles/components/ControllPanel.module.scss'

const controllPanel = () => {
  const reduxName = useSelector((state) => state.auth.name);
  const [firstName, _]= reduxName.split(" ")
  const user = UseUser();
  if (!user) return null;
  return (
    <main className={styles.main}>
      <div className={styles.nameContainer}>
      <div className={styles.nameFlex}>Bienvenido {firstName}</div>
      </div>
      
      <ConditionalRenderRole adminUi={<AdminPanel/>} clientUi={<ClientPanel/>} projectWorkerUi={<ProjectWorkerPanel/>} supportUi={<SupportPanel/>}/>
    </main>
    
  )
}

export default controllPanel