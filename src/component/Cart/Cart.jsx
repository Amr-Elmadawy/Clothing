import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = ({
  activePanel,
  HandleClose,
  cart,
  HandleDelete,
  quantityIncrement,
  quantityDecrement,
  subtotal,
  ShippingFee,
  orderTotal,
  setOrderSummary,
}) => {
  return (
    <div
      className={`flex justify-between flex-col   bg-zinc-100 fixed top-0 right-0 bottom-0 left-auto z-40 w-[55vh] py-5 border border-zinc-300 transform transition-transform duration-200  ${activePanel === "cart" ? "translate-x-0 " : "translate-x-full"}`}
    >
      <div className="px-10">
        <h3 className="text-3xl text-center font-bold text-zinc-800  pb-5">
          Your Cart
        </h3>
      </div>

      {/* cart items */}
      <div className=" flex-1 flex flex-col gap-1.5 overflow-y-auto scroll ">
        {cart.length === 0 ? (
          <p className=" text-center text-red-400 ">Your Cart Is empty...</p>
        ) : (
          cart.map((product, index) => {
            return (
              <div key={product.id}
                className={`flex items-center gap-x-3  border-y border-zinc-300 px-2 py-1  ${index % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
              >
                <div className="w-20 h-20  ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between  my-1">
                    <h4 className="text-zinc-800 font-bold text-lg">
                      {product.name}
                    </h4>
                    <button
                      className="text-white bg-red-600 w-7 h-7 flex justify-center items-center rounded-full mr-6.5 cursor-pointer active:bg-red-700"
                      onClick={() => HandleDelete(product)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <div className="flex justify-between  my-1">
                    {product.onSale && (
                      <span className="text-zinc-500 font-semibold line-through ">
                        ${product.oldPrice?.toFixed(2)}
                      </span>
                    )}
                    <span className="text-red-600 font-semibold">
                      ${product.price?.toFixed(2)}
                    </span>
                    <div className="flex gap-x-2">
                      <button
                        className="text-white bg-blue-600 w-7 h-7 flex justify-center items-center rounded-full cursor-pointer active:bg-blue-700 text-[14px]"
                        onClick={() => quantityDecrement(product)}
                      >
                        <FaMinus />
                      </button>
                      <span className="text-zinc-800">{product.quantity}</span>
                      <button
                        className="text-white bg-blue-600 w-7 h-7 flex justify-center items-center rounded-full cursor-pointer active:bg-blue-700 text-[14px]"
                        onClick={() => {
                          quantityIncrement(product);
                        }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* cart items */}

      {/*cart details  */}

      <div className="border-y border-zinc-300 my-5 px-10">
        <div className="flex justify-between items-center pt-2 text-[14px] ">
          <span className="text-zinc-800 font-semibold">Subtotal</span>
          <span className="text-zinc-800 font-semibold">
            {" "}
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center py-2 text-[14px]  ">
          <span className="text-zinc-800 font-semibold">
            Shipping & Handlings
          </span>
          <span className="text-zinc-800 font-semibold">
            {" "}
            ${ShippingFee.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-t border-zinc-300">
          <span className="text-blue-600 font-bold text-lg">Order Total</span>
          <span className="text-blue-600 font-bold">
            {" "}
            ${orderTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* cart details  */}

      {/* buttons */}
      <div className="flex justify-between gap-x-3 px-10 ">
        <button
          className="text-white bg-blue-600 flex-1 cursor-pointer active:bg-blue-700  h-[7vh] w-full"
          onClick={HandleClose}
        >
          Close
        </button>
        <button
          className={`text-white  flex-1  active:bg-blue-700  h-[7vh] w-full 
        ${cart.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 cursor-pointer"}`}
          disabled={cart.length === 0}
          onClick={() => setOrderSummary(true)}
        >
          Checkout
        </button>
      </div>
      {/* buttons */}
    </div>
  );
};

export default Cart;
