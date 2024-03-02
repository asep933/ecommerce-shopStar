import Quantity from "./Quantity";

const Basket = ({ data }: { data: any }) => {
  return (
    <>
      <div className="h-screen fixed py-8 drop-shadow-md px-4 lg:px-8 w-1/2 overflow-auto lg:w-1/4 md:w-1/3 bg-slate-100 top-14 z-30 right-0">
        <div className="w-full h-auto flex gap-3 lg:gap-4">
          <input type="checkbox" className="scale-110" />
          <img src={`${data.image}`} className="w-1/4" />
          <div>
            <p>{data.title}</p>
            <p>$ {data.price}</p>
          </div>
        </div>

        <div className="scale-95 mx-5">
          <Quantity />
        </div>

        <button className="w-full bg-secondary mt-3 transition-all duration-300 ease-out hover:bg-opacity-75 rounded-md">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Basket;