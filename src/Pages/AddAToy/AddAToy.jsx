import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const AddAToy = () => {
  // const [pictureUrl, setPictureUrl] = useState("");
  // const [toyName, setToyName] = useState("");
  // const [sellerName, setSellerName] = useState("");
  // const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  // const [price, setPrice] = useState("");
  // const [rating, setRating] = useState("");
  // const [availableQuantity, setAvailableQuantity] = useState("");
  // const [description, setDescription] = useState("");

  const {user} = useContext(AuthContext)
  console.log(user)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const details = form.description.value;
    const formData = {
      photoURL,
      toyName,
      subCategory,
      sellerName,
      sellerEmail,
      price,
      rating,
      availableQuantity,
      details,
    };
    console.log("Form submitted!", formData);
  };

  return (
   <div className="mx-8">
     <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add A Toy</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="pictureUrl"
            className="block text-gray-700 font-bold mb-2"
          >
            Picture URL of the toy
          </label>
          <input
            type="text"
            id="pictureUrl"
            // value={pictureUrl}
            // onChange={(e) => setPictureUrl(e.target.value)}
            name="photoURL"
            className="border border-gray-400 p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
           Toy Name
          </label>
          <input
            type="text"
            id="toyName"
            name="toyName"
            // value={toyName}
            // onChange={(e) => setToyName(e.target.value)}
            className="border border-gray-400 p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="sellerName"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            // value={sellerName}
            defaultValue={user?.displayName}
            // onChange={(e) => setSellerName(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="sellerEmail"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Email
          </label>
          <input
            type="email"
            id="sellerEmail"
            name="sellerEmail"
            defaultValue={user?.email}
            // value={sellerEmail}
            // onChange={(e) => setSellerEmail(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subCategory"
            className="block text-gray-700 font-bold mb-2"
          >
            Sub-category
          </label>
          <select
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="border border-gray-400 p-2 w-full"
            required
          >
            <option value="">Select sub-category</option>
            <option value="Marvel">Marvel Toys</option>
            <option value="Avenger">Avenger Toys</option>
            <option value="StarWars">Star wars Toys</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            // value={price}
            // onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-400 p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-bold mb-2"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            // value={rating}
            // onChange={(e) => setRating(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="availableQuantity"
            className="block text-gray-700 font-bold mb-2"
          >
            Available Quantity
          </label>
          <input
            type="number"
            id="availableQuantity"
            name="availableQuantity"
            // value={availableQuantity}
            // onChange={(e) => setAvailableQuantity(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Detail Description
          </label>
          <textarea
            id="description"
            name="description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-400 p-2 w-full"
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Add Toy
        </button>
      </form>
    </div>
   </div>
  );
};

export default AddAToy;
