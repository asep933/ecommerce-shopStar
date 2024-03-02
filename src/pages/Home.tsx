import getCategories from "../api/getCategories";
import Case from "../components/Case";
import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Title from "../components/Title";
import Hero from "../components/Hero";
import Products from "../components/Products";
// import Checkout from "../components/Checkout";
// import { useContextId } from "../hook/contextId";

const Dashboard = (): any => {
  type Categories = any[];

  const [dataCategories, setDataCategories] = useState<Categories>([]);
  const [status, setStatus] = useState<string>("not-active");
  // const id = useContextId();

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
      <div>
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

      <section id="product" className="z-20 pt-4 pb-16  bg-slate-50 lg:pt-20">
        <Products status={status} setStatus={setStatus} />
      </section>

      {/* {status === "active" ? <Checkout id={2} setStatus={setStatus} /> : ""} */}
    </Case>
  );
};

export default Dashboard;
