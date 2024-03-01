const ProductList = ({ api }: { api: any }) => {
  return (
    <div
      className="w-full h-auto bg-primary rounded-2xl flex items-center 
    justify-center shadow-md overflow-hidden drop-shadow-lg"
    >
      <div className="flex flex-col h-80">
        <div className="overflow-hidden max-h-72">
          <img
            src={`${api.image}`}
            alt="image product"
            className="object-cover hover:scale-110 w-64 transition-all duration-300 ease-out"
          />
        </div>

        <div className="px-4 space-y-3 pb-3">
          <h3 className="font-semibold">{api.title}</h3>
          <p>${api.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
