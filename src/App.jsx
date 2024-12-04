import React, { useState } from 'react'
import './index.css'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './components/Home'
import Register from './pages/Register'
import Error from './components/Error'
import Admin from './components/admin/Admin'
import CoursesReg from './components/CoursesReg'
import Dashboard from './components/Dashboard'

const App = () => {
  const [isAuthenticated, setIsAuthenticated]= useState(false)
  const [isMS,setIsMS]=useState(false)

  return (
    <div className='text-blue-500'>
        <BrowserRouter>
        
          <Routes>
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={isAuthenticated?<Home setIsMS={setIsMS}/>:<Navigate to='/login'/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/mycourses' element={isMS?<CoursesReg/>:<Navigate to='/login'/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='*' element={<Error/>}/>
          </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App