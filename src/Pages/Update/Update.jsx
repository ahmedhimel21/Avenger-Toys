import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const Update = () => {
  const data = useLoaderData();
  const handleUpdate = (e) =>{
    e.preventDefault()
    const form = e.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const details = form.details.value;
    const updatedData = {
      price, availableQuantity, details
    }
    console.log(updatedData)
    fetch(`http://localhost:5000/update/${data?._id}`,{
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.modifiedCount > 0){
        console.log(data)
        toast.success('Toys updated successfully')
        form.reset()
      }
    })

  }
  useTitle('Update')
  return (
    <div className="my-6">
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleUpdate}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="Enter price"
              name="price"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Available Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="text"
              placeholder="Enter available quantity"
              name="availableQuantity"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Detail Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter detail description"
              rows="4"
              name="details"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Update;
