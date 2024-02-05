//client side component
"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();


//jb hum page reload krenge to phirse ligh mode pe chla jaega issliye hum log local storage use kr rhe
const getFromLocalStorage = () => {

    //type of window we using becaause next js use server side rendering and at server there is no browser to use getlocalstorage thats why we did this
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");

    //this below line indicate that when we go to owebsite first time local storage will be emppty so we have set deafult light
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
