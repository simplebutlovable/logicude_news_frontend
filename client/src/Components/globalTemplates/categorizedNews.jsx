import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utility/axios";
import Moment from "react-moment";
import "../../Style/generalTemplates/categorized-news.css";
import Loader from "react-loader-spinner";

function CategorizedNews(props) {
  const [loader, setLoader] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [errorLog, setErrorLog] = useState(null);

  useEffect(() => {
    let mount = true;
    let start_index = 5;
    let end_index = 12;
    axiosInstance
      .get(`/api/news/category/${props.category}/${start_index}/${end_index}/`)
      .then((res) => {
        if (mount) {
          setFetchData(res.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        if (mount) {
          setErrorLog(err.response);
          setLoader(false);
        }
      });

    return () => {
      mount = false;
    };
  }, [props.category]);

  if (loader) {
    return (
      <div style={{ textAlign: "center" }}>
        <Loader type="TailSpin" color="gray" width={40} />
      </div>
    );
  }

  if (errorLog !== null) {
    return (
      <div>
        <p>Something Went Wrong :/</p>
      </div>
    );
  }

  const { display_image, title, id, date_posted } = fetchData[0];

  return (
    <React.Fragment>
      <div className="content">
        <Link className="custom_link" to={`news/${id}/`}>
          <div className="first_content">
            <img
              src={`${display_image}`}
              alt={title.substring(0, 15)}
            />
            <div className="categorized_news_title">
              <p>{title}</p>
              <div className="date_posted">
                <Moment fromNow>{date_posted}</Moment>
              </div>
            </div>
          </div>
        </Link>

        <div className="news_list">
          <ul>
            {fetchData.slice(1).map((fetch) => (
              <li key={fetch.id}>
                <Link className="link" to={`news/${fetch.id}/`}>
                  {fetch.title}
                </Link>
                <div className="date_posted">
                  <Moment fromNow>{fetch.date_posted}</Moment>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CategorizedNews;
