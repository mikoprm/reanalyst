import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const navMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setIsOpen(false); // Close the navbar if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Use 'mousedown' for better responsiveness

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener
    };
  }, [navMenuRef]);

  return (
    <header className="header">
      <nav className="wrapper-contents nav">
        <a href="/" className="logo">
          Reanalyst
        </a>
        <menu
          ref={navMenuRef}
          className={`nav__menu ${isOpen ? "active" : ""}`}
        >
          <li>
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              Projects
            </a>
          </li>
          <li>
            <a href="/" className="nav__link">
              Contact
            </a>
          </li>
        </menu>
        <div onClick={toggleTheme} id="themeToggle" aria-label="Theme toggle">
          {theme === "light" ? (
            <svg
              aria-hidden="true"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                className="sun"
                fillRule="evenodd"
                d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"
              ></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                className="moon"
                fillRule="evenodd"
                d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"
              ></path>
            </svg>
          )}
        </div>
        <div className="nav__mobile-btn" aria-label="Mobile menu button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="25"
            height="25"
            viewBox="0 0 36 29"
            fill="none"
            onClick={toggleMenu}
          >
            <rect width="35.9988" height="4" rx="2" fill="white" />
            <rect
              x="13.0898"
              y="12.5"
              width="22.9083"
              height="4"
              rx="2"
              fill="white"
            />
            <rect
              x="4.91016"
              y="25"
              width="31.0899"
              height="4"
              rx="2"
              fill="white"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={toggleMenu}
          >
            <path
              d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
