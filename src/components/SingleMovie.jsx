import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleMovie() {
  const { imdbID } = useParams();
  const {
    data: movie,
    isPending,
    error,
  } = useFetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=d1a52bc9`);

  if (isPending)
    return <h2 className="text-center text-gray-400 mt-10">Yuklanmoqda...</h2>;

  if (error)
    return (
      <h2 className="text-center text-red-400 mt-10">Xato: {error.message}</h2>
    );

  if (!movie || movie.Response === "False")
    return <h2 className="text-center mt-10">Film topilmadi 😕</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/fallback-poster.png"}
        alt={movie.Title}
        className="w-64 mx-auto rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-4 text-center">{movie.Title}</h1>
      <h2 className="text-center text-gray-500">
        {movie.Year} • {movie.Runtime} • {movie.Genre}
      </h2>

      <p className="mt-4 text-justify">{movie.Plot}</p>

      <div className="mt-4 flex justify-center gap-6">
        <span className="text-yellow-400 font-semibold">
          IMDb: {movie.imdbRating}
        </span>
        <span className="text-gray-600">Votes: {movie.imdbVotes}</span>
      </div>
    </div>
  );
}

export default SingleMovie;
