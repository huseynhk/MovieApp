import Movie from "./components/Movie";
import MovieRouter from "./components/MovieRouter";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie/:movieId" element={<MovieRouter />} />
      </Routes>
    </>
  );
}

export default App;
