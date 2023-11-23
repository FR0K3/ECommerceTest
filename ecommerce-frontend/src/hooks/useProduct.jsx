import { useContext } from "react";
import ProductProvider from "../context/ProductProvider";

const useProduct = () => {
    return useContext(ProductProvider);
}

export default useProduct;