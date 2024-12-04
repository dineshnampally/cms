import React, { useState } from "react";
import { FaUserCircle, FaGraduationCap, FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsMS }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVcLoading, setIsVcLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("userDetails");
      navigate("/register");
    }, 2000);
    sessionStorage.clear();
  };

  const handleViewCourses = () => {
    setIsVcLoading(true);
    setIsMS(true);
    navigate('/mycourses');
  };

  const handleAdminPage = () => {
    navigate('/admin');
  };

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const fullName = userDetails ? userDetails.fullName : "Guest";
  const email = userDetails ? userDetails.email : "N/A";

  return (
    <div className="navbar" style={{ backgroundColor: "#E6E6FA" }}>
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl" style={{ color: "#2F4F4F" }}>
          <h1 className="font-extrabold text-purple-800">CMS</h1>
        </a>
      </div>
      <div className="flex-none flex items-center space-x-4 md:space-x-6">
        {/* Dropdown for My Courses */}
        <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
    <div className="indicator">
      <FaGraduationCap size={24} style={{ color: '#6B21A8' }} />
    </div>
  </div>
  <div
    tabIndex={0}
    className="card card-compact dropdown-content bg-white z-[1] mt-3 w-52 sm:w-48 md:w-52 lg:w-52 xl:w-52 shadow-lg max-w-full min-w-[180px] overflow-hidden"
  >
    <div className="card-body">
      <span className="text-lg font-bold" style={{ color: "#2F4F4F" }}>
        My Courses
      </span>
      <div className="card-actions">
        {isVcLoading ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : (
          <button
            className="btn btn-primary btn-block"
            onClick={handleViewCourses}
            style={{ backgroundColor: "#F08080", borderColor: "#F08080" }}
          >
            View Courses
          </button>
        )}
      </div>
    </div>
  </div>
</div>


        {/* Dropdown for User Profile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <FaUserCircle size={40} style={{ color: '#6B21A8' }} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li className="hover:bg-gray-200">
              <a className="justify-between" style={{ color: "#2F4F4F" }}>
                <div>
                  <p className="font-bold">{fullName}</p>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
              </a>
            </li>
            <li>
              <a
                onClick={handleLogout}
                className="text-red-600"
                style={{ color: "#F08080" }}
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-lg"></span>
                ) : (
                  "Logout"
                )}
              </a>
            </li>
          </ul>
        </div>

        {/* Admin Icon */}
        <div>
          <button
            onClick={handleAdminPage}
            className="btn btn-ghost btn-circle"
            style={{ color: '#6B21A8' }}
          >
            <FaUserShield size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
