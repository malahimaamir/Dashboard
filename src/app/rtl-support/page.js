
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header"
const rtlsupport = () => {
    return (
          <>
             <div className="flex bg-gray-100 min-h-screen">
                                    {/* Sidebar */}
                                   <Sidebar/>
                              
                                    {/* Main Content */}
                                    <div className="flex-1 p-5">
                                      {/* Header */}
                                    <Header/>
                                    <div>this is rtlsupport page</div>
                              </div>
                              </div>
          </>
        );;
  };
  
  export default rtlsupport;
  