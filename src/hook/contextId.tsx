import { createContext, useContext } from "react";

const Context = createContext<number>(2);

const useContextId = () => useContext(Context);

export { Context, useContextId };
