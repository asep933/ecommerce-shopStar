import { Link } from "react-router-dom";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): any => {
  return <Link to={href}>{children}</Link>;
};

export default NavLink;
