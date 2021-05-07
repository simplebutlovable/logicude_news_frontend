import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utility/axios";
import Moment from "react-moment";
import Loader from "react-loader-spinner";
import "../../Style/PageComponents/latest_tab_component.css";

function LatestTabComponent(props) {
  const [loader, setLoader] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [errorLog, setErrorLog] = useState(null);
  useEffect(() => {
    let mount = true;
    let start_index = 0;
    let end_index = 4;
    axiosInstance
      .get(`api/news/category/${props.category}/${start_index}/${end_index}/`)
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

  function renderLoading() {
    return (
      <div
        className="card_loader"
        style={{ width: "100%", textAlign: "center" }}
      >
        <div className="card_loader_container">
          <Loader type="TailSpin" color="gray" width={40} />
        </div>
      </div>
    );
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }



  if (errorLog !== null) {
    return <p>Something went wrong :/</p>;
  }

  return (
    <React.Fragment>
      <div className="single_science_card">
        <div className="latest_science_header">
          <h1>Latest News</h1>
        </div>
        <div className="main_science_content">
          <div className="master_science_card">
            {loader ? (
              renderLoading()
            ) : (
              <Link
                to={`/news/${fetchData[0].id}/`}
                className="link master_link"
              >
                <div className="master_link_container">
                  <img
                    src={`${fetchData[0].display_image}`}
                    alt={fetchData[0].title}
                  />
                  <div className="master_details">
                    <div className="master_details_container">
                      <div className="master_category">
                        <p>{Capitalize(fetchData[0].category)}</p>
                      </div>
                      <h3>{fetchData[0].title}</h3>
                      <div className="master_date_posted">
                        <p>
                          Posted:&nbsp;
                          <Moment fromNow>{fetchData[0].date_posted}</Moment>
                        </p>
                        <p>Author:&nbsp;{fetchData[0].author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
          <ul>
            {loader
              ? renderLoading()
              : fetchData.slice(1).map((data) => (
                  <li key={data.id}>
                    <Link to={`/news/${data.id}`} className="link_holder link">
                      <div className="science_img">
                        <img
                          src={`${data.display_image}`}
                          alt={data.title}
                          width="100px"
                        />
                      </div>
                      <div className="science_news_details">
                        <div className="science_title">
                          <p>{data.title}</p>
                        </div>
                        <div className="science_date_posted">
                          <p>
                            <Moment fromNow>{data.date_posted}</Moment>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LatestTabComponent;
