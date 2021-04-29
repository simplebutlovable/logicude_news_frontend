import React from "react";
import "../Style/science.css";
import { Link } from "react-router-dom";
import CategorizedNews from "./globalTemplates/categorizedNews";


function Science() {
 
  return (
    <React.Fragment>
      <div className="science">
        <div className="science_header">
          <h1>Science</h1>
          <Link className="more_science" to="/science">More</Link>
        </div>     
       <CategorizedNews category="science"/>
      </div>
    </React.Fragment>
  );
}

export default Science;
