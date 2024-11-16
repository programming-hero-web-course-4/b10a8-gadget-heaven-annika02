import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getStoredCart, removeFromLS } from "../../utils";
import logo from "../../assets/Group.png";

const AddToCart = () => {
  const { setCart } = useOutletContext();
  const [storedCart, setStoredCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [finalCost, setFinalCost] = useState(0);

  useEffect(() => {
    const loadCartDetails = async () => {
      const savedCart = await getStoredCart();
      setStoredCart(savedCart);
    };

    loadCartDetails();
  }, []);

  // Remove an item from cart
  const handelRemoveFromCart = (id) => {
    const updatedCart = storedCart.filter((item) => item.product_id !== id);
    setStoredCart(updatedCart);
    removeFromLS(id);
    setCart(updatedCart);
  };

  // Sort items by price
  const handleSortByPrice = () => {
    const sortedCart = [...storedCart].sort((a, b) => a.price - b.price);
    setStoredCart(sortedCart);
  };

  // Handle purchase
  const handlePurchase = () => {
    setFinalCost(storedCart.reduce((sum, item) => sum + item.price, 0));
    setShowModal(true);
    setStoredCart([]);
    setCart([]);
  };

  // Calculate total cost
  const totalCost = storedCart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Cart</h2>

        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-bold">
            Total Cost: <span>${totalCost.toFixed(2)}</span>
          </h3>
          <button className="btn rounded-3xl" onClick={handleSortByPrice}>
            Sort by Price{" "}
            <img
              className="h-3"
              src="https://img.icons8.com/?size=100&id=izBicqrRIBpp&format=png&color=000000"
              alt=""
            />
          </button>
          <button className="btn rounded-3xl" onClick={handlePurchase}>
            Purchase
          </button>
        </div>
      </div>
      {storedCart.length > 0 ? (
        <div>
          <ul className="mt-4 space-y-2">
            {storedCart.map((item) => (
              <li
                key={item.product_id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <div className="flex items-center">
                  <div>
                    <img
                      className="h-14"
                      src={item.product_image}
                      alt={item.product_title}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{item.product_title}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <button
                  className="btn rounded-full border-red-600"
                  onClick={() => handelRemoveFromCart(item.product_id)}
                >
                  <img
                    className="h-4"
                    src="https://img.icons8.com/?size=100&id=11997&format=png&color=000000"
                    alt=""
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <div className="flex justify-center">
              <img src={logo} alt="" />
            </div>
            <h2 className="text-2xl font-bold text-green-600">
              Payment Successful
            </h2>
            <div className="divider"></div>
            <p className="mt-2">Thanks for purchasing.</p>
            <p className="mt-2 font-bold">Total: ${finalCost.toFixed(2)}</p>
            <button
              className="mt-4 btn btn-primary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
