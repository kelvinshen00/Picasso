import "./App.css";
import HomePage from "./Pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import ExhibitionPage from "./Pages/ExhibitionPage";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { useLocalStorageForDarkMode } from "./Hooks/useLocalStorageForDarkMode";

// Setting up the light theme
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#000000", //black
      link: "#ffffff", //white
      secondary:"#ffffff",
      secondaryDark:"#333333",
      switchColor:"#333333",
    },
    space: {},
    fonts: {},
  },
});

// Setting up the dark theme
const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#ffffff",
      link: "#ffffff",
      secondary:"#000000",
      secondaryDark:"#333333",
    },
  },
});


function App() {
  // When isDark changes, the theme for the website changes
  const [isDark] = useLocalStorageForDarkMode();

  return (
    // NextUIProvider wraps around the entire app, so a 
    // change to the theme state rerenders the entire application
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="exhibition">
          <Route index element={<Navigate to="0" replace />} />
          <Route path=":id" element={<ExhibitionPage />} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

export default App;
