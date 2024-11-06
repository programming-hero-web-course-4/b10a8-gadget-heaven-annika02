import { useRouteLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../categories/Categories";
import GadgetCards from "../GadgetCards/GadgetCards";

const Home = () => {
  const categories = useRouteLoaderData("Home");
  // console.log(categories);
  return (
    <div>
      <Banner />
      <h1 className="text-2xl text-center m-3">Explore Cutting-Edge Gadgets</h1>
      <div className="flex">
        <div className="w-1/6">
          <Categories categories={categories} />
        </div>

        <div className="w-5/6 p-2">
          <GadgetCards></GadgetCards>
        </div>
      </div>
    </div>
  );
};

export default Home;
