import {API_URL} from "@/components/constants";
import Movie from "@/components/movie";
import styles from "../../../styles/home.module.css";
export const metadata = {
    title: "Home",
};


async function getMovies() {
    const response = await fetch(API_URL ); //fetch된 url을 자동으로 캐싱해준다
    return await response.json();
}

interface movieType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: string,
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
    return <div  className={styles.container}>      {movies.map((movie:movieType) => (
        <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
        />
    ))}</div>;
}