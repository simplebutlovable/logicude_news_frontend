import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import "../Style/top-of-the-week.css";
import Moment from "react-moment";
import axiosInstance from "../utility/axios";

function TopOfTheWeek() {
  const [loader, setLoader] = useState(true);
  const [newsList, setNewsList] = useState(null);
  const [errorLog, setErrorLog] = useState(null);
  useEffect(() => {
    let mount = true;
    let start_index = 0;
    let end_index = 10;
    axiosInstance
      .get(`/api/news/topoftheweek/${start_index}/${end_index}/`)
      .then((res) => {
      if (mount){
        setNewsList(res.data);
        setLoader(false);
      }
        
      })
      .catch((err) => {
       if (mount){
        setErrorLog(err.response);
        setLoader(false);
       }
      });
      return (()=>{
       mount=false;
      });
  }, []);

  if (loader) {
    return (
      <div style={{ textAlign: "center" }}>
        <Loader type="TailSpin" color="gray" width={40} />
      </div>
    );
  }

  if (errorLog !== null){
    return (<p>Something went wrong</p>)
  }

  return (
    <React.Fragment>
      <div className="top_list">
        <ul>
          {newsList.map((news) => (
            <li key={news.id}>
              <Link className="custom_link" to={`news/${news.id}/`}>
                <div className="news_link_container">
                  <div className="news_image">
                    <img
                      src={`${news.display_image}`}
                      alt="te"
                    />
                  </div>
                  <div className="news_title">
                    <h3> {news.title}</h3>
                    <p>
                      <Moment fromNow>{news.date_posted}</Moment>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default TopOfTheWeek;
