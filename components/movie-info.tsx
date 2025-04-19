import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    return data;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <div>
        <h6>{JSON.stringify(movie)}</h6>
    </div>;
}