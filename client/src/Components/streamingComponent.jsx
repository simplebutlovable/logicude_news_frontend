import React from "react";
import { Helmet } from 'react-helmet-async';
import BotTabComponent from "./PageComponents/botTabComponent";
import LatestTabComponent from "./PageComponents/latestTabComponent";
import OtherTabComponent from "./PageComponents/otherTabComponent";
import TopTabComponent from "./PageComponents/topTabComponent";
import '../Style/streaming_component.css';


function StreamingComponent() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Logiclude News- Streaming</title>
      </Helmet>
      <div className="streaming_component">

        <div className="top_streaming_section">
          <TopTabComponent category="stream" />
        </div>

        <div className="latest_streaming_section">
          <LatestTabComponent category="stream" />
          <OtherTabComponent category="stream" />
        </div>
        <div className="bot_tab_streaming">
          <BotTabComponent category="stream" si={9} ei={15}/>
          <BotTabComponent category="stream" si={16} ei={22}/>
          <BotTabComponent category="stream"si={23} ei={29} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default StreamingComponent;
