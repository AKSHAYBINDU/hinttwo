import React, { useState } from "react";

import Icontwo from "../assets/icons/Icontwo.svg";
import Iconthree from "../assets/icons/Iconthree.svg";
import Iconfour from "../assets/icons/Iconfour.svg";
import Iconfive from "../assets/icons/Iconfive.svg";

import IcononeActive from "../assets/icons/IcononeActive.svg";

const BottomNav = ({ toggleFullscreenMap, activeIndex }) => {
  const Menu = [IcononeActive, Icontwo, Iconthree, Iconfour, Iconfive];

  const handleButtonClick = (index) => {
    if (index !== activeIndex) {
      window.location.href = "https://www.flipkart.com";
    } else if (index === 0) {
      // Assuming IcononeActive corresponds to index 0
      toggleFullscreenMap();
    }
  };
  return (
    <div className=" text-white w-full flex justify-around items-center bg-black rounded-full">
      {Menu.map((icon, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`custom-bottom-navigation-height bg-black rounded-[29.50px]`}
        >
          <img
            src={icon}
            alt={`Icon ${index}`}
            className={`px-3 custom-bottom-navigation-height-icon `}
          />
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
