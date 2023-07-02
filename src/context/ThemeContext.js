"use client";

import { createContext, useState } from "react";

export const Themecontext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Themecontext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </Themecontext.Provider>
  );
};
