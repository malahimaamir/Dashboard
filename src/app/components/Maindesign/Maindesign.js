import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Cards from "../Cards/Cards"
import TaskAndStats from "../TaskAndStats/TaskAndStats";
import Footer from "../Footer/Footer";

const Maindesign = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Header */}
        <Header />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="text-gray-500">Used Space</h3>
            <p className="text-xl font-bold">49/50 GB</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-xl font-bold">$34,245</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="text-gray-500">Fixed Issues</h3>
            <p className="text-xl font-bold">75</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="text-gray-500">Followers</h3>
            <p className="text-xl font-bold">+245</p>
          </div>
        </div>

    <Cards/>
    <TaskAndStats/>
    <Footer/>
      </div>
    </div>
  );
};

export default Maindesign;
