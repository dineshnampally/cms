import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [courses, setCourses] = useState([]);
    const [registeredCourses, setRegisteredCourses] = useState([]);
    const [filterType, setFilterType] = useState("All");

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem("courses")) || [];
        setCourses(userDetails);

        const savedRegisteredCourses = JSON.parse(sessionStorage.getItem("registeredCourses")) || [];
        setRegisteredCourses(savedRegisteredCourses);
    }, []);

    const handleReg = (courseId) => {
        const selectedCourse = courses.find((course) => course.id === courseId);

        if (selectedCourse) {
            const updatedRegisteredCourses = [...registeredCourses, courseId];
            setRegisteredCourses(updatedRegisteredCourses);
            sessionStorage.setItem("registeredCourses", JSON.stringify(updatedRegisteredCourses));
        }
    };

    const handleFilterChange = (e) => {
        setFilterType(e.target.value);
    };

    const filteredCourses = filterType === "All" ? courses : courses.filter(course => course.type === filterType);

    return (
        <div className="flex flex-col items-center justify-center px-4 lg:px-10 space-y-10">
            <section className="bg-white dark:bg-gray-800 w-full">
                <div className="container flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10 px-6 py-10 lg:py-16 mx-auto">
                    <div className="lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                Register a Course Easily!
                            </h1>
                            <div className="mt-8 space-y-5">
                                <p className="flex items-center text-gray-700 dark:text-gray-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Course</span>
                                </p>
                                <p className="flex items-center text-gray-700 dark:text-gray-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Course Type</span>
                                </p>
                                <p className="flex items-center text-gray-700 dark:text-gray-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Register</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto lg:w-1/2 w-full">
                        <div className="flex items-center mb-4">
                            <label htmlFor="filter" className="text-gray-700 dark:text-gray-200 font-semibold mr-4">
                                Filter by Course Type
                            </label>
                            <select
                                id="filter"
                                value={filterType}
                                onChange={handleFilterChange}
                                className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md"
                            >
                                <option value="All">All Courses</option>
                                <option value="Individual">Individual</option>
                                <option value="Special">Special</option>
                                <option value="Group">Group</option>
                            </select>
                        </div>
                        <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700">
                                    <th className="px-4 py-2 border border-gray-200 dark:border-gray-700">S no.</th>
                                    <th className="px-4 py-2 border border-gray-200 dark:border-gray-700">Course Name</th>
                                    <th className="px-4 py-2 border border-gray-200 dark:border-gray-700">Course Type</th>
                                    <th className="px-4 py-2 border border-gray-200 dark:border-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCourses.length > 0 ? (
                                    filteredCourses.map((course, index) => (
                                        <tr key={course.id} className="text-center bg-white dark:bg-gray-800 even:bg-gray-50 dark:even:bg-gray-700">
                                            <td className="px-4 py-2 border border-gray-200 dark:border-gray-700">{index + 1}</td>
                                            <td className="px-4 py-2 border border-gray-200 dark:border-gray-700">{course.name}</td>
                                            <td className="px-4 py-2 border border-gray-200 dark:border-gray-700">{course.type}</td>
                                            <td className="px-4 py-2 border border-gray-200 dark:border-gray-700">
                                                <button
                                                    onClick={() => handleReg(course.id)}
                                                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                    disabled={registeredCourses.includes(course.id)}
                                                >
                                                    {registeredCourses.includes(course.id) ? "Registered" : "Register"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-4 py-2 text-center border border-gray-200 dark:border-gray-700">
                                            No courses available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
