import NavLink from "./NavLink";
import Case from "./Case";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import Basket from "./Basket";
import { useEffect, useState } from "react";
import getProductById from "../api/getProductById";

const Navbar = (): any => {
  const [basket, setBasket] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const res = await getProductById(4);
      return setData(res);
    };

    getData();
  }, []);

  return (
    <Case>
      <header>
        <nav className="bg-secondary fixed z-50 w-full flex justify-around py-4 text-sm lg:justify-around lg:text-base">
          <Link to={"/"}>
            <span className="text-lg font-bold lg:text-xl">shopStar</span>
          </Link>

          <section className="space-x-3 flex items-center">
            <NavLink href="/">
              <span className="hover:text-white transition duration-300 ease-in-out">
                Dashboard
              </span>
            </NavLink>
            <NavLink href="/about">
              <span className="hover:text-white transition duration-300 ease-in-out">
                About
              </span>
            </NavLink>
            <NavLink href="/contact">
              <span className="hover:text-white transition duration-300 ease-in-out">
                Contact
              </span>
            </NavLink>
            <button onClick={() => setBasket(!basket)}>
              <ShoppingCart size={20} />
            </button>
          </section>
        </nav>

        {basket && (
          <>
            <Basket data={data} />
          </>
        )}
      </header>
    </Case>
  );
};

export default Navbar;
