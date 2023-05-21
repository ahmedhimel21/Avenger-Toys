import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
  const [subCategory, setSubCategory] = useState("");

  const {user} = useContext(AuthContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const priceInt = form.price.value;
    const price = parseInt(priceInt);
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
    fetch('http://localhost:5000/addAToy',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(result =>{
      console.log(result)
      if(result.insertedId){
        toast.success('Toys added successfully')
        form.reset()
      }
    })
  };
  useTitle('AddAToy')
  return (
   <div className="mx-12 my-4">
     <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Add A Toy</h1>
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
            defaultValue={user?.displayName}
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
      <ToastContainer />
    </div>
   </div>
  );
};

export default AddAToy;
