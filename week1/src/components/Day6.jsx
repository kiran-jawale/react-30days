//custom hook with axios, fetching data from freeapi.app

import React from "react";
import useAxiosData from "../hooks/useAxiosData";

const Day7 = () => {
  const [data, loading, error] = useAxiosData(
    "https://api.freeapi.app/api/v1/public/randomproducts"
  );

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Err..</h1>
      </div>
    );

    return (
      <div className="bg-zinc-800 text-white font-sans h-screen overflow-scroll w-full font-semibold p-4">
        <ul className="list-none flex flex-col gap-4 items-center justify-center">
          {data.map((product) => (
            <li key={product.id} className="bg-white rounded-lg w-2/3 shadow-md p-4">
              <h1 className="text-2xl text-black font-bold">{product.title}</h1>
              <p className="text-gray-600">{product.description}</p>
              <img
                src="https://picsum.photos/200/300/?blur"
                alt="Product Thumbnail"
                className="w-48 h-48 object-cover rounded-lg"
              />
              <ul className="list-none flex flex-row gap-2 justify-center mb-4">
                <li className="bg-gray-700  rounded-full px-4 py-2">{product.price}</li>
                <li className="bg-gray-700/70 rounded-full px-4 py-2">{product.discountPercentage}</li>
                <li className="bg-gray-700 rounded-full px-4 py-2">{product.stock}</li>
                <li className="bg-gray-700/70 rounded-full px-4 py-2">{product.category}</li>
                <li className="bg-gray-700 rounded-full px-4 py-2">
                {Array(Math.round(product.rating))
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="text-yellow-400">
                      &#9733;
                    </span>
                  ))}
                {Array(5 - Math.round(product.rating))
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="text-gray-300">
                      &#9733;
                    </span>
                  ))}
                </li>
              </ul>
              <ul className="flex flex-wrap gap-2 justify-center">
                {product.images.map((img, index) => (
                  <li key={index}>
                    <img
                      src="https://picsum.photos/200/300/?blur"
                      alt="Product Image"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Day7;
