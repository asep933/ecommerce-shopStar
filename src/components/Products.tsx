import getAllProducts from "../api/getAllProducts";
import { Context } from "../hook/contextId";
import Checkout from "./Checkout";
import ProductList from "./ProductList";
import Title from "./Title";
import { useState, useEffect } from "react";

const Products = ({ setStatus }: { setStatus: any }) => {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [idState, setIdState] = useState<any>(null);

  useEffect(() => {
    const result = async () => {
      const res = await getAllProducts();

      return setAllProducts(res);
    };

    result();
  }, []);

  // useEffect(() => {
  //   console.log(idState);

  //   const timeoutId = setTimeout(() => {
  //     console.log(idState);
  //   }, 2000);

  //   return clearTimeout(timeoutId);
  // }, [idState]);

  const handleButton = (id: number) => {
    setStatus("active");
    setIdState(id);
  };

  return (
    <>
      <Context.Provider value={idState}>
        <Title Title="Products" Link="View" />

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-5">
          {allProducts
            .map((data) => (
              <button key={data.id} onClick={() => handleButton(data.id)}>
                <ProductList api={data} />
              </button>
            ))
            .slice(0, 5)}
        </div>

        <section className="hidden">
          <Checkout setStatus={""} />
        </section>
      </Context.Provider>
    </>
  );
};

export default Products;
