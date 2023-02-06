import "./App.css";
import ThemeProvider from "./lib/theme";
import { ToastContainer } from "react-toastify";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <MainRoute />
    </ThemeProvider>
  );
}

export default App;
