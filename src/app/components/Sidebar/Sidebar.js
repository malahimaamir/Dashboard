'use client'
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Menu */}
      <button 
        className="lg:hidden p-3 fixed top-4 left-4 z-50 bg-gray-900 text-white rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-full-screen left-0  bg-gray-900 text-white p-5 w-64 z-40 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0`}
      >
        <h2 className="text-lg font-bold">CREATIVE TIM</h2>
        <nav className="mt-5 ">
          <ul>
            {[
              { href: "/", label: "Dashboard" },
              { href: "/user-profile", label: "User Profile" },
              { href: "/table-list", label: "Table List" },
              { href: "/typography", label: "Typography" },
              { href: "/icons", label: "Icons" },
              { href: "/maps", label: "Maps" },
              { href: "/notifications", label: "Notifications" },
              { href: "/rtl-support", label: "RTL Support" },
            ].map(({ href, label }) => (
              <li key={href} className="p-2 mt-2 bg-gray-800 rounded">
                <Link href={href} onClick={closeSidebar}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-orange-500 w-full p-2 rounded mt-5">Upgrade To PRO</button>
      </div>
    </>
  );
}
