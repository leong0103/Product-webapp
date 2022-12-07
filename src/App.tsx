import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";
import useStateContext from "./hooks/useStateContext";

function App() {
  const { context } = useStateContext();

  const darkTheme = createTheme({
    palette: {
      mode: context.isDarkMode === true ? "dark" : "light",
    },
    typography: {
      fontFamily: "IBM Plex Sans",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
