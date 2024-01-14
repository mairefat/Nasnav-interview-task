import React from "react";
import { Link } from "react-router-dom";

const RoutesSection = () => {
  return (
<div>
        <div className="px-36 py-4 ">
          <ul className=" text-sm flex space-x-2 ">
            <li className="">
              <Link className="  underline" to="#" data-ur1313m3t="true">
                Men
              </Link>
              <span>/</span>
            </li>
           
            <li className="ml-16">
              <Link className="  underline" to="#" data-ur1313m3t="true">
                Clothing
              </Link>
              <span>/</span>
            </li>
            <li className="ml-16">
              <Link className="  underline" to="#" data-ur1313m3t="true">
                Tops
              </Link>
              <span>/</span>
            </li>
            <li className="ml-16">
              <Link className="  underline" to="#" data-ur1313m3t="true">
                Adidas
              </Link>
              <span>/</span>
            </li>
            <li className="ml-16">
              <Link className="" to="#" data-ur1313m3t="true">
                Adidas Black T-Shirt
              </Link>
            </li>
           
          </ul>
          
        </div>
        <hr className="bg-gray-800"></hr>
    </div>
  );
};

export default RoutesSection;
