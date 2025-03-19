import Nav from "./Nav";
import { ThemeProvider } from "./ThemeContext";

function Poster() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <div className="App">
          <h1 className="mt-4">Poster Heading</h1>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Poster;
