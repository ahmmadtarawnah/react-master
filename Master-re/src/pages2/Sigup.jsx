import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sigup = () => {
  const [formType, setFormType] = useState("user"); // State to track form type

  // Function to handle form switching
  const showForm = (type) => {
    setFormType(type);
  };

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl my-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">
            Create an Account
          </h1>
          <p className="text-gray-600">
            Choose your account type to get started
          </p>
        </div>

        {/* Account Type Selector */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => showForm("user")}
            id="userBtn"
            className="flex-1 py-3 px-4 rounded-lg border-2 border-[#AF8E4D] text-[#AF8E4D] hover:bg-[#AF8E4D] hover:text-white focus:bg-[#AF8E4D] focus:text-white active:bg-[#AF8E4D] active:text-white transition duration-200"
          >
            I Need Legal Advice
          </button>
          <button
            onClick={() => showForm("lawyer")}
            id="lawyerBtn"
            className="flex-1 py-3 px-4 rounded-lg border-2 border-[#AF8E4D] text-[#AF8E4D] hover:bg-[#AF8E4D] hover:text-white focus:bg-[#AF8E4D] focus:text-white active:bg-[#AF8E4D] active:text-white transition duration-200"
          >
            I'm a Lawyer
          </button>
        </div>

        {/* User Registration Form */}
        {formType === "user" && (
          <form id="userForm" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#AF8E4D] text-white py-2 px-4 rounded-lg hover:bg-[#AF8E4D] hover:text-[#2B3B3A] focus:bg-[#AF8E4D] focus:text-white active:bg-[#AF8E4D] active:text-white transition duration-200"
            >
              Create Account
            </button>
          </form>
        )}

        {/* Lawyer Registration Form */}
        {formType === "lawyer" && (
          <form id="lawyerForm" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Practice
              </label>
              <input
                type="number"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Expertise
              </label>
              <select
                multiple
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              >
                <option>Criminal Law</option>
                <option>Family Law</option>
                <option>Corporate Law</option>
                <option>Civil Rights</option>
                <option>Real Estate Law</option>
                <option>Immigration Law</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Bar Certificate
              </label>
              <input
                type="file"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#AF8E4D] text-white py-2 px-4 rounded-lg hover:bg-[#AF8E4D] hover:text-[#2B3B3A] focus:bg-[#AF8E4D] focus:text-white active:bg-[#AF8E4D] active:text-white transition duration-200"
            >
              Create Lawyer Account
            </button>
          </form>
        )}

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="w-full bg-[#AF8E4D] text-white py-2 px-4 rounded-lg hover:bg-[#AF8E4D] hover:text-[#2B3B3A] focus:bg-[#AF8E4D] focus:text-white active:bg-[#AF8E4D] active:text-white transition duration-200"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sigup;
