import React from "react";
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

const Search = () => {
  return (
    <div className="w-full  min-w-[300px] lg:min-w-[420px] h-12 rounded-lg border overflow-hidden flex items-center bg-slate-50 ">
      <button className="flex cursor-pointer justify-center items-center h-full p-3 ">
        <IoSearch size={22} />
      </button>
      <div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Search "corex" ',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Search "Sartaj" ',
            1000,
            'Search "Medaly" ',
            1000,
            'Search "Keli spacial" ',
            1000,
          ]}
          wrapper="span"
          speed={50}
          //   style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Search;
