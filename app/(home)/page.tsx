"use client"

import { useState, useEffect } from 'react';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const[movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
    const data = await res.json();
    setMovies(data.results);
  }
  useEffect(() => {
    getMovies();
    setIsLoading(false);
  }, []);
  return <div>
    <h1>Hello World</h1>
    {isLoading && <div>Loading...</div>}
    {movies && movies.map((movie: any) => (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    ))}
    </div>;
}
