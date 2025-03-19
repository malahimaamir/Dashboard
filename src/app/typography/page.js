import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const typography = () => {
  return (
    <>
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-5">
          {/* Header */}
          <Header />
          <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className=" mt-8 bg-gradient-to-r from-purple-500 to-purple-700 p-4 text-white flex justify-between items-center">
        <h1 className="text-lg font-bold">Material Dashboard Heading</h1>
        <p className="text-sm opacity-80">Created using Roboto Font Family</p>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
          <ul className="space-y-4 text-gray-600">
            <li className="font-semibold text-gray-900">Header 1</li>
            <li>Header 2</li>
            <li>Header 3</li>
            <li>Header 4</li>
            <li>Header 5</li>
            <li>Header 6</li>
            <li>Paragraph</li>
            <li>Quote</li>
            <li>Muted Text</li>
            <li>Primary Text</li>
            <li>Info Text</li>
            <li>Success Text</li>
            <li>Warning Text</li>
            <li>Danger Text</li>
            <li>Small Tag</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Headings */}
          <h1 className="text-4xl font-bold">The Life of Material Dashboard</h1>
          <h2 className="text-3xl font-semibold mt-4">The Life of Material Dashboard</h2>
          <h3 className="text-2xl font-medium text-blue-600 mt-4">The Life of Material Dashboard</h3>
          <h4 className="text-xl mt-4">The Life of Material Dashboard</h4>
          <h5 className="text-lg mt-4">The Life of Material Dashboard</h5>
          <h6 className="text-base font-bold mt-4 uppercase">THE LIFE OF MATERIAL DASHBOARD</h6>

          {/* Paragraph */}
          <p className="mt-6 text-gray-700">
            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I
            understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to
            show people, this is the level that things could be at...
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-gray-300 pl-4 italic mt-4 text-gray-700">
            “I will be the leader of a company that ends up being worth billions of dollars, because I got the answers.
            I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities,
            to show people, this is the level that things could be at.”
            <span className="block text-gray-500 text-sm mt-2">— Kanye West, Musician</span>
          </blockquote>

          {/* Text Variations */}
          <p className="text-gray-400 mt-6">Muted Text</p>
          <p className="text-blue-500 mt-2">Primary Text</p>
          <p className="text-blue-400 mt-2">Info Text</p>
          <p className="text-green-500 mt-2">Success Text</p>
          <p className="text-yellow-500 mt-2">Warning Text</p>
          <p className="text-red-500 mt-2">Danger Text</p>

          {/* Small Tag */}
          <h4 className="mt-6 text-xl font-bold">Header with small subtitle</h4>
          <p className="text-gray-600 text-sm">Use *small* tag for the headers</p>
        </main>
      </div>
    </div>
    <Footer/>
        </div>
      </div>
    </>
  );
};

export default typography;
