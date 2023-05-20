import React from "react";
import background from "../../assets/bg.jpg";

const Banner = () => {
  return (
    <div className="relative mx-6 my-4">
      <div>
        <img
          src={background}
          alt=""
          srcset=""
          className="w-full h-[562px] object-cover rounded-lg"
        />
      </div>
      <div className="absolute top-1/3 right-1/3 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Collect your Avenger's monster toys
        </h1>
        <p className="text-lg mb-6 text-center">
          Join Monster community on <span className="text-orange-500 text-xl font-bold">Avenger's,</span> <br /> find  your rare toys, and
          play around there.{" "}
        </p>
        <div className="text-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600">
          Get yor Toy
        </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
