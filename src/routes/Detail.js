import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Info from "../components/Info";
import "../css/Detail.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Info
          key={movie.id}
          id={movie.id}
          bgImg={movie.large_cover_image}
          title={movie.title}
          summary={movie.description_full}
          genres={movie.genres}
          year={movie.year}
          runtime={movie.runtime}
          ytcode={movie.yt_trailer_code}
        />
      )}
    </div>
  );
}
export default Detail;
