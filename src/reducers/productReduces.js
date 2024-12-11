import { createContext, useReducer } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(ProductContext);
	return <ProductContext.Provider value={""}>{children}</ProductContext.Provider>;
};
