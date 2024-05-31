import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};
