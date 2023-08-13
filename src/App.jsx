import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import ContextProvider from "./context/ContextProvider";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from "@mui/material/styles";

function App() {
  return (
    <>
      <CssVarsProvider>
        <ContextProvider>
          <AllRoutes />
        </ContextProvider>
      </CssVarsProvider>
    </>
  );
}

export default App;
