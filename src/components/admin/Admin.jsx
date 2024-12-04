import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [selectedCourse, setSelectedCourse] = useState("Urdu");
  const [selectedType, setSelectedType] = useState("Individual");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  const handlePublish = () => {
    const newCourse = { id: Date.now(), name: selectedCourse, type: selectedType, isEditing: false };
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const handleExit = () => {
    navigate('/login');
    setLoading(true);
  };

  const handleDelete = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const handleEditToggle = (id) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, isEditing: !course.isEditing } : course
    );
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const handleEditChange = (id, field, value) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, [field]: value } : course
    );
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const handleUpdate = (id) => {
    handleEditToggle(id);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen relative">
      <div className="fixed left-3 transition-all duration-300 ease-in-out">
        {loading ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : (
          <button
            onClick={handleExit}
            className="text-black hover:text-red-800 transition-all duration-300 ease-in-out"
          >
            <FaChevronLeft size={19} />
          </button>
        )}
      </div>

      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Course Management Portal</h1>
        <p className="text-gray-700 mt-2">Create, Update, List, and Delete Courses</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add a New Course</h2>
        <div className="mb-4">
          <label htmlFor="courseDropdown" className="block font-medium text-gray-700 mb-1">
            Course Name:
          </label>
          <select
            id="courseDropdown"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="block w-full h-10 border border-gray-300 rounded px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {["Urdu", "Hindi", "Telugu", "English", "Maths", "Science"].map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="typeDropdown" className="block font-medium text-gray-700 mb-1">
            Course Type:
          </label>
          <select
            id="typeDropdown"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="block w-full h-10 border border-gray-300 rounded px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {["Individual", "Special", "Group"].map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handlePublish}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 mb-4"
        >
          Publish Course
        </button>
      </div>

      <div className="mt-8 max-w-5xl mx-auto overflow-x-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Published Courses</h2>
        {courses.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Course Name</th>
                <th className="border border-gray-300 px-4 py-2">Course Type</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.isEditing ? (
                      <select
                        value={course.name}
                        onChange={(e) => handleEditChange(course.id, "name", e.target.value)}
                        className="w-full border border-gray-200 rounded px-2 focus:outline-none"
                      >
                        {["Urdu", "Hindi", "Telugu", "English", "Maths", "Science"].map((name, index) => (
                          <option key={index} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span>{course.name}</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.isEditing ? (
                      <select
                        value={course.type}
                        onChange={(e) => handleEditChange(course.id, "type", e.target.value)}
                        className="w-full border border-gray-200 rounded px-2 focus:outline-none"
                      >
                        {["Individual", "Special", "Group"].map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span>{course.type}</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <div className="flex justify-between gap-2">
                      {course.isEditing ? (
                        <button
                          onClick={() => handleUpdate(course.id)}
                          className="w-20 h-8 bg-green-600 text-white rounded hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditToggle(course.id)}
                          className="w-20 h-8 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(course.id)}
                        className="w-20 h-8 bg-red-600 text-white rounded hover:bg-red-700 focus:ring-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center">No courses available. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
