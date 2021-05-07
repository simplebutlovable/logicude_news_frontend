import React from "react";
import { Helmet } from "react-helmet-async";
import "../Style/science_component.css";
import BotTabComponent from "./PageComponents/botTabComponent";
import LatestTabComponent from "./PageComponents/latestTabComponent";
import OtherTabComponent from "./PageComponents/otherTabComponent";
import TopTabComponent from "./PageComponents/topTabComponent";

function ScienceComponent() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Logiclude News- Science</title>
      </Helmet>
      <div className="science_component">
        <div className="science_component_header">
          <h1>SCIENCE</h1>
        </div>
        <div className="top_science_section">
          <TopTabComponent category="science" />
        </div>

        <div className="latest_science_section">
          <LatestTabComponent category="science" />
          <OtherTabComponent category="science" />
        </div>
        <div className="bot_tab_science">
          <BotTabComponent category="science" si={9} ei={15} />
          <BotTabComponent category="science" si={16} ei={22}/>
          <BotTabComponent category="science" si={23} ei={29}/>
        </div>
    
      </div>
    </React.Fragment>
  );
}

export default ScienceComponent;
