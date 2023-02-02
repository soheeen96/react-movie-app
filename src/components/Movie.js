import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, rating }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <div>
          <div className="img">
            <img src={coverImg} alt={title} />
            <div className="view-more">VIEW MORE</div>
          </div>
          <div className="text">
            <h2>{title}</h2>
            <p>
              ☆<span>{rating}</span>/10
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;

// function Movie({ id, coverImg, title, summary, genres }) {
//   return (
//     <div>
//       <Link to={`/movie/${id}`}>
//         <img src={coverImg} alt={title} />
//         <h2>{title}</h2>
//         <p>{summary}</p>
//         <ul>
//           {genres.map((g) => (
//             <li key={g}>{g}</li>
//           ))}
//         </ul>
//       </Link>
//     </div>
//   );
// }
