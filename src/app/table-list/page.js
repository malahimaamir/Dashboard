import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const tablelist = () => {
  const data = [
    {
      name: "Dakota Rice",
      country: "Niger",
      city: "Oud-Turnhout",
      salary: "$36,738",
    },
    {
      name: "Minerva Hooper",
      country: "Curaçao",
      city: "Sinaai-Waas",
      salary: "$23,789",
    },
    {
      name: "Sage Rodriguez",
      country: "Netherlands",
      city: "Baileux",
      salary: "$56,142",
    },
    {
      name: "Philip Chaney",
      country: "Korea, South",
      city: "Overland Park",
      salary: "$38,735",
    },
    {
      name: "Doris Greene",
      country: "Malawi",
      city: "Feldkirchen in Kärnten",
      salary: "$63,542",
    },
    {
      name: "Mason Porter",
      country: "Chile",
      city: "Gloucester",
      salary: "$78,615",
    },
  ];
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Header */}
        <Header />
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col space-y-6">
          {/* Simple Table Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-4 text-white">
              <h2 className="text-xl font-bold">Simple Table</h2>
              <p className="text-sm opacity-90">
                Here is a subtitle for this table
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Country
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      City
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Salary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="border-b last:border-none">
                      <td className="p-4">{row.name}</td>
                      <td className="p-4">{row.country}</td>
                      <td className="p-4">{row.city}</td>
                      <td className="p-4">{row.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table on Plain Background */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-4 text-white">
              <h2 className="text-xl font-bold">Table on Plain Background</h2>
              <p className="text-sm opacity-90">
                Here is a subtitle for this table
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-semibold text-gray-700">
                      ID
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Salary
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Country
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      City
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="border-b last:border-none">
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{row.name}</td>
                      <td className="p-4">{row.salary}</td>
                      <td className="p-4">{row.country}</td>
                      <td className="p-4">{row.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default tablelist;
