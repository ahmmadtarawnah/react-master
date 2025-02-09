import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="nav-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Logo and Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span
                className="text-3xl font-extrabold font-serif animate-float-infinite"
                style={{ color: "#DECEB0" }}
              >
                LEXORA
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="nav-link rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/consolations/type"
                  className="nav-link rounded-md px-3 py-2 text-sm font-medium"
                >
                  Consolution
                </Link>
                <Link
                  to="#"
                  className="nav-link rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blogs
                </Link>
                <Link
                  to="/Contact"
                  className="nav-link rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notification button */}
            <button
              type="button"
              className="nav-link rounded-full p-1 hover:text-white"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <button
                onClick={toggleProfileDropdown}
                className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#AF8E4D] hover:bg-white hover:text-[#AF8E4D] focus:text-[#AF8E4D] focus:bg-gray-200 text-gray-50 cursor-pointer font-bold leading-loose transition duration-200"
              >
                <Link to="/login">Login</Link>
              </button>

              {isProfileDropdownOpen && (
                <div className="dropdown absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu sm:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        id="mobileMenu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="#"
            className="nav-link block rounded-md px-3 py-2 text-base font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="#"
            className="nav-link block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </Link>
          <Link
            to="#"
            className="nav-link block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </Link>
          <Link
            to="#"
            className="nav-link block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar ;