import React from "react";
import { LevelContext } from "../../contexts/LevelContext";
import { useContext } from "react";

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      console.log(level)
      return <h1>{children}</h1>;
    case 2:
      console.log(level)
      return <h2>{children}</h2>;
    case 3:
      console.log(level)
      return <h3>{children}</h3>;
    case 4:
      console.log(level)
      return <h4>{children}</h4>;
    case 5:
      console.log(level)
      return <h5>{children}</h5>;
    case 6:
      console.log(level)
      return <h6>{children}</h6>;
    default:
      console.log(level)
      return <p>{children}</p>
  }
}
