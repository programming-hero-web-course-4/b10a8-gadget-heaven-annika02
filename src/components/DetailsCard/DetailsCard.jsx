import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const DetailsCard = () => {
  const {
    handelAddToCart,
    cart,
    handelAddToWishlist,
    handelRemoveFromWishlist,
  } = useOutletContext();
  const { productId } = useParams();
  const [gadgetDetails, setGadgetDetails] = useState(null);

  useEffect(() => {
    fetch("/gadget.json")
      .then((res) => res.json())
      .then((gadgets) => {
        const selectedGadget = gadgets.find(
          (gadget) => gadget.product_id === parseInt(productId)
        );
        setGadgetDetails(selectedGadget);
      })
      .catch((err) => console.error(err));
  }, [productId]);

  if (!gadgetDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Banner Background */}
      <div className="w-full bg-purple-600 text-white p-10 rounded-b-lg pb-24">
        <div className="w-4/5 mx-auto text-center">
          <div className="">
            <h2 className="text-3xl md:text-5xl font-bold">Product Details</h2>
            <p className="w-5/6 mx-auto mt-4 text-gray-200">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>

      {/* card */}
      <div className="w-9/12 mx-auto relative -mt-20 border-2 border-gray-200 p-2 rounded-3xl shadow-lg">
        <div className="hero bg-white">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={gadgetDetails.product_image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                {gadgetDetails.product_title}
              </h1>
              <p className="mt-1">Price :$ {gadgetDetails.price}</p>
              <p className="mt-1">{gadgetDetails.availability}</p>
              <p className="mt-1">{gadgetDetails.description}</p>
              <p className="mt-1 ">
                <span className="font-bold">Specification :</span>
                {gadgetDetails.Specification}
              </p>
              <p className="mt-1">
                <span className="font-bold">Rating</span>
                {gadgetDetails.rating}
              </p>

              <div className="space-x-2">
                <button
                  className="mt-2 btn"
                  onClick={() => handelAddToCart(gadgetDetails)}
                >
                  Add to Cart 🛒
                </button>
                <button
                  className="mt-2 btn"
                  onClick={() => handelAddToWishlist(gadgetDetails)}
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
