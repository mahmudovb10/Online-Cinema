import { useFetch } from "../hooks/useFetch";

function SingleMovie() {
  const {
    data: movie,
    isPending,
    error,
  } = useFetch(`https://www.omdbapi.com/?s=batman&apikey=d1a52bc9/:${id}`);
  return (
    <div>
      <h1>Single Movie</h1>
    </div>
  );
}

export default SingleMovie;
