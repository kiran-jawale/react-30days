import React from "react";
import Day7 from "./components/Day7";
import { ThemeProvider } from "./contexts/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Day7 />
    </ThemeProvider>
  );
};

export default App;
