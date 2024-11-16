import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
  addToWishlist,
  getStoredWishlist,
  removeFromWishlist,
} from "../../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = await getStoredCart();
      setCart(storedCart || []);
    };

    const fetchWishlist = async () => {
      const storedWishlist = await getStoredWishlist();
      setWishlist(storedWishlist || []);
    };

    fetchCart();
    fetchWishlist();
  }, []);

  const handelAddToCart = (gadget) => {
    const newCart = [...cart, gadget];
    setCart(newCart);
    addToLS(gadget.product_id);
    toast.success(`${gadget.product_title} has been added to your cart!`);
  };

  const handelAddToWishlist = (gadget) => {
    const newWishlist = [...wishlist, gadget];
    setWishlist(newWishlist);
    addToWishlist(gadget.product_id);
    toast.success(`${gadget.product_title} has been added to your wishlist!`);
  };

  const handelRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.product_id !== productId
    );
    setWishlist(updatedWishlist);
    removeFromWishlist(productId);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet
          context={{
            handelAddToCart,
            handelAddToWishlist,
            handelRemoveFromWishlist,
            cart,
            wishlist,
            setCart,
            setWishlist,
          }}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
