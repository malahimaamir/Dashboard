'use client'
import { AiOutlineClose, AiOutlineBell } from "react-icons/ai";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const NotificationsPage = () => {
  // Define notifications array
  const [notifications, setNotifications] = useState([
    { text: "Success! Your action was completed.", color: "bg-green-500" },
    { text: "Warning! Something went wrong.", color: "bg-yellow-500" },
    { text: "Error! Please try again later.", color: "bg-red-500" },
  ]);

  // Function to remove a notification
  const removeNotification = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Header */}
        <Header />
        <div className="min-h-screen bg-gray-100 p-6">
          <h2 className="text-xl font-bold text-center">Notifications</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Notifications States */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Notifications States
              </h3>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <div
                    key={index}
                    className={`${notification.color} text-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-center`}
                  >
                    <span>{notification.text}</span>
                    <AiOutlineClose
                      className="cursor-pointer"
                      onClick={() => removeNotification(index)}
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No notifications available.</p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NotificationsPage;
