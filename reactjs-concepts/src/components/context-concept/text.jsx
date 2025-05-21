import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextTextComponet() {
  const { theme } = useContext(GlobalContext);

  return (
    <h1 style={{ color: theme === "light" ? "skyblue" : "black" }}>
      Color Change Text
    </h1>
  );
}

export default ContextTextComponet;
