import { Suspense } from "react";
import MovieCredits from "../../../../../components/movie-credits";
import MovieInfo from "../../../../../components/movie-info";

export default async function Credits({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieCredits id={id} />
      </Suspense>
    </div>
  );
}
