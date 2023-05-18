import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="mt-3 mx-5">
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left side with company name and text */}
        <div
          className="bg-blue-500 text-white p-10 flex flex-col justify-center items-center md:w-1/2 rounded-lg"
          style={{ backgroundImage: "url(login1.jpg)" }}
        >
          <p>Nice to see you again</p>
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-xl">Sign in to continue access.</p>
        </div>

        {/* Right side with login form */}
        <div className="bg-gray-200 p-10 flex justify-center items-center md:w-1/2 rounded-lg">
          <form className="w-full max-w-sm">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div>
              <p className="text-gray-700 mb-2">Or sign in with:</p>
              <div className="flex gap-2">
                {/* Social media login buttons/icons */}
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
                  <FaGoogle className="mr-2"></FaGoogle> Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
