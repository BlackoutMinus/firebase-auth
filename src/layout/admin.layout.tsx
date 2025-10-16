import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useSigninCheck } from 'reactfire'

const AdminLayout = () => {

    const {status, data: signInCheckResult, hasEmitted}=useSigninCheck()

    console.log(signInCheckResult)

    if(status === "loading"){
        return <div>Loading...</div>
    }

    if(!signInCheckResult.signedIn && status === "success"){
        return (<Navigate to={"/auth/register"} replace></Navigate>)
    }

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AdminLayout