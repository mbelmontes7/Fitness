// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className=" bg-red-530 text-white p-1 rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-1xl font-bold">💪🏻</h1>
        <nav>
          <ul className="flex space-x-4 text-sm">
          {/* <li><a href="/Home" className="btn btn-outline btn-info">Home</a></li> */}
            <li><a href="#" className="btn btn-outline btn-info">Workouts</a></li>
            <li><a href="#" className="btn btn-outline btn-info">Nutrition</a></li>
            <li><a href="#" className="btn btn-outline btn-info">Calories Cal</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
