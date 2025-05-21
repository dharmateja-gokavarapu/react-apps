import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponet() {
  const { changeTheme, text } = useContext(GlobalContext);
  return <button onClick={changeTheme}>{text}</button>;
}

export default ContextButtonComponet;
