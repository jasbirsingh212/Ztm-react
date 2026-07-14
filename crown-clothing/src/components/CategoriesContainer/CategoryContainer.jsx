import CategoryItem from "../CategoryItem/CategoryItem.jsx";
import "./CategoryContainer.styles.scss";
import { categories } from "../../utilize/Constant.js";

const CategoryContainer = () => {

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryContainer;
