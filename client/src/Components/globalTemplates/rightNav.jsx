import React, { useEffect, useState } from "react";
import "../../Style/generalTemplates/right_nav.css";
import { Link } from "react-router-dom";
import Tweets from "../tweets";
import axios from "axios";

function RightNav() {
  const [newsList, setNewsList] = useState();
  const [errorLog, setErrorLog] = useState();

  useEffect(() => {
    axios
      .get("http://192.168.254.168:8000/api/news/home/readmore/7/", {
        timeout: 20000,
      })
      .then((res) => {
        setNewsList(res.data);
      })
      .catch((err) => {
        setErrorLog(err.response);
      });
  }, []);

  if (newsList === undefined && errorLog === undefined) {
    return <h1>Loading ...</h1>;
  }

  return (
    <React.Fragment>
      <div className="right_nav_content">
        <div className="read_more_news">
          <div className="read_more_header">
            <h1>Read More</h1>
          </div>
          <ul>
            {newsList.map((news) => (
              <li key={news.id}>
                <Link to={`news/${news.id}/`}>{news.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="tweeter_feed">
          <Tweets />
        </div>
      </div>
    </React.Fragment>
  );
}

export default RightNav;
