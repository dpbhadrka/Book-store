import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from "@mui/material/styles";

function App() {
  return (
    <>
      <CssVarsProvider>
        <AllRoutes />
      </CssVarsProvider>
    </>
  );
}

export default App;
