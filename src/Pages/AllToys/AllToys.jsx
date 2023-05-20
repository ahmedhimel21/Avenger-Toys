import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const toysData = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toysData.filter((toy) => {
    return toy.toyName.toLowerCase().includes(searchQuery.toLowerCase());
  });
  useTitle("AllToys");
  return (
    <div className="mx-8 my-6 rounded-lg">
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-500">
          All Toys
        </h1>
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search by toy name"
            className="border border-purple-500 rounded py-2 px-4"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <table className="min-w-full border-2 border-black-300">
          <thead>
            <tr>
              <th className="border-2 border-gray-300 border-l text-center py-2 px-4 bg-blue-300">
                Seller
              </th>
              <th className="border-2 border-gray-300 border-l text-center py-2 px-4 bg-blue-300">
                Toy Name
              </th>
              <th className="border-2 border-gray-300 border-l text-center py-2 px-4 bg-blue-300">
                Sub-category
              </th>
              <th className="border-2 border-gray-300 border-l text-center py-2 px-4 bg-blue-300">
                Price
              </th>
              <th className="border-2 border-gray-300 border-l text-center py-2 px-4 bg-blue-300">
                Available Quantity
              </th>
              <th className="border-2 border-gray-300 py-2 px-4 bg-blue-300">
                View Details
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredToys.map((toy, index) => (
              <tr key={toy._id}>
                <td className="border-2 border-gray-300 border-l py-2 px-4">
                  {toy.sellerName}
                </td>
                <td className="border-2 border-gray-300 border-l py-2 px-4">
                  {toy.toyName}
                </td>
                <td className="border-2 border-gray-300 border-l py-2 px-4">
                  {toy.subCategory}
                </td>
                <td className="border-2 border-gray-300 border-l py-2 px-4">
                  ${toy.price}
                </td>
                <td className="border-2 border-gray-300 border-l py-2 px-4">
                  {toy.availableQuantity}
                </td>
                <td className="border-2 border-gray-300 border-l py-2 px-4">
                  <Link to={`/viewDetails/${toy?._id}`}>
                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
