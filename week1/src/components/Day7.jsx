import React from "react";
import { useTheme } from "../contexts/themeContext";
import Section from "./children/Section";
import Heading from "./children/Heading";
import { LevelProvider } from "../contexts/LevelContext";
export default function Day7() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`font-sans h-screen w-screen flex flex-col items-center duration-200 ${isDark === false ? 'bg-gradient-to-r from-red-600 via-red-400 to-red-200 text-black' : 'bg-zinc-800 text-white'}`}>
      <h1 className="text-4xl font-bold m-8">SWITCH THEME</h1>
      <button onClick={toggleTheme} className="h-12 w-24 bg-black border-2 rounded-lg text-white p-2 border-white">
        🌒
      </button>
      <LevelProvider value={1}>
        <Section>
          <Heading>TITLE</Heading>
          <Section>
            <Heading>A</Heading>
            <Heading>B</Heading>
            <Heading>C</Heading>
            <Section>
              <Heading>D</Heading>
              <Heading>E</Heading>
              <Heading>F</Heading>
              <Section>
                <Heading>G</Heading>
                <Heading>H</Heading>
                <Heading>I</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </LevelProvider>
    </div>
  );
}