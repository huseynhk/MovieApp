import Movie from "./components/Movie";
import MovieRouter from "./components/MovieRouter";
import Navbar from "./components/Navbar";
import MovieYear from "./components/MovieYearParts/MovieYear";
import Year2 from "./components/Year2";
import WishList from "./components/WishList";
import NotFound from "./components/NotFound";
import Years from "./components/MovieYearParts/Parts/Years";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTER } from "./constant/Router";


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTER.Movie} element={<Movie />} />
        <Route
          path={ROUTER.MovieRouter + "/:movieId"}
          element={<MovieRouter />}
        />
        <Route path={ROUTER.MovieYear} element={<MovieYear />} />
        <Route path={ROUTER.Year2} element={<Year2 />} />
        <Route path={ROUTER.WishList} element={<WishList />} />
        <Route path={ROUTER.Years + "/*"} element={<Years />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
