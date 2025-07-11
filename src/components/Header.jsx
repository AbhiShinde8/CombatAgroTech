import React from "react";

import logo from "../assets/CombatLogo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="h-20 shadow-md sticky top-0">
      <div className="container mx-auto flex items-center h-full px-2 justify-between">
        {/* logo */}
        <div className="h-full">
          <div className="h-full  flex justify-center items-center ">
            <img
              src={logo}
              alt="Combat Logo"
              width={120}
              height={30}
              className="lg:hidden"
            />
            <img
              src={logo}
              alt="Combat Logo"
              width={150}
              height={30}
              className="hidden lg:block"
            />
          </div>
        </div>
        {/* Search  */}
        <div>
          <Search />
        </div>
        {/* Login  */}
        <div>Login And Cart</div>
      </div>
    </header>
  );
};

export default Header;
