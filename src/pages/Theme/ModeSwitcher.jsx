import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from "@mui/material/styles";
import React from "react";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../../components/Navbar/ResponsiveAppBar";

// ModeSwitcher is an example interface for toggling between modes.
// Material UI does not provide the toggle interface—you have to build it yourself.
const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    // <Button
    //   variant="outlined"
    //   onClick={() => {
    //     if (mode === "light") {
    //       setMode("dark");
    //     } else {
    //       setMode("light");
    //     }
    //   }}
    // >
    //   {mode === "light" ? "Dark" : "Light"}
    // </Button>
    <>
      <ResponsiveAppBar />
      <Button
        variant="outlined"
        onClick={() => {
          setMode("dark");
        }}
      >
        Dark
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setMode("light");
        }}
      >
        Light
      </Button>
    </>
  );
};

export default ModeSwitcher;
