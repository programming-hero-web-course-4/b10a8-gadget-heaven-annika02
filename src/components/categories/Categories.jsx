import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div className="w-full">
            {categories.map(category => (
                <NavLink
                    key={category.category_id}
                    to={`/category/${category.category_name}`} 
                    className="w-full btn mt-2"
                >
                    {category.category_name}
                </NavLink>
            ))}
        </div>
    );
};
export default Categories;
