
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header"
const maps = () => {
    return (
            <div className="flex bg-gray-100 min-h-screen">
                 {/* Sidebar */}
                <Sidebar/>
           
                 {/* Main Content */}
                 <div className="flex-1 p-5">
                   {/* Header */}
                 <Header/>
                 <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold  mb-4">Map</h2>
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <iframe
            title="Taxila Location"
            className="w-full h-full border-0 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.807252840791!2d72.83789797538347!3d33.73707893662769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df1d0a2f9db6ff%3A0xd4dbb6c20c4b8e34!2sTaxila%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2s!4v1710800239082"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
           </div>
           </div>
        );
  };
  
  export default maps;
  