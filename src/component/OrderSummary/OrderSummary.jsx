import React from "react";

const OrderSummary = ({
  subtotal,
  ShippingFee,
  orderTotal,
  cart,
  setOrderSummary,
  setOrderPlace,
  setCart,
}) => {
  const HandleOrderPlace = () => {
    setOrderPlace(true);
    setOrderSummary(false);
    setCart([])
  };

  return (
    <section className="fixed bg-black/90 inset-0 z-40 flex justify-center items-center ">
      <div className=" bg-zinc-100 md:w-[70vh] w-[50vh] p-5 rounded-lg px-7 ">
        <h2 className="text-3xl text-zinc-800  font-bold text-center p-5">
          Order Summary
        </h2>
        <div className="flex flex-col">
          {/* item */}
          <div className="flex-1 ">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b border-zinc-300  "
              >
                <span className="text-zinc-800  ">
                  {item.name} (x{item.quantity})
                </span>
                <span className="text-zinc-800  ">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* item */}
          {/*order details  */}

          <div className="mb-3  ">
            <div className="flex justify-between items-center pt-2  ">
              <span className="text-zinc-800 ">Subtotal</span>
              <span className="text-zinc-800 ">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2   ">
              <span className="text-zinc-800 ">Shipping & Handlings</span>
              <span className="text-zinc-800 ">${ShippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-t border-zinc-300">
              <span className="text-blue-600 font-bold text-lg">
                Order Total
              </span>
              <span className="text-blue-600 font-bold">
                ${orderTotal.toFixed(2)}
              </span>
            </div>
          </div>

          {/* order details  */}

          {/* buttons */}
          <div className="flex justify-between gap-x-3  ">
            <button
              className="text-white bg-zinc-600 flex-1  active:bg-zinc-700 rounded-lg  h-[6vh] w-full cursor-pointer"
              onClick={() => setOrderSummary(false)}
            >
              Cancel
            </button>
            <button
              className="text-white  flex-1  active:bg-blue-700 rounded-lg  h-[6vh] w-full bg-blue-600 cursor-pointer"
              onClick={HandleOrderPlace}
            >
              Place Order
            </button>
          </div>
          {/* buttons */}
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
