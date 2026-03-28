import React, { useState } from "react";
import ProductsList from "./ProductsList";
import { FaHeart } from "react-icons/fa";

const Products = ({ searchTerm, addToCart, addToWishlist ,wishlist}) => {
  


  const Categories = [
    "All",
    "Mens",
    "Women",
    "Kids",
    "New Arrivals",
    "On Sale",
  ];
  const [ActiveTab, SetActiveTab] = useState("All");

  const filteredCategories = ProductsList.filter((item) => {
    const matchesCategories =
      ActiveTab === "All" ||
      (ActiveTab === "New Arrivals" && item.newArrival) ||
      (ActiveTab === "On Sale" && item.onSale) ||
      ActiveTab === item.category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategories && matchesSearch;
  });

  const RenderProducts = filteredCategories.map((product) => {
    return (
      <div
        key={product.id}
        className="bg-zinc-100 px-3 py-4 rounded-lg border border-zinc-200"
      >
        <div className="flex justify-between items-center">
          <button
            className={`text-3xl  cursor-pointer ${wishlist.some(i=>i.id === product.id)?'text-red-600':'text-zinc-300'}`}
            onClick={() => {addToWishlist(product)}}
          >
            <FaHeart />
          </button>
          <div>
            {(product.onSale || product.newArrival) && (
              <span
                className={`px-3 py-1 text-white ${product.onSale ? "bg-red-600" : "bg-green-600"}`}
              >
                {product.onSale ? "Sale" : "New"}
              </span>
            )}
          </div>
        </div>
        <div className=" p-2 h-[30vh] w-full ">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* card content */}
        <div className="flex flex-col gap-2 text-center ">
          <h1 className="font-semibold text-zinc-800 text-[1.4rem]">
            {product.name}
          </h1>
          <div>
            {product.onSale && (
              <span className="text-zinc-500 font-semibold line-through mr-10">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-red-600 font-semibold">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="px-10">
            <button
              className="w-full  py-2 my-2 bg-blue-600 text-white rounded-lg cursor-pointer active:bg-blue-700"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="product-section" className="max-w-325 mx-auto md:mt-20 mb-5 ">
      {/* product cat */}
      <div className=" flex md:flex-nowrap flex-wrap md:gap-5 gap-3 items-center justify-center">
        {Categories.map((category) => {
          return (
            <button
              key={category}
              className={`px-5 py-2 md:text-lg text-[14px]  rounded-full cursor-pointer ${ActiveTab === category ? "bg-blue-600 text-white" : "bg-zinc-200"}`}
              onClick={() => SetActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/*products list  */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-9 mt-12 md:px-0 px-5 md:mb-auto mb-30">
        {filteredCategories.length === 0 ? (
          <p className="col-span-4 text-center mb-10 text-zinc-800 text-lg">
            No Product Found
          </p>
        ) : (
          RenderProducts
        )}
      </div>
    </section>
  );
};

export default Products;
