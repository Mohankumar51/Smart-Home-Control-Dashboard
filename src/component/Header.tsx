// import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-green-400 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center mr-10 ml-10">
        <h1 className="text-xl font-medium">Smart Home Dashboard</h1>
        <nav className="space-x-8">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add-appliances" className="hover:underline">Add Appliances</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </nav>
      </div>
    </header>
  )
}
