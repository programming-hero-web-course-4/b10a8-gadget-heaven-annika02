import { Helmet } from "react-helmet-async";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { handelAddToCart, cart } = useOutletContext(); // Correctly accessing context
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Dashboard</title>
      </Helmet>
      {/* Banner Background */}
      <div className="w-full bg-purple-600 text-white p-10 rounded-b-lg pb-24">
        <div className="w-4/5 mx-auto text-center">
          <div className="">
            <h2 className="text-3xl md:text-5xl font-bold">Dashboard</h2>
            <p className="w-5/6 mx-auto mt-4 text-gray-200">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="space-x-2">
              <NavLink to="/dashboard">
                <button className="mt-2 btn">Add to Cart 🛒</button>
              </NavLink>
              <NavLink to="/dashboard/wishlist">
                <button className="mt-2 btn">Wishlist</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* cart and wishlist */}
      <div></div>
      {/* Render child routes */}
      <div className="p-6">
        <Outlet context={{ handelAddToCart, cart }} />
      </div>
    </div>
  );
};

export default Dashboard;
