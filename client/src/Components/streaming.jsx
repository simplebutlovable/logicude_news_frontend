import React from "react";
import CategorizedNews from './globalTemplates/categorizedNews';
import '../Style/streaming.css';
import { Link } from "react-router-dom";


function Streaming() {
 
  return (
    <React.Fragment>
     <div className="streaming">
        <div className="streaming_header">
          <h1>Streaming</h1>
          <Link className="more_streaming" to="/stream">More</Link>
        </div>
        <CategorizedNews category="stream" />
      </div>
    </React.Fragment>
  );
}

export default Streaming;
