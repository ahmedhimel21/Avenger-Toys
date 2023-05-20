import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Link } from "react-router-dom";

const MyToys = () => {
  const [userAddedToys, setUserAddedToys] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/addAToy?sellerEmail=${user?.email}&sort=1`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserAddedToys(data));
  }, []);

  const handleDeleteToy = (id) => {
    setToys((prevToys) => prevToys.filter((toy) => toy.id !== id));
  };

  return (
    <div className="my-6">
      <div className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Toys</h1>
        {userAddedToys.length === 0 ? (
          <p>No toys added yet.</p>
        ) : (
          <table className="border-collapse border">
            <thead>
              <tr>
                <th className="border py-2 px-4">Toy Picture</th>
                <th className="border py-2 px-4">Toy Name</th>
                <th className="border py-2 px-4">Seller Name</th>
                <th className="border py-2 px-4">Seller Email</th>
                <th className="border py-2 px-4">Sub-category</th>
                <th className="border py-2 px-4">
                  <select
                    className="bg-white border border-gray-300 rounded px-2 py-1"
                    // value={sortOrder}
                    // onChange={handleSortChange}
                  >
                    <option value="price">Price</option>
                    <option value="descending">Ascending Price</option>
                    <option value="descending">Descending Price</option>
                  </select>
                </th>
                <th className="border py-2 px-4">Rating</th>
                <th className="border py-2 px-4">Available Quantity</th>
                <th className="border py-2 px-4">Description</th>
                <th className="border py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userAddedToys.map((toy) => (
                <tr key={toy.id}>
                  <td className="border py-2 px-4">
                    <img
                      src={toy.photoURL}
                      alt={toy.toyName}
                      className="w-12 h-12"
                    />
                  </td>
                  <td className="border py-2 px-4">{toy.toyName}</td>
                  <td className="border py-2 px-4">{toy.sellerName}</td>
                  <td className="border py-2 px-4">{toy.sellerEmail}</td>
                  <td className="border py-2 px-4">{toy.subCategory}</td>
                  <td className="border py-2 px-4">{toy.price}</td>
                  <td className="border py-2 px-4">{toy.rating}</td>
                  <td className="border py-2 px-4">{toy.availableQuantity}</td>
                  <td className="border py-2 px-4">{toy.details}</td>
                  <td className="border py-2 px-4 flex">
                    <Link>
                      <button className="bg-blue-500 text-white font-bold py-1 px-2 rounded mr-2">
                        Update
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDeleteToy(toy.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyToys;
