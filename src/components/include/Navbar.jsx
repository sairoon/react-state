import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-between py-4 items-center">
          <>
            <h1 className="text-2xl font-bold text-white">LOGO</h1>
          </>
          <>
            <ul className="flex gap-x-8 text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-100 ease-in ">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
