import getAllProducts from "../api/getAllProducts";
import ProductList from "./ProductList";
import Title from "./Title";
import { useState, useEffect } from "react";

const Products = () => {
  const [allProducts, setAllProducts] = useState<any[]>([]);

  useEffect(() => {
    const result = async () => {
      const res = await getAllProducts();

      return setAllProducts(res);
    };

    result();
  }, [allProducts]);

  return (
    <>
      <Title Title="Produccts" Link="View" />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-5">
        {allProducts
          .map((data) => (
            <ul key={data.id}>
              <li>
                <ProductList api={data} />
              </li>
            </ul>
          ))
          .slice(0, 5)}
      </div>
    </>
  );
};

export default Products;
