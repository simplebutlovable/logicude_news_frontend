import React from "react";
import "../Style/gadgets.css";
import CategorizedNews from "./globalTemplates/categorizedNews";
import { Link } from "react-router-dom";



function Gadgets() { 
  return (
    <React.Fragment>
      <div className="gadgets">
        <div className="gadgets_header">
          <h1>Gadgets</h1>
          <Link className="more_gadgets" to="/gadgets">
            More
          </Link>
        </div>
        <CategorizedNews category="gadgets" />
      </div>
    </React.Fragment>
  );
}

export default Gadgets;
