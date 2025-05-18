import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./components/class-component";
import FuntionalComponent from "./components/funtional-component";
import ProductList from "./components/products";
import UsersComponent from "./components/users";

const dummyProductsList = ["Product1", "Product2", "Product3"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello React APP</h1>
      {/* <ClassComponent /> */}
      {/* <FuntionalComponent /> */}

      {/* <ProductList productLists={dummyProductsList} /> */}

      <UsersComponent />
    </>
  );
}

export default App;
