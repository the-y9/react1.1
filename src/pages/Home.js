// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import "../styles.css";
import Nav from "./Nav";

function App() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <h1>Home Page, Landing Page</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
