import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesReg = () => {
  const [fullName, setFullName] = useState("User ");
  const [registeredCourses, setRegisteredCourses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userDetails"));
    if (data) {
      setFullName(data.fullName);
    }

    const courseIds = JSON.parse(sessionStorage.getItem("registeredCourses")) || [];
    const allCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const filteredCourses = allCourses.filter(course => courseIds.includes(course.id));
    setRegisteredCourses(filteredCourses);
  }, []);

  const handleRemoveCourse = (courseId) => {
    const updatedCourses = registeredCourses.filter(course => course.id !== courseId);
    setRegisteredCourses(updatedCourses);
    sessionStorage.setItem("registeredCourses", JSON.stringify(updatedCourses.map(course => course.id)));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 min-h-screen bg-gray-50">
      <div className="absolute top-0 left-0 ml-4 mt-4 text-lg font-semibold underline">
        <Link to="/">&lt;Home</Link>
      </div>

      <div className="flex flex-col items-center w-full text-center">
      <div className="flex flex-col items-center w-full text-center mt-10">
  <div className=" text-gray-500 w-full py-12">
    <h1 className="text-5xl font-extrabold">
      Hi <span className="text-purple-600">{fullName}</span>
    </h1>
    <h2 className="text-3xl font-semibold mt-4">
      Your Registered Courses
    </h2>
  </div>
</div>


        <div className="overflow-x-auto w-full md:w-[80%] mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Courses and Course Types</h2>
          {registeredCourses.length > 0 ? (
            <table className="table-auto w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-teal-600 text-white text-center">
                  <th className="py-4 px-6 border-b border-gray-300">Course Name</th>
                  <th className="py-4 px-6 border-b border-gray-300">Course Type</th>
                  <th className="py-4 px-6 border-b border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {registeredCourses.map((course) => (
                  <tr key={course.id} className="text-center hover:bg-gray-100 transition duration-200">
                    <td className="py-5 px-2 bg-gray-50 border-b border-gray-300">{course.name}</td>
                    <td className="py-5 px-2 bg-white border-b border-gray-300">{course.type}</td>
                    <td className="py-5 px-2 border-b border-gray-300">
                      <button
                        className="border border-teal-600 py-2 px-6 text-teal-600 inline-block rounded hover:bg-teal-600 hover:text-white transition duration-200"
                        onClick={() => handleRemoveCourse(course.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-lg text-gray-500">No courses registered.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesReg;
