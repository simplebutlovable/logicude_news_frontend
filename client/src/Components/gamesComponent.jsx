import React from "react";
import { Helmet }from 'react-helmet-async';
import '../Style/games_component.css';
import BotTabComponent from "./PageComponents/botTabComponent";
import LatestTabComponent from "./PageComponents/latestTabComponent";
import OtherTabComponent from "./PageComponents/otherTabComponent";
import TopTabComponent from "./PageComponents/topTabComponent";

function GamesComponent() {

  return (
    <React.Fragment>
      <Helmet>
        <title>Logiclude News- Games</title>
      </Helmet>
      <div className="games_component">
        <div className="top_games">
          <BotTabComponent category="games"/>
          <BotTabComponent category="games"/>
          <BotTabComponent category="games"/>
        </div>
        <div className="mid_games">
          <LatestTabComponent category="games"/>
          <OtherTabComponent category="games"/>
        </div>
        <div className="bot_games">
          <TopTabComponent category="games"/>
        </div>
      </div>
    </React.Fragment>
  );
}
export default GamesComponent;
