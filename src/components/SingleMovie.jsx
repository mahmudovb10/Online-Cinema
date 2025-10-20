import { useFetch } from "../hooks/useFetch";

function SingleMovie() {
  const {
    data: movie,
    isPending,
    error,
  } = useFetch(
    imdbID ? `https://www.omdbapi.com/?i=${imdbID}&apikey=d1a52bc9` : null
  );

  return (
    <div>
      <h1>Single Movie</h1>
    </div>
  );
}

export default SingleMovie;
