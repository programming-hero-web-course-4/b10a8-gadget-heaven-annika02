import { useLoaderData, useParams } from "react-router-dom";

const GadgetCards = () => {

    const data = useLoaderData();
    const {category} = useParams()

    console.log(data)

    return (
        <div>
            <h1>Gadget Cards  {category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
            </div>
        </div>
    );
};


export default GadgetCards;
