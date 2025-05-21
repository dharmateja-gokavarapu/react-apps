import { createContext, useState } from "react";

export const GlobalContext = createContext({});

function GlobalState({ children }) {
  const themeName = "dark";

  const [theme, setTheme] = useState(themeName);

  const [text, setText] = useState("Light Theme");

  function changeTheme() {
    return (
      setTheme(theme === "light" ? "dark" : "light"),
      setText(theme === "light" ? "Light Theme" : "Dark Theme")
    );
  }

  return (
    <GlobalContext.Provider value={{ theme, changeTheme, text }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
