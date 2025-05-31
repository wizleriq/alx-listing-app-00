import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white p-4">
      <div className="max-w-7xl mx-auto flex  flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">StayEasy</div>
        
        {/* Search Bar */}
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search for destinations..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        
        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-green-600 border border-green-600 rounded-full hover:bg-green-100">
            Sign In
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Types of Accommodation */}
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-700">
        {['Rooms', 'Mansion', 'Countryside', 'Apartments', 'Cabins', 'Hostels'].map((category) => (
          <span
            key={category}
            className="cursor-pointer px-3 py-1 bg-gray-100 rounded-full hover:bg-green-100"
          >
            {category}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
