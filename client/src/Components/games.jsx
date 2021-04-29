import React from "react";
import "../Style/games.css";
import CategorizedNews from "./globalTemplates/categorizedNews";
import { Link } from 'react-router-dom';


function Games() {
  return (
    <React.Fragment>
      <div className="games">
        <div className="games_header">
          <h1>Games</h1>
          <Link className="more_games" to="/games">More</Link>
        </div>
        <CategorizedNews category="games" />
      </div>
    </React.Fragment>
  );
}

export default Games;
