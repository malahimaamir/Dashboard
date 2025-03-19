export default function Footer() {
    return (
      <footer className="bg-gray-100 py-4 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-gray-700 text-sm">
            <a href="#" className="hover:text-gray-900">HOME</a>
            <a href="#" className="hover:text-gray-900">COMPANY</a>
            <a href="#" className="hover:text-gray-900">PORTFOLIO</a>
            <a href="#" className="text-purple-600 font-semibold hover:text-purple-800">BLOG</a>
          </nav>
  
          {/* Copyright Section */}
          <p className="text-gray-600 text-sm mt-3 md:mt-0">
            © 2025 <a href="#" className="text-purple-600 font-semibold hover:underline">Creative Tim</a>, made with love for a better web
          </p>
        </div>
      </footer>
    );
  }
  