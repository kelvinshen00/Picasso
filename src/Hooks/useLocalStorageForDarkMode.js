import { useEffect, useState } from "react";
import { getDocumentTheme } from "@nextui-org/react";

/**
 * A custom hook wrapping a call to useState() to provide a stateful value, along with a call to useEffect() which saves that value
 * to local storage.
 */
export function useLocalStorageForDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let theme = window.localStorage.getItem("data-theme");
    setIsDark(theme === "dark");

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === "dark");
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });

    return () => observer.disconnect();
  }, [isDark]);

  return [isDark, setIsDark];
}
