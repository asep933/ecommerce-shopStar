import { Link } from "react-router-dom";

const CategoryList = ({ api }: { api: any }) => {
  return (
    <Link
      to={"/#"}
      className="w-auto h-32 bg-primary p-4 rounded-2xl flex items-center 
    justify-center shadow-md"
    >
      {api}
    </Link>
  );
};

export default CategoryList;
