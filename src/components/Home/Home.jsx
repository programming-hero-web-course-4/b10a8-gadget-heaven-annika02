import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../categories/Categories"; 
import GadgetCards from "../GadgetCards/GadgetCards";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Banner />
           <div className="flex">
           <div className="w-1/6">
            <Categories categories={categories} /> 
            </div>

            <div className="w-5/6">
            <GadgetCards></GadgetCards>
            </div>
           </div>
           
        </div>
    );
};

export default Home;
