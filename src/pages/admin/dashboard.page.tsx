import React from 'react'
import { useAuth, useUser } from 'reactfire'

const DashboardPage = () => {

    const auth = useAuth()
    const {data: user} = useUser()
  return (
    <div>
        <h1> {user?.displayName || "Guest"}</h1>
        <h2> {user?.email || "not provided"}</h2>
        <button onClick={() => auth.signOut()}>Sign out</button>
    </div>  
  )
}

export default DashboardPage