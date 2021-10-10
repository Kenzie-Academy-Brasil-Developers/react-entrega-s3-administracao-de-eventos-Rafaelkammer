import "./style.css";

import Product from "../../components/Product";
import { useProductList } from "../../Providers/ProductList";

const Home = () => {
  const { productList } = useProductList();

  return (
    <div className="container">
      {productList.map((produto) => {
        return <Product key={produto.id} produto={produto} />;
      })}
    </div>
  );
};
export default Home;
