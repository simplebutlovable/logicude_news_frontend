import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/generalTemplates/content_not_found.css';

function ContentNotFound(){
    return (<React.Fragment>
        <div className="not_found">
            <div className="error_display">
                <h1>404</h1>
                <h1>NOT FOUND</h1>
                <p>Content not found or has been removed by admin</p>
                <div className="fallback_page">
                <p>Go back to <Link to="/">Homepage</Link></p>
            </div>
            </div>
           
        </div>
    </React.Fragment>);
}

export default ContentNotFound;