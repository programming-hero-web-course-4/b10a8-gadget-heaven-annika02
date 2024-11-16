import { useEffect, useState } from "react";
import {
  getStoredWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../../utils";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const storedWishlist = await getStoredWishlist();
      setWishlist(storedWishlist || []);
    };

    fetchWishlist();
  }, []);

  const handleRemove = (productId) => {
    const updatedWishlist = wishlist.filter(
      (gadget) => gadget.product_id !== productId
    );
    setWishlist(updatedWishlist);
    removeFromWishlist(productId);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. Start adding some gadgets!</p>
      ) : (
        <ul className="list-none space-y-4">
          {wishlist.map((gadget) => (
            <li
              key={gadget.product_id}
              className="p-4 border rounded-lg shadow-md flex items-center justify-between"
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="h-14"
                    src={gadget.product_image}
                    alt={gadget.product_title}
                  />
                </div>
                <div className="ml-4">
                  <p className="font-bold">{gadget.product_title}</p>
                  <p className="text-sm text-gray-600">
                    Price: ${gadget.price}
                  </p>
                  <button className="btn bg-purple-500 rounded-3xl">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="">
                <button
                  className="btn rounded-full border-red-600"
                  onClick={() => handleRemove(gadget.product_id)}
                >
                  <img
                    className="h-4"
                    src="https://img.icons8.com/?size=100&id=11997&format=png&color=000000"
                    alt=""
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
