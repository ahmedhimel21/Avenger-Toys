import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";

const NavigationBar = () => {
  // const { user, logOut } = useContext(AuthContext);
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <a className="flex items-center">
            <img
              src="avenger.png"
              className="h-12 mr-3 rounded-full"
              alt="avenger logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Avenger Toys
            </span>
          </a>
        </Link>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <div>
              {user ? (
                <div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={user?.photoURL}
                    alt="user photo"
                    title={user?.displayName}
                  />
                </div>
              ) : (
                <div className="text-white rounded-none text-md font-semibold p-3">
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-2 text-md font-bold">
            {user && (
              <a onClick={handleSignOut} className="cursor-pointer	">
                Logout
              </a>
            )}
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-md font-bold" : "text-md font-semibold"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToys"
                className={({ isActive }) =>
                  isActive ? "text-md font-bold" : "text-md font-semibold"
                }
              >
                All toys
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive ? "text-md font-bold" : "text-md font-semibold"
                  }
                >
                  My toys
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/addAToy"
                  className={({ isActive }) =>
                    isActive ? "text-md font-bold" : "text-md font-semibold"
                  }
                >
                  Add a toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-md font-bold" : "text-md font-semibold"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
