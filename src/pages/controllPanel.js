import ConditionalRenderRole from '@/components/ConditionalRenderRole'
import React from 'react'
import stylesApp from '@/styles/Home.module.scss'

import AdminPanel from '@/components/AdminPanel';
import ClientPanel from '@/components/ClientPanel';
import ProjectWorkerPanel from '@/components/ProjectWorkerPanel';
import SupportPanel from '@/components/SupportPanel';
import { UseUser } from '@/components/UseUser';

const controllPanel = () => {
  const user = UseUser();
  if (!user) return null;
  return (
    <main className={stylesApp.main}>
      <ConditionalRenderRole adminUi={<AdminPanel/>} clientUi={<ClientPanel/>} projectWorkerUi={<ProjectWorkerPanel/>} supportUi={<SupportPanel/>}/>
    </main>
    
  )
}

export default controllPanel