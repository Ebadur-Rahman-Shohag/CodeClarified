import { Link } from "react-router-dom";
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-cyan-400 to-blue-800 text-xl font-bold text-white">
      <div className="w-full container mx-auto flex justify-between items-center px-4 py-2">
        <Link to="/">Shohag</Link>
        <button 
          className=" md:hidden" 
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <div className={`flex-col md:flex-row gap-x-16 py-4 md:flex ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="/javascript" className="block text-center">JavaScript</Link>
          <Link to="/react" className="block text-center">ReactJs</Link>
          <Link to="/node" className="block text-center">NodeJs</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

