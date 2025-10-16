import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from './pages/public/Home'
import RootLayout from './layout/root.layout'
import PublicLayout from './layout/public.layout'
import AuthLayout from './layout/auth.layout'
import AdminLayout from './layout/admin.layout'
import NotFoundPage from './pages/public/not-found.page'
import DashboardPage from './pages/admin/dashboard.page'
import ChatPage from './pages/admin/chat.page'
import ProfilePage from './pages/admin/profile.page'
import LoginPage from './pages/auth/login.page'
import RegisterPage from './pages/auth/register.page'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout/>}>
        
        <Route element={<PublicLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='*' element={<NotFoundPage/>}/>
        
        </Route>

        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<DashboardPage/>}/>
          <Route path='chat' element={<ChatPage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>

        </Route>

        <Route path='auth' element ={<AuthLayout/>}>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
          
        </Route>

      </Route>
    </Routes>
  )
}

export default AppRoutes