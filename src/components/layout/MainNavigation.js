import { Link } from "react-router-dom";
import classes from "../layout/MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className="logo">logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Stations</Link>
          </li>
          <li>
            {" "}
            <Link to="/new_station">Add New Station</Link>
          </li>
          <li>
            {" "}
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
