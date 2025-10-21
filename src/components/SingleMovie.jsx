import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleMovie() {
  const { imdbID } = useParams();
  const {
    data: movie,
    isPending,
    error,
  } = useFetch(
    imdbID ? `https://www.omdbapi.com/?i=${imdbID}&apikey=d1a52bc9` : null
  );
  if (!movie || movie.Response === "False")
    return (
      <h2 className="text-center text-gray-400 mt-10">Film topilmadi 😕</h2>
    );

  return (
    <div>
      <h1>Single Movie</h1>
      <div>
        <img src={movie.Poster} alt="" />
        <h1 className="movieTitle">{movie.Title}</h1>
        <h1>{movie.Year}</h1>
      </div>
    </div>
  );
}

export default SingleMovie;
