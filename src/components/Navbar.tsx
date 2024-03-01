import NavLink from "./NavLink";
import Case from "./Case";
import { Link } from "react-router-dom";

const Navbar = (): any => {
  return (
    <Case>
      <header>
        <nav className="bg-secondary flex justify-around py-4 text-sm lg:justify-around lg:text-lg">
          <Link to={"/"}>
            <span className="text-lg font-bold lg:text-3xl">shopStar</span>
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
          </section>
        </nav>
      </header>
    </Case>
  );
};

export default Navbar;
