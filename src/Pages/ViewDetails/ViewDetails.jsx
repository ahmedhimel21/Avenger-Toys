import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ViewDetails = () => {
  const data = useLoaderData();
  const {
    photoURL,
    availableQuantity,
    details,
    price,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
    toyName,
  } = data;
  // console.log(data);
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex mx-8 my-6">
      <div className="w-1/2">
        <img
          src={photoURL}
          alt="toyPhoto"
          className="w-full h-96 object-contain"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{toyName}</h3>
          <p className="text-gray-600 mb-4 text-md font-semibold">
            <span className="text-xl font-bold">Description:</span> {details}
          </p>
          <div class="flex items-center mt-2.5 mb-5">
            <p className="text-gray-600 mb-4 text-md font-semibold">
              <span className="text-xl font-bold">Price:</span> ${price}{" "}
            </p>
            <p className="text-gray-600 mb-4 text-md font-semibold ml-5">
              <span className="text-xl font-bold">Available Quantity: </span>
              {availableQuantity}{" "}
            </p>
          </div>
          <div class="flex items-center mt-2.5 mb-5">
            <p className="text-gray-600 mb-4 text-md font-semibold">
              <span className="text-xl font-bold">Seller Name:</span> $
              {sellerName}
            </p>
            <p className="text-gray-600 mb-4 text-md font-semibold ml-5">
              <span className="text-xl font-bold">Seller Email: </span>
              {sellerEmail}{" "}
            </p>
          </div>
          <p className="text-gray-600 mb-4 text-md font-semibold">
            <span className="text-xl font-bold">SubCategory</span> {subCategory}
          </p>
        </div>
        <div class="flex items-center mt-2.5 mb-5">
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-yellow-300"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
