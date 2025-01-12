import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

interface MovieDetailProps {
  params: { id: string };
}

export default async function MovieDetail({ params }: MovieDetailProps) {
  const awaitedParams = await params;
  return (
    <div>
      <Suspense>
        <MovieInfo id={awaitedParams.id} />
      </Suspense>
      <Suspense>
        <MovieVideos id={awaitedParams.id} />
      </Suspense>
    </div>
  );
}
