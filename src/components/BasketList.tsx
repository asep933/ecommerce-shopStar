import Quantity from "./Quantity";

const BasketList = ({ data }: { data: any }) => {
  return (
    <div className="">
      <div className="w-full max-h-20 text-sm flex gap-3 lg:gap-4 mt-3">
        <input type="checkbox" className="scale-110" />

        <img src={`${data.image}`} className="w-12 object-cover" />

        <div>
          <p>{data.title}</p>
          <p>$ {data.price}</p>
        </div>
      </div>

      <div className="scale-95 mx-5 mt-2">
        <Quantity />
      </div>
    </div>
  );
};

export default BasketList;
