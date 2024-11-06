import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="w-full">
      <NavLink to={`/`} className="w-full btn mt-2">
        All Gadgets
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.category_id}
          to={`/${category.category_name}`}
          className="w-full btn mt-2"
        >
          {category.category_name}
        </NavLink>
      ))}
    </div>
  );
};
export default Categories;
