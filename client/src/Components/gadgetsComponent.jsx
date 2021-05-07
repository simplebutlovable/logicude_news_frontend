import React from "react";
import { Helmet } from "react-helmet-async";
import LatestTabComponent from "./PageComponents/latestTabComponent";
import OtherTabComponent from "./PageComponents/otherTabComponent";
import BotTabComponent from './PageComponents/botTabComponent';
import TopTabComponent from './PageComponents/topTabComponent';
import '../Style/gadgets_component.css';

function GadgetsComponent() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Logiclude News- Gadgets</title>
      </Helmet>
      <div className="gadgets_component">
        <div className="gadgets_header">
          {/* <h1>GADGETS</h1> */}
          <div className="top_gadgets">
            <LatestTabComponent category="gadgets"/>
            <OtherTabComponent category="gadgets"/>
          </div>
          <div className="mid_gadgets">
            <BotTabComponent category="gadgets"si={9} ei={15}/>
            <BotTabComponent category="gadgets" si={16} ei={22}/>
            <BotTabComponent category="gadgets"si={23} ei={29}/>
          </div>
          <div className="bot_gadgets">
            <TopTabComponent category="gadgets"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GadgetsComponent;
