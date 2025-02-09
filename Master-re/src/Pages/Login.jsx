import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Login = () => {
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Welcome Back</h1>
          <p className="text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              placeholder="TARAWNEH@example.com"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
              placeholder="••••••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-secondary hover:text-opacity-80 text-sm"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#AF8E4D] text-white py-2 px-4 rounded-lg hover:bg-[#AF8E4D] hover:text-[#2B3B3A] focus:bg-[#AF8E4D] focus:text-white active:bg-[#AF8E4D] active:text-white transition duration-200"
          >
            Sign In
          </button>

          <div className="relative flex items-center justify-center my-6">
            <div className="border-t w-full border-gray-300"></div>
            <div className="absolute bg-white px-4 text-sm text-gray-500">
              Or continue with
            </div>
          </div>

          <button
            type="button"
            className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google Logo"
            />
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{"  "}
            <Link
              to="../pages2/Sigup" // Using Link for navigation to the Signup page
              className="text-secondary hover:text-opacity-80 font-medium"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
