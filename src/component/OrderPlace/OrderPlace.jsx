import React from "react";

const OrderPlace = ({ setOrderPlace }) => {
  return (
    <section className="fixed bg-black/90 inset-0 z-40 flex justify-center items-center ">
      <div className=" bg-zinc-100 w-[50vh] p-5 rounded-lg px-7 text-center">
        <h2 className="text-3xl text-green-600  font-bold text-center p-3">
          Order Placed!
        </h2>
        <span className="text-zinc-800 py-2">Thanks For Your Purchase!</span>
        <div className="flex justify-center items-center  py-3 ">
          <button
            className="text-white  active:bg-blue-700 rounded-lg px-5  h-[6vh] w-fit bg-blue-600 cursor-pointer "
            onClick={() => setOrderPlace(false)}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderPlace;
