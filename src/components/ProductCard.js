// ProductCard.js

import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const ProductCard = ({ productDetailItem }) => {
  return (
    <div className="mt-4 max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img
        className="w-full rounded-lg object-cover object-center"
        src=""
        alt="product"
      />
      <p className="my-4 pl-4 font-bold text-gray-500">{productDetailItem.description}</p>
      <div className="flex justify-between">
        <p className="mt-4 flex flex-col text-xl font-bold text-violet-900">
          <span>
            {productDetailItem.price}{' '}
            <span className="text-xs text-gray-400 ">LE</span>
          </span>
          <div>
            <span className="text-sm text-gray-400 line-through">
              {productDetailItem.previousPrice}
              <span className="text-xs text-gray-400 ">LE</span>
            </span>
            <button className="border-none bg-[#fff100] ml-8 h-6 mt-4 rounded-md text-sm">
              {productDetailItem.offer}
            </button>
          </div>
        </p>
        <div>
          <img src={productDetailItem.logo} alt="adidas" style={{ width: '60px', height: '50px' }} />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Rater total={5} interactive={false} rating={4.5} />
        <p className="ml-3 text-sm font-bold">
          {productDetailItem.numRev}
        </p>
      </div>

      <div className="flex text-sm items-center justify-center">
        <p>Pickup From Egypt Mall</p>
      </div>
    </div>
  );
};

export default ProductCard;
