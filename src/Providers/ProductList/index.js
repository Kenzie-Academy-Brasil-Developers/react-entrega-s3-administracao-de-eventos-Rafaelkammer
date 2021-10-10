import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductListContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setProductList(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ProductListContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductListContext.Provider>
  );
};

export const useProductList = () => useContext(ProductListContext);
