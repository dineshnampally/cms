import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [entries,setEntries]=useState({fullName:"",email:"",password:"",confirmPassword:""})
  const [isNavigate,setIsNavigate]=useState(false)
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setEntries((prevEntries)=>({...prevEntries,[name]:value,}))  
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

    if(entries.password!==entries.confirmPassword){
      alert("Passwords Do Not Match")
      return
    }
    localStorage.setItem('userDetails',JSON.stringify(entries))
    setEntries({fullName:"",email:"",password:"",confirmPassword:""})
    setIsNavigate(true)
  }
  if(isNavigate) return <Navigate to='/login' />
  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      <div className="w-full lg:w-1/2 h-screen hidden lg:block">
        <img 
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" 
          alt="Placeholder Image" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form and CMS Text Section */}
      <div className="lg:p-12 md:p-8 sm:p-6 p-4 w-full lg:w-1/2">

        {/* CMS Text */}
        <div className="text-center mt-4">
          <span className="text-purple-500 text-6xl sm:text-9xl font-bold">CMS</span>
          <div className="text-lg sm:text-xl font-medium mt-1 text-gray-700">Course Management System</div>
        </div>

        {/* Register Header */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 mt-5 text-center sm:text-left">Register</h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              placeholder="Enter your full name"
              value={entries.fullName}
              onChange={handleChange}
              required
              
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              placeholder="Enter your email"
              value={entries.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              placeholder="Enter your password"
              value={entries.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              placeholder="Confirm your password"
              value={entries.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Register Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              
            >
              Register
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
