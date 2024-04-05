import Link from "next/link";
import {API_URL} from "@/components/constants";

export const metadata = {
    title: "Home",
};


async function getMovies() {
    const response = await fetch(API_URL ); //fetch된 url을 자동으로 캐싱해준다
    const json = await response.json();
    return json;
}

interface movieType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}




export default async function HomePage() {
    const movies = await getMovies();
    return <div>      {movies.map((movie:movieType) => (
        <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
    ))}</div>;
}