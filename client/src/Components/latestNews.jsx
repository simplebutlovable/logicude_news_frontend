import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import "../Style/latest_news.css";
import Moment from "react-moment";
import axiosInstance from "../utility/axios";


function LatestNews() {
  return (
    <React.Fragment>
      <div className="latest_news_component">
        <h1>Latest News</h1>
        <div className="latest_news_content">
          <div className="news_container">
            <ul>
              <li>
                <LatestNewsCard card_no="1" />
              </li>
              <li>
                <LatestNewsCard card_no="2" />
              </li>
              <li>
                <LatestNewsCard card_no="3" />
              </li>
              <li>
                <LatestNewsCard card_no="4" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function LatestNewsCard(props) {
  const [loader, setLoader] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [errorLog, setErrorLog] = useState(null);
  useEffect(() => {
    let mount = true;
    axiosInstance
      .get(`/api/news/latest/${props.card_no}/`)
      .then((res) => {
        if (mount === true) {
          setFetchData(res.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        if (mount === true) {
          setErrorLog(err.response);
          setLoader(false);
        }
      });
    return () => {
      mount= false;
    };
  }, [props.card_no]);

  if (loader === true) {
    return (
      <div style={{ textAlign: "center", width: "100%", height: "200px" }}>
        <Loader type="TailSpin" color="gray" width={40} />
      </div>
    );
  }

  if (errorLog !== null) {
    return <h1>Error</h1>;
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const {
    id,
    title,
    category,
    author,
    display_image,
    date_posted,
  } = fetchData[0];

  return (
    <React.Fragment>
      <div className={`latest_news_card card_${props.card_no}`}>
        <Link to={`news/${id}`}>
          <div className="card_container">
            <img
              src={`${display_image}`}
              alt={`${title.substring(0, 30)}...`}
            />
            <div className="latest_news_description">
              <div className="latest_news_description_container">
                <div className="latest_news_category">
                  <p>{Capitalize(category)}</p>
                </div>
                <div className="latest_news_title">
                  <h3>{title}</h3>
                </div>

                <div className="latest_post_details">
                  <div className="latest_news_date">
                    <p>Posted: &nbsp;</p>
                    <Moment fromNow>{date_posted}</Moment>
                  </div>
                  <div className="latest_news_author">
                    <p>Author: {author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default LatestNews;
