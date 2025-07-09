import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 text-sm z-10 relative">
      <div className="text-orange-500 font-  font-bold text-xl">ROBOTIK</div>
      <div className="space-x-6 text-white font-medium">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Division</a>
        <a href="#" className="hover:underline">Achievements</a>
        <a href="#" className="hover:underline">Partners</a>
       
      </div>
    </nav>
  );
}
