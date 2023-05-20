import React from "react";

const NewArrivalsSection = () => {
  const newToys = [
    {
      id: 1,
      name: "Bat Man",
      image: "batmanNew.webp",
    },
    {
      id: 2,
      name: "Donna",
      image: "DonnaNew.webp",
    },
    {
      id: 3,
      name: "McFarlane",
      image: "McFarlaneNew.webp",
    },
    {
      id: 4,
      name: "Red Hood",
      image: "redhoodNew.webp",
    },
    {
      id: 5,
      name: "Robin",
      image: "robinNew.webp",
    },
  ];

  return (
    <section className="py-8 mx-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">New Arrivals</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {newToys.map((toy) => (
          <div key={toy.id} className="border rounded shadow-md p-4">
            <img
              src={toy.image}
              alt={toy.name}
              className="w-full h-64 object-contain mb-2"
            />
            <p className="text-sm font-semibold">{toy.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsSection;
