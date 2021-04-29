import React from "react";
import { Helmet } from "react-helmet-async";
import LatestTabComponent from "./PageComponents/latestTabComponent";
import OtherTabComponent from "./PageComponents/otherTabComponent";
import '../Style/gadgets_component.css';

function GadgetsComponent() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Logiclude News- Gadgets</title>
      </Helmet>
      <div className="gadgets_component">
        <div className="gadgets_header">
          <h1>GADGETS</h1>
          <div className="top_gadgets">
            <LatestTabComponent category="gadgets"/>
            <OtherTabComponent category="gadgets"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GadgetsComponent;
