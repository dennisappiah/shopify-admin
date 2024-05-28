import { useState, useMemo } from "react";
import createAppTheme from "../theme";

export default function useMuiMode() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return { theme, colorMode };
}
