import React from "react";
import { LevelProvider, useLevel } from "../../contexts/LevelContext";

export default function Section({ children }) {
  const level = useLevel();
  return (
    <LevelProvider value={level + 1}>
      <div className="section">
        {children}
      </div>
    </LevelProvider>
  );
}