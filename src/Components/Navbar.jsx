
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = ({activeSection})=>{
    const [isOpen, setIsOpen] = useState(false);
    

    const menuArray = ['Home', 'Projects', 'Contact'];
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };


    return(
      <header className="bg-gray-800 pb-5 border-sky-600 border-b-2">
      <div className="flex justify-between items-center px-4  relative ">
        <div className="w-max">
          <h2 className="text-2xl text-white">Sanju Shaw</h2>
        </div>
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          }  absolute  top-full left-0 w-full bg-gray-800 md:flex md:static md:w-auto md:bg-transparent md:items-center md:gap-4 transition-all duration-300 ease-in-out`}
        >
          {menuArray.map((section) => (
            <div key={section} className="text-center m-4 transition-all   md:text-left">
              <a
                href={`#${section}`}
                className={`text-white py-2  md:py-0 md:px-2 cursor-pointer transition-all duration-300 ease-in-out ${
                  activeSection === section ? 'underline' : 'hover:underline'
                }`}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {section}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </header>
    );
}
export default Navbar;