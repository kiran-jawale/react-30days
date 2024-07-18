
//state, array state, event listening, mapping lists

import React, { useState } from "react";

const Day1 = () => {
  const [state, setState] = useState([
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WENESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ]);

  const removeDay = (day) => {
    setState((prev) => state.filter( (item) => item !== day ))
  }

  return (
    <div className="bg-zinc-800 h-screen w-screen text-white font-semibold font-sans">
      {state.map((day, index) => (
        <li key={index}>{day} <button onClick={() => removeDay(day)}>Delete</button> </li>
      ))}
    </div>
  );
};

export default Day1;

