import Title from "./ui/Title";
import Producs from "api/products";
import { useState, useEffect } from "react";
import Product from "./ui/Product";

export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Producs);
  }, []);

  return (
    <div>
      <div className="container pt-6 mx-auto bg-white md:bg-transparent">
        <Title>Favoriler</Title>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9">
          {products.length &&
            products.map((product, index) => {
              return (
                <Product
                  key={index}
                  title={product.title}
                  image={product.image}
                  alt={product.alt}
                  price={product.price}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
