import { useEffect, useState } from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";

const GadgetCards = () => {
  const allGadgets = useRouteLoaderData("allGadgets");
  const categoryGadgets = useRouteLoaderData("categoryGadgets");
  const { category } = useParams();
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const gadgets = category ? categoryGadgets : allGadgets;
    if (category) {
      const filtered = gadgets.filter(
        (gadget) => gadget.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredGadgets(filtered);
    } else {
      setFilteredGadgets(gadgets);
    }
  }, [category, allGadgets, categoryGadgets]);

  return (
    <div>
      <h1>Gadget Cards {category ? `- ${category}` : " - All Gadgets"}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGadgets.length > 0 ? (
          filteredGadgets.map((gadget) => (
            <div
              key={gadget.product_id}
              className="border p-4 rounded shadow-lg"
            >
              <img
                src={gadget.product_image}
                alt={gadget.product_title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{gadget.product_title}</h2>
              <p className="text-sm text-gray-600">${gadget.price}</p>
              <button
                className="btn mt-1"
                onClick={() => navigate(`/details/${gadget.product_id}`)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>No gadgets found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default GadgetCards;
