import { useState, useEffect } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

function ProductList({ productLists }) {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    return setAuthenticated(!authenticated);
  };

  const logout = () => {
    return setAuthenticated(!authenticated);
  };

  useEffect(() => {
    console.log("run only once on page load");

    return () => {
      console.log("component is unmounted -> some side effects here also");
    };
  }, [authenticated]);
  return (
    <div className="products-section">
      <h3 className="title">Ecommerce Project</h3>
      {authenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      {authenticated ? <h2>Hello Dharma Teja</h2> : <h2>Hello User</h2>}
      <div className="list">
        {productLists.map((item, index) => (
          <ProductItem key={index} singleProductItem={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
