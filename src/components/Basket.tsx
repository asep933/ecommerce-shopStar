import BasketList from "./BasketList";

const Basket = ({ data }: { data: any }) => {
  return (
    <>
      <div
        className="h-screen fixed py-4 drop-shadow-md px-3 lg:px-8 w-1/2
      overflow-auto lg:w-1/4 md:w-1/3 bg-slate-100 top-14 z-30 right-0"
      >
        {data
          .map((datas: any) => (
            <ul key={data.id}>
              <BasketList data={datas} />
            </ul>
          ))
          .slice(0, 4)}

        <button className="w-full bg-secondary my-5 transition-all duration-300 ease-out hover:bg-opacity-75 rounded-md">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Basket;
