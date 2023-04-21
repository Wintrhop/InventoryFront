import React, { useEffect, useState } from 'react'
import { isExpired } from "react-jwt";
import { useSelector } from 'react-redux';

const ConditionalRenderToken = ({childrenOnline, childrenOffline, className}) => {

    const reduxToken = useSelector((state) => state.auth.token);
    const [token, setToken]= useState('')
    
    useEffect(() => {
      
        setToken(localStorage.getItem("token"))
        
    }, [reduxToken])
    
    const tokenExpired = isExpired(token);
  return (
    <div className={className}>{tokenExpired? childrenOffline: childrenOnline}</div>
  )
}

export default ConditionalRenderToken