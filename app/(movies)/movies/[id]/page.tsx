import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    return data;
}

async function getVideos(id: string) {
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    const res = await fetch(`${API_URL}/${id}/videos`);
    const data = await res.json();
    return data;
}

export default async function MovieDetail({
    params: {id},
}: {
    params: { id: string };
}) {
    console.log('start fetching');
    const movie = await getMovie(id);
    const videos = await getVideos(id);
    console.log('end fetching');
    return <div>
            <h1>{movie.title}</h1>
        </div>;
}