import getCategories from "../api/getCategories";
import Case from "../components/Case";
import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Title from "../components/Title";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Dashboard = (): any => {
  type Categories = any[];

  const [dataCategories, setDataCategories] = useState<Categories>([]);

  useEffect(() => {
    const fetchingDataCategories = async () => {
      const res = await getCategories();

      return setDataCategories(res);
    };

    fetchingDataCategories();
  }, [dataCategories]);

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

      <section className="pt-4 pb-16 px-4 bg-slate-50 lg:px-8 lg:pt-20">
        <Products />
      </section>
    </Case>
  );
};

export default Dashboard;
