import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container navbar ">
      <h2 className="myfeed">My feed</h2>
      <div className="buttons">
        <Link className="active button " to="/">
          Relevant
        </Link>
        <Link className="button" to="/recent">
          Recent
        </Link>
        <Link className="button" to="/featured">
          featured
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
