import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import UploadLile from './UploadLile'
export default function Checkout() {
//     const [isAdmin, setIsAdmin] = useState(false)
//     let check = useLocation()
//     console.log("check",check);
    
//     useEffect(() => {
// setIsAdmin(check.state)
//     },[isAdmin])
//     console.log("admin",isAdmin);
    let isAdmin = false
let check = useLocation()
isAdmin = check.state
console.log("admi",isAdmin);
    
  return (
isAdmin ? <UploadLile/> : <Navigate to={"/"}/>

  )
}
