import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 flex items-center">
      <input
        type="text"
        placeholder="Search for movies..."
        className="p-2 rounded-l-lg w-full focus:outline-none"
      />
      <button className="bg-white text-pink-500 p-2 rounded-r-lg ml-2 focus:outline-none">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
