import styles from "../styles/movie-credits.module.css";
import { API_URL } from "../app/(home)/page";

async function getCredits(id: string) {
  const res = await fetch(`${API_URL}/${id}/credits`);
  const data = await res.json();
  return data;
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div key={credit.id}>
          <img src={credit.profile_path} alt={credit.name} />
          <h3>{credit.name}</h3>
          <p>{credit.character}</p>
        </div>
      ))}
    </div>
  );
}
2;
