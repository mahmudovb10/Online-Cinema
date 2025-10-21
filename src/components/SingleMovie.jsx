import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleMovie() {
  const { id } = useParams();
  const {
    data: movie,
    isPending,
    error,
  } = useFetch(`https://www.omdbapi.com/?s=batman&apikey=d1a52bc9s/${id}`);
  if (isPending)
    return <h2 className="text-center text-gray-400 mt-10">Yuklanmoqda...</h2>;
  if (error)
    return <h2 className="text-center text-red-400 mt-10">Xato: {error}</h2>;
  if (!movie)
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
