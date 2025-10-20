import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("https://www.omdbapi.com/?s=batman&apikey=d1a52bc9");

  if (isPending)
    return <h2 className="text-center text-gray-400 mt-10">Loading...</h2>;
  if (error)
    return <h2 className="text-center text-red-500 mt-10">{error.message}</h2>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
        🎬 Online Cinema
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies?.Search?.length > 0 ? (
          movies.Search.map((movie) => (
            <Link key={movie.imdbID} to={`/singlemovie${movies.imdbID}`}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-72 object-cover rounded-xl mb-3"
                />
                <h2 className="text-lg font-semibold text-cyan-300">
                  {movie.Title}
                </h2>
                <p className="text-gray-400">{movie.Year}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            Hech qanday film topilmadi 😕
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
