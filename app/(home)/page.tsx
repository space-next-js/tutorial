import Link from 'next/link';

export const metadata = {
  title: 'Home',
};

// const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // 임의로 5초 대기
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>
    {movies.map(movie => <li key={movie.id}>
      <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
      </li>)}
    </div>

}
