import { useState } from "react";

const Quantity = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="text-lg flex gap-4">
      <p>Quantity: </p>
      <button
        onClick={() =>
          setCount((n) => {
            if (n <= 0) n = 1;
            return n - 1;
          })
        }
      >
        -
      </button>
      {count}
      <button onClick={() => setCount((n) => n + 1)}>+</button>
    </div>
  );
};

export default Quantity;
