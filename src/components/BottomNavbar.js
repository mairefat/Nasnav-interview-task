import React from "react";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <nav className="  bg-black ">
      
        <div className="px-36 py-2 ">
          <ul className=" text-sm flex space-x-32 ">
            <li className="">
              <Link className=" text-white" to="#" data-ur1313m3t="true">
                Men
              </Link>
            </li>
            <li className="ml-16">
              <Link className=" text-white" to="#" data-ur1313m3t="true">
                Women
              </Link>
            </li>
            <li className="ml-16">
              <Link className=" text-white" to="#" data-ur1313m3t="true">
                Unisex
              </Link>
            </li>
            <li className="ml-16">
              <Link className=" text-white" to="#" data-ur1313m3t="true">
                Kids
              </Link>
            </li>
            <li className="ml-16">
              <Link className=" text-white text-nowrap" to="#" data-ur1313m3t="true">
                Best Seller
              </Link>
            </li>
            <li className="ml-16">
              <Link className=" text-white text-nowrap" to="#" data-ur1313m3t="true">
                New Arrivals
              </Link>
            </li>
            <li className="ml-16">
              <Link className=" text-red-700" to="#" data-ur1313m3t="true">
                Offers
              </Link>
            </li>
          </ul>
        </div>
      
    </nav>
  );
};

export default BottomNavbar;
