import React from "react";

const RegisteredStudents = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 p-6 rounded shadow-md relative">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Registered Students</h2>
        <p className="text-gray-700">This is the Registered Students component.</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:ring-2 focus:ring-blue-500"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default RegisteredStudents;
