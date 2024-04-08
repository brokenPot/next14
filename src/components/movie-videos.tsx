import {API_URL} from "@/components/constants";
import styles from "../../styles/movie-videos.module.css";
async function getVideos(id: string) {
    // console.log(`Fetching videos: ${Date.now()}`);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error("something broke...");
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

interface videoTypes{
    iso_639_1: string
    iso_3166_1: string
    name:  string
    key:   string
    site:  string
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id:string
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    console.log(videos)
    return (
        <div className={styles.container}>
            {videos.map((video:videoTypes) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}