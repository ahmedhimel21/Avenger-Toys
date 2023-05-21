import React, { useContext, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../Provider/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShopByCategory() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [toysCategory, setToysCategory] = useState("Marvel");
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const handleToast = () => {
    if (!user) {
      // alert('You have to log in first to view details')
      toast.error("You have to log in first to view details");
    }
  };

  useEffect(() => {
    fetch(`https://avenger-toys-server.vercel.app/toys/${toysCategory}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toysCategory]);

  return (
    <div className="mx-8 my-6">
      <h1 className="text-center mb-4 text-2xl font-bold text-blue-500">
        Toy Category
      </h1>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab onClick={() => setToysCategory("Marvel")}>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-2 text-white text-lg font-bold rounded-lg">
              Marvel
            </span>
          </Tab>
          <Tab onClick={() => setToysCategory("Avenger")}>
            {" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-2 text-white text-lg font-bold rounded-lg">
              Avenger
            </span>
          </Tab>
          <Tab onClick={() => setToysCategory("StarWars")}>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-2 text-white text-lg font-bold rounded-lg">
              StarWars
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toys?.map((toy) => (
              <div
                key={toy?._id}
                class="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a>
                  <img
                    class="p-8 rounded-t-lg h-96"
                    src={toy?.photoURL}
                    alt="product image"
                  />
                </a>
                <div class="px-5 pb-5">
                  <a>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {toy?.toyName}
                    </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5">
                    <Rating
                      placeholderRating={toy?.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-yellow-300"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {toy?.rating}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      ${toy?.price}
                    </span>
                    <Link
                      onClick={() => handleToast()}
                      to={`/viewDetails/${toy?._id}`}
                    >
                      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toys?.map((toy) => (
              <div
                key={toy?._id}
                class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a>
                  <img
                    class="p-8 rounded-t-lg h-96"
                    src={toy?.photoURL}
                    alt="product image"
                  />
                </a>
                <div class="px-5 pb-5">
                  <a>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {toy?.toyName}
                    </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5">
                    <Rating
                      placeholderRating={toy?.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-yellow-300"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {toy?.rating}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      ${toy?.price}
                    </span>
                    <Link
                      onClick={() => handleToast()}
                      to={`/viewDetails/${toy?._id}`}
                    >
                      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toys?.map((toy) => (
              <div
                key={toy?._id}
                class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a>
                  <img
                    class="p-8 rounded-t-lg h-96"
                    src={toy?.photoURL}
                    alt="product image"
                  />
                </a>
                <div class="px-5 pb-5">
                  <a>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {toy?.toyName}
                    </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5">
                    <Rating
                      placeholderRating={toy?.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-yellow-300"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {toy?.rating}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      ${toy?.price}
                    </span>
                    <Link
                      onClick={() => handleToast()}
                      to={`/viewDetails/${toy?._id}`}
                    >
                      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </TabPanel>
        <ToastContainer></ToastContainer>
      </Tabs>
    </div>
  );
}

export default ShopByCategory;
