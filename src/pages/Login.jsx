import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logg.jpeg';

const Login = ({setIsAuthenticated}) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for showing the loader
  const navigate = useNavigate();
 
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for missing credentials
    if (!credentials.email || !credentials.password) {
      alert('Please fill in both email and password.');
      return;
    }

    setLoading(true);

    try {
      const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};


      if (
        userDetails.email === credentials.email &&
        userDetails.password === credentials.password
      ) {
        setTimeout(() => {
          setLoading(false);
          setIsAuthenticated(true) 
          navigate('/');
        }, 1000); 
      } else {
        setLoading(false); 
        alert('Invalid Email or Password');
      }
    } catch (error) {
      setLoading(false); 
      console.error('Error reading user details:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="bg-gradient-to-r from-gray-50 to-pink-100 flex justify-center items-center h-screen">
      
      <div className="w-full lg:w-1/2 h-screen hidden lg:block relative">
        <img
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 backdrop-blur-md flex justify-center items-center">
          <div className="p-8 bg-white bg-opacity-30 rounded-lg">
            <img
              src={logo}
              alt="Logo"
              className="h-72 w-72 rounded-lg shadow-xl border-4 border-gray-300 hover:shadow-2xl transform transition-all hover:scale-105"
            />
          </div>
        </div>
      </div>

      
      <div className="lg:p-36 md:p-20 sm:p-12 p-8 w-full lg:w-1/2">
        <h1 className="text-xl text-black font-extralight">
          Welcome
          <div className="text-4xl font-extrabold mt-2">
            <span className="text-black text-3xl">C</span>
            <span className="text-gray-500 text-3xl">ourse </span>
            <span className="text-black text-3xl">M</span>
            <span className="text-gray-500 text-3xl">anagement </span>
            <span className="text-black text-3xl">S</span>
            <span className="text-gray-500 text-3xl">ystem</span>
          </div>
        </h1>

        <h1 className="text-3xl font-semibold mb-4 mt-5">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-8 text-gray-600"
            >
              {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Submit Button or Loader */}
          <div className="mt-6">
            {loading ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Login as Student
              </button>
            )}
          </div>
        </form>

        {/* New User Sign Up Link */}
        <div className="mt-4 text-center">
          <Link
            to="/register"
            className="text-sky-500 hover:text-sky-600 text-sm font-medium"
          >
            New user? Sign up here
          </Link>
        </div>
      </div>

      {/* Admin Button Positioned at Bottom Right */}
      <div className="fixed bottom-4 right-4 lg:right-8 lg:bottom-8">
        <button
          onClick={() => navigate('/admin')}
          className="btn btn-outline btn-info"
        >
          Admin Login
        </button>
      </div>
    </div>
  );
};

export default Login;
