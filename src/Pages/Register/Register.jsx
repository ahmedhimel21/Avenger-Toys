import React from "react";
import Lottie from 'lottie-react';
import rocket from '../../assets/roctet.json'

const Register = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left side with register form */}
        <div className="bg-gray-200 p-10 flex justify-center items-center md:w-1/2 rounded-lg">
          <form className="w-full max-w-sm">
            <h2 className="text-3xl font-bold mb-6">Register</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
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
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Photo
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Photo URL"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-2">Or register with:</p>
              <div className="flex items-center justify-center">
                {/* Social media login buttons/icons */}
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <i className="fab fa-google mr-2"></i> Google
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right side with background image */}
        <div
          className="bg-cover bg-center md:w-1/2"
          // style={{ backgroundImage: 'url("register.webp")' }}
        >
          <Lottie animationData={rocket} loop={true} className="h-[562px] w-full"></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
