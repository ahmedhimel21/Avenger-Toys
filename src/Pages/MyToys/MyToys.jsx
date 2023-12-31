import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const [userAddedToys, setUserAddedToys] = useState([]);
  const [sort, setSort] = useState("");
  console.log(sort);
  const { user } = useContext(AuthContext);
  const handleDeleteToy = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this toy?"
    );
    if (confirmDelete) {
      fetch(`https://avenger-toys-server.vercel.app/delete/${id}`, { method: "DELETE" })
        .then(() => {
          setUserAddedToys((prevToys) =>
            prevToys.filter((toy) => toy._id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting toy:", error);
        });
    }
  };
  const url = `https://avenger-toys-server.vercel.app/addAToy?sellerEmail=${user?.email}&sort=${sort}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserAddedToys(data));
  }, [sort]);

  useTitle("MyToys");
  return (
    <div className="my-6">
      <div className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">My Toys</h1>
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
                <th className="border py-2 px-4 flex">
                  <select
                    className="bg-white border border-gray-300 rounded px-2 py-1"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="">Price</option>
                    <option value="true">
                      Ascending Price
                    </option>
                    <option value="false">
                      Descending Price
                    </option>
                  </select>
                  {/* <button type="submit">Ascending Price</button>
                  <button type="submit">Descending Price</button> */}
                </th>
                <th className="border py-2 px-4">Rating</th>
                <th className="border py-2 px-4">Available Quantity</th>
                <th className="border py-2 px-4">Description</th>
                <th className="border py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userAddedToys?.map((toy) => (
                <tr key={toy?._id}>
                  <td className="border py-2 px-4">
                    <img
                      src={toy?.photoURL}
                      alt={toy?.toyName}
                      className="w-12 h-12 object-contain"
                    />
                  </td>
                  <td className="border py-2 px-4">{toy?.toyName}</td>
                  <td className="border py-2 px-4">{toy?.sellerName}</td>
                  <td className="border py-2 px-4">{toy?.sellerEmail}</td>
                  <td className="border py-2 px-4">{toy?.subCategory}</td>
                  <td className="border py-2 px-4">${toy?.price}</td>
                  <td className="border py-2 px-4">{toy?.rating}</td>
                  <td className="border py-2 px-4">{toy?.availableQuantity}</td>
                  <td className="border py-2 px-4">{toy?.details}</td>
                  <td className="border py-2 px-4 flex">
                    <Link to={`/update/${toy?._id}`}>
                      <button className="bg-blue-500 text-white font-bold py-1 px-2 rounded mr-2">
                        Update
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDeleteToy(toy?._id)}
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
