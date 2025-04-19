import styles from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  //   console.log(`Fetching movies: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  return data;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>Score: {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          <button>Homepage &rarr;</button>
        </a>
      </div>
    </div>
  );
}
2;
