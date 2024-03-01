import getCategories from "../api/getCategories";
import Case from "../components/Case";
import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Title from "../components/Title";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Checkout from "../components/Checkout";

const Dashboard = (): any => {
  type Categories = any[];

  const [dataCategories, setDataCategories] = useState<Categories>([]);
  const [status, setStatus] = useState<string>("not-active");

  useEffect(() => {
    const fetchingDataCategories = async () => {
      const res = await getCategories();

      return setDataCategories(res);
    };

    fetchingDataCategories();
  }, [dataCategories]);

  // useEffect(() => {
  //   const product = document.querySelector("#product");

  //   window.addEventListener("click", (e) => {
  //     return e.target == product ? 0 : setStatus("non-active");
  //   });

  //   return window.removeEventListener("click", (e) => {
  //     return e.target == product ? 0 : setStatus("non-active");
  //   });
  // }, []);

  return (
    <Case>
      <div onClick={() => setStatus("non-active")}>
        <section>
          <Hero />
        </section>

        <section id="category" className="pt-4 px-4 pb-16 lg:px-32">
          <Title Title={"Category"} Link="" />

          <div className="grid grid-cols-2 w-full mx-auto gap-2 lg:grid-cols-4 lg:gap-6">
            {dataCategories.map((data) => (
              <div key={data.length}>
                <CategoryList api={data} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section
        id="product"
        className="z-20 pt-4 pb-16 px-4 bg-slate-50 lg:px-8 lg:pt-20"
      >
        <Products setStatus={setStatus} />
      </section>

      <div className="">
        {status === "active" ? <Checkout setStatus={setStatus} /> : ""}
      </div>
    </Case>
  );
};

export default Dashboard;
