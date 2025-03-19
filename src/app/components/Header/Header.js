"use client";
import { FaBell, FaUser, FaSearch, FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef();
  
  // Get current pathname
  const pathname = usePathname();

  // Define a mapping of paths to titles
  const pageTitles = {
    "/": "Dashboard",
    "/user-profile": "User Profile",
    "/table-list": "Table List",
    "/typography": "Typography",
    "/icons": "Icons",
    "/maps": "Maps",
    "/notifications": "Notifications",
    "/rtl-support": "RTL Support",
  };

  // Set title dynamically based on the current path
  const pageTitle = pageTitles[pathname] || "Dashboard";

  // Close the notification dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white p-3 shadow rounded flex items-center justify-between relative">
      {/* Left Side: Hamburger for Mobile */}
      <button className="text-gray-700 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </button>

      {/* Center: Dynamic Page Title */}
      <h2 className="text-lg font-bold ml-auto md:ml-0">{pageTitle}</h2>

      {/* Right Side: Icons */}
      <div className="hidden md:flex items-center space-x-4 ml-auto relative">
        <FaSearch className="text-gray-700 cursor-pointer hover:text-gray-900" />

        {/* Notification Icon */}
        <div className="relative" ref={notificationRef}>
          <FaBell
            className="text-red-500 cursor-pointer hover:text-red-700"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          
          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 text-gray-700">
              <h3 className="font-bold text-lg">Notifications</h3>
              <ul className="mt-2 space-y-2">
                <li className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
                  🔔 New message received
                </li>
                <li className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
                  📅 Meeting scheduled for 3 PM
                </li>
                <li className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
                  ✅ Task completed successfully
                </li>
              </ul>
            </div>
          )}
        </div>

        <FaUser className="text-gray-700 cursor-pointer hover:text-gray-900" />
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-3 p-4">
          <FaSearch className="text-gray-700 cursor-pointer" />
          <FaBell className="text-red-500 cursor-pointer" />
          <FaUser className="text-gray-700 cursor-pointer" />
        </div>
      )}
    </nav>
  );
}
