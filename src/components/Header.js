import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <div className="header-wrap">
      <h1>
        <Link to="/">
          <span>MOVIE</span> PEDIA
        </Link>
      </h1>
    </div>
  );
}

export default Header;
