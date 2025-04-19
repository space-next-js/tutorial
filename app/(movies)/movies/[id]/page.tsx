import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieCredits from "../../../../components/movie-credits";
import styles from "./styles.module.css";
import { Tabs } from "../../../../components/movie-tabs";

export default async function MovieDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: { tab?: string };
}) {
  const { id } = await params;
  const tab = searchParams.tab || "info";
  
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      
      <Tabs activeTab={tab} id={id} />
      
      <div className={styles.tabContent}>
        {tab === "info" && (
          <Suspense fallback={<h1>Loading movie videos...</h1>}>
            <MovieVideos id={id} />
          </Suspense>
        )}
        {tab === "credits" && (
          <Suspense fallback={<h1>Loading movie credits...</h1>}>
            <MovieCredits id={id} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
