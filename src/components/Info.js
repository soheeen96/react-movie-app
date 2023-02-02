import PropTypes from "prop-types";

function Info({ bgImg, title, summary, year, genres, ytcode, runtime }) {
  const ytcodeFull =
    `https://www.youtube.com/embed/` + ytcode + `?autoplay=1&mute=1`;
  console.log(ytcodeFull);
  return (
    <div className="detail-wrap">
      <div className="left">
        {ytcode === "" ? (
          <div
            className="no-youtube"
            style={{ background: `url('${bgImg}') right center no-repeat` }}
          ></div>
        ) : (
          <div className="youtube">
            <iframe title={title} src={ytcodeFull} allowfullscreen></iframe>
          </div>
        )}
      </div>
      <div className="content">
        <h3>{title}</h3>
        <ul>
          <li>{year}</li>
          <li>{runtime} min</li>
          <li>
            {genres.map((g) => (
              <span key={g}>{g}</span>
            ))}
          </li>
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

Info.propTypes = {
  id: PropTypes.number.isRequired,
  bgImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Info;
