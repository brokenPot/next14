// import {API_URL} from "@/components/constants";
import {Suspense} from "react";
import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";

// async function getMovie(id: string) {
//     console.log(`Fetching movies: ${Date.now()}`);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }
//
// async function getVideos(id: string) {
//     console.log(`Fetching videos: ${Date.now()}`);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }

export default async function MovieDetail({params: { id }}: {params: { id: string };
}) {

    return <div>
        <h3>Movie detail page</h3>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <h4>Videos</h4>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>;
}