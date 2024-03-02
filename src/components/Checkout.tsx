import { useEffect, useState } from "react";
import getProductById from "../api/getProductById";
import Quantity from "./Quantity";
import { X } from "@phosphor-icons/react";
import { useContextId } from "../hook/contextId";

const Checkout = ({ setStatus }: { setStatus: any }) => {
  const [dataById, setDataById] = useState<any>({});
  const id = useContextId();

  useEffect(() => {
    const fetchById = async () => {
      const res = await getProductById(id);
      setDataById(res);
    };
    fetchById();
  }, [id]);

  return (
    <div className="z-10 bg-transparent fixed w-full h-screen bottom-0">
      <div
        className="bottom-0 px-4 py-12 absolute drop-shadow-lg rounded-3xl bg-slate-200 w-full 
      lg:mx-auto lg:w-1/2 h-1/2 lg:translate-x-1/2"
      >
        <h1 className="text-lg font-bold mx-4">Order</h1>
        <div className="absolute right-8 top-6 p-0">
          <button onClick={() => setStatus("non-active")}>
            <X size={32} />
          </button>
        </div>

        <div className=" w-full p-3 h-auto flex gap-6">
          <div className="overflow-hidden">
            <img
              src={dataById.image}
              alt="image by id"
              className="object-cover w-24 rounded-lg"
            />
          </div>
          <div>
            <p>{dataById.title}</p>

            <div className="mt-4">
              <Quantity />
            </div>
          </div>
        </div>

        <div className="px-16 mt-3">
          <button
            className="rounded-md text-lg mt-4 w-full text-center
          hover:bg-opacity-85 bg-secondary outline-secondary
          transition-all duration-300 ease-out"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
