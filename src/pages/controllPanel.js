import ConditionalRenderRole from '@/components/ConditionalRenderRole'
import React from 'react'
import stylesApp from '@/styles/Home.module.scss'

const controllPanel = () => {
  return (
    <main className={stylesApp.main}>
      <ConditionalRenderRole/>
    </main>
    
  )
}

export default controllPanel