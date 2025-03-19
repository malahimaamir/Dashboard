import Image from "next/image";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";

const UserProfile = () => {
    return (
          <>
            <div className="flex bg-gray-100 min-h-screen">
                 {/* Sidebar */}
                 <Sidebar />
         
                 {/* Main Content */}
                 <div className="flex-1 p-5">
                   {/* Header */}
                   <Header />
                   <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">User Profile</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Section - Profile Form */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-lg">
              <h3 className="text-lg font-semibold">Edit Profile</h3>
              <p className="text-sm">Complete your profile</p>
            </div>
            {/* Form */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-gray-600 text-sm">Company (disabled)</label>
                  <input type="text" disabled className="w-full mt-1 p-2 border rounded bg-gray-200" />
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Username</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded" />
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Email address</label>
                  <input type="email" className="w-full mt-1 p-2 border rounded" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-gray-600 text-sm">First Name</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded" />
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Last Name</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="text-gray-600 text-sm">City</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded" />
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Country</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded" />
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Postal Code</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded" />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-gray-600 text-sm">About me</label>
                <textarea className="w-full mt-1 p-2 border rounded h-24">
                  
                </textarea>
              </div>

              <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
                UPDATE PROFILE
              </button>
            </div>
          </div>

          {/* Right Section - Profile Card */}
          <div className="bg-white shadow-md rounded-lg p-6 relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Image src="/profile.avif" alt="User" className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
            </div>
            <div className="mt-12 text-center">
              <h4 className="text-gray-700 text-sm">CEO / CO-FOUNDER</h4>
              <h2 className="text-lg font-semibold text-gray-800">Alec Thompson</h2>
              <p className="text-gray-600 text-sm mt-2">
                Dont be scared of the truth because we need to restart the human foundation in truth...
              </p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                FOLLOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
                 </div>
               </div>
          </>
        );;
  };
  
  export default UserProfile;
  