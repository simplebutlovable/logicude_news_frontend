import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import Loader from 'react-loader-spinner';
import { Link } from "react-router-dom";
import "../../Style/generalTemplates/read-more.css";
import axiosInstance from "../../utility/axios";

function ReadMore(props) {
  const [loader, setLoader] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [errorLog, setErrorLog] = useState(null);

  useEffect(() => {
    let start_index = 7;
    let end_index = 14;
    axiosInstance
      .get(`/api/news/suggested/${props.category}/${props.id}/${start_index}/${end_index}/`)
      .then((res) => {
        setFetchData(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setErrorLog(err.response);
        setLoader(false);
      });
  }, [props.category, props.id]);

  if (loader === true) {
    return (
      <div style={{ textAlign: "center", width: "100%" }}>
        <Loader type="TailSpin" color="gray" width={40} />
      </div>
    );
  }

  if (errorLog !== null){
    return (<p>404 Not Found</p>)
  }

  return (
    <React.Fragment>
      <div className="read_more_section">
          <ul>
            {fetchData.map((news) => (
              <li key={news.id}>
                <Link to={`/news/${news.id}/`} className="_link" onClick={()=>props.clearState()}>
                  <div className="read_list">
                    <div className="read_news_img">
                      <img
                        src={`${news.display_image}`}
                        alt={news.title.substring(0, 15)}
                      />
                    </div>
                    <div className="read_news_title">
                      <h3>{news.title}</h3>
                      <div className="read_news_details">
                        <p>
                          <Moment fromNow>{news.date_posted}</Moment>
                        </p>
                      </div>
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

export default ReadMore;
