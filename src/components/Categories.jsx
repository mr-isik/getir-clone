import { useState, useEffect } from "react";
import categoryData from "api/categories";

import Category from "./ui/Category";
import Title from "./ui/Title";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="py-6 bg-purple-50 md:bg-white">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>

        {/* Categories */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {categories &&
            categories.map((category, index) => {
              return <Category key={index} category={category} />;
            })}
        </div>
      </div>
    </div>
  );
}
