import React,{ createContext, useContext } from "react";

export const LevelContext = createContext(1);

export const LevelProvider = LevelContext.Provider;

export const useLevel = function() {
    return useContext(LevelContext);
}