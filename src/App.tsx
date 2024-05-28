import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./route.tsx";
import useMuiMode from "./hooks/useMuiMode.ts";
import { ColorModeContext } from "./context/ColorModeContext.tsx";

const App = () => {
  const { theme, colorMode } = useMuiMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ height: "100%", width: "100%" }}>
          {/* router provider */}
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
