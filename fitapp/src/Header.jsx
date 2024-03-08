// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className=" bg-red-500 text-white p-4 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-1xl font-bold">Become Stronger 💪🏻</h1>
        <nav>
          <ul className="flex space-x-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Workouts</a></li>
            <li><a href="#" className="hover:underline">Nutrition</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
