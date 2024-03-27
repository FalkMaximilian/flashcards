import { CardView } from "./components/CardView";
import { Login } from "./components/Login";
import { Main } from "./components/Main";
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
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Main />}/>

      </Routes>

    </ThemeProvider>
  );
}

export default App;
