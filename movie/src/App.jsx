import Movie from "./components/Movie";
import MovieRouter from "./components/MovieRouter";
import Navbar from "./components/Navbar";
import MovieYear from "./components/MovieYear";
import Year2 from "./components/Year2";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie/:movieId" element={<MovieRouter />} />
        <Route path="/year" element={<MovieYear />} />
        <Route path="/year2" element={<Year2 />} />
      </Routes>
    </>
  );
}

export default App;
