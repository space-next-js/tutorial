import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-video.module.css";

async function getVideos(id: string) {
  // console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise(resolve => setTimeout(resolve, 5000));
  // throw new Error('Failed to fetch videos');
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        ></iframe>
      ))}
    </div>
  );
}
