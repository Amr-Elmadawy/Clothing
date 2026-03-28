import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlace from "../OrderPlace/OrderPlace";

const Home = () => {
  // const [cart, setCart] = useState(() => {
  //   const storeCart = localStorage.getItem("cart");
  //   return storeCart ? JSON.parse(storeCart) : [];
  // });
  const [cart, setCart] = useState(() => {
    try {
      const storeCart = localStorage.getItem("cart");
      return storeCart ? JSON.parse(storeCart) : [];
    } catch (error) {
      console.error("Invalid cart data", error);
      return [];
    }
  });
  // const [wishlist, setWishlist] = useState(() => {
  //   const storeWishlist = localStorage.getItem("wishlist");
  //   return storeWishlist ? JSON.parse(storeWishlist) : [];
  // });
  const [wishlist, setWishlist] = useState(() => {
    try {
      const storeWishlist = localStorage.getItem("wishlist");
      return storeWishlist ? JSON.parse(storeWishlist) : [];
    } catch (error) {
      console.error("Invalid wishlist data", error);
      return [];
    }
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlace, setOrderPlace] = useState(false);

  // search
  const HandleScroll = () => {
    const section = document.getElementById("product-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // search

  // shadow
  useEffect(() => {
    const changeNav = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", changeNav);
  }, []);
  // shadow

  // show panel
  const HandlePanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };

  // close panel
  const HandleClose = () => {
    setActivePanel(null);
  };

  // quantity item
  const quantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };
  const quantityDecrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // cart item function
  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("Item Is Already In The Cart ");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // wishlist function

  const addToWishlist = (product) => {
    const isInWishlist = wishlist.some((i) => i.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter((i) => i.id !== product.id));
    } else {
      const addDate = new Date().toLocaleString("en-GB");
      setWishlist([...wishlist, { ...product, addDate }]);
    }
  };

  // delete item
  const HandleDelete = (product) => {
    setCart(cart.filter((i) => i.id !== product.id));
  };

  // total item
  const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const ShippingFee = cart.reduce((acc, item) => acc + item.quantity * 2, 0);
  const orderTotal = subtotal + ShippingFee;

  // save item in storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  return (
    <div>
      {/* navbar */}
      <Navbar
        HandleScroll={HandleScroll}
        setSearchTerm={setSearchTerm}
        isScroll={isScroll}
        HandlePanel={HandlePanel}
        totalItem={totalItem}
        wishlist={wishlist}
      />

      {/* banner */}
      <Banner />

      {/* products */}
      <Products
        searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlist={wishlist}
      />

      {/* cart */}
      <Cart
        activePanel={activePanel}
        HandleClose={HandleClose}
        cart={cart}
        HandleDelete={HandleDelete}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subtotal={subtotal}
        ShippingFee={ShippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />

      {/* wishlist */}
      <WishList
        activePanel={activePanel}
        HandleClose={HandleClose}
        wishlist={wishlist}
        setWishlist={setWishlist}
        addToCart={addToCart}
      />

      {/* order summary */}
      {orderSummary && (
        <OrderSummary
          subtotal={subtotal}
          ShippingFee={ShippingFee}
          orderTotal={orderTotal}
          cart={cart}
          setOrderSummary={setOrderSummary}
          setOrderPlace={setOrderPlace}
          setCart={setCart}
        />
      )}

      {/* order placed */}
      {orderPlace && <OrderPlace setOrderPlace={setOrderPlace} />}
    </div>
  );
};

export default Home;
