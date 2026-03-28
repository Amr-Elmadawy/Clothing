import React from "react";

const WishList = ({
  activePanel,
  HandleClose,
  wishlist,
  setWishlist,
  addToCart,
}) => {

  return (
    <div
      className={`flex justify-between flex-col   bg-zinc-100 fixed top-0 right-0 bottom-0 left-auto z-40 w-[55vh] py-5 border border-zinc-300 transform transition-transform duration-200 ${activePanel === "wishlist" ? "translate-x-0 " : "translate-x-full"} `}
    >
      <div className="px-10">
        <h3 className="text-3xl text-center font-bold text-zinc-800  pb-5">
          Your WishList
        </h3>
      </div>

      {/* wishlist items */}
      <div className=" flex-1 flex flex-col gap-1.5 overflow-y-auto scroll">
        {wishlist.length === 0 ? (
          <p className=" text-red-400 text-center">Your Wishlist Is empty...</p>
        ) : (
          wishlist.map((product, index) => {
            return (
              <div key={product.id}
                className={`flex items-center gap-x-3  border-y border-zinc-300 px-2 py-1
              ${index % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
              >
                <div className="w-20 h-20  ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center my-1">
                    <h4 className="text-zinc-800 font-bold text-lg flex-1">
                      {product.name}
                    </h4>
                    <span className="text-zinc-800 ">{product.addDate}</span>
                  </div>
                  <div className="flex justify-between  my-1">
                    {product.onSale && (
                      <span className="text-zinc-500 font-semibold line-through ">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-red-600 font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex gap-x-2">
                      <button
                        className="text-white bg-blue-600  h-[4vh] px-3  rounded-full cursor-pointer active:bg-blue-700 "
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* wishlist items */}

      {/* buttons */}
      <div className="flex justify-between gap-x-3 px-10 mt-3 ">
        <button
          className="text-white bg-blue-600 flex-1 cursor-pointer active:bg-blue-700  h-[7vh] w-full"
          onClick={HandleClose}
        >
          Close
        </button>
        <button
          className="text-white bg-blue-600 flex-1 cursor-pointer active:bg-blue-700  h-[7vh] w-full"
          onClick={() => {
            setWishlist([]);
          }}
        >
          Clear All
        </button>
      </div>
      {/* buttons */}
    </div>
  );
};

export default WishList;
