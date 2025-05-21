import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./components/class-component";
import FuntionalComponent from "./components/funtional-component";
import ProductList from "./components/products";
import UsersComponent from "./components/users";
import ContextButtonComponet from "./components/context-concept/button";
import ContextTextComponet from "./components/context-concept/text";
import UseReducerConcept from "./components/use-reducer-concept";

const dummyProductsList = ["Product1", "Product2", "Product3"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello React APP</h1>
      {/* <ClassComponent /> */}
      {/* <FuntionalComponent /> */}

      {/* <ProductList productLists={dummyProductsList} /> */}

      {/* <UsersComponent /> */}
      {/* <ContextButtonComponet />
      <ContextTextComponet /> */}
      <UseReducerConcept />
    </>
  );
}

export default App;
