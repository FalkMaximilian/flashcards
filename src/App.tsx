import { CardView } from "./components/CardView";
import { Login } from "./components/Login";
import Nav from "./components/Nav";
import { ThemeProvider } from "./components/theme-provider";
import "katex/dist/katex.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Nav></Nav>
      <Routes>
        <Route path="/card" element={<CardView />} />

        <Route path="/test" element={<CardView />}/>
        <Route path="/" element={<Login />}/>

      </Routes>

    </ThemeProvider>
  );
}

export default App;
