import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import axiosInstance from "../../utility/axios";
import Loader from "react-loader-spinner";
import "../../Style/PageComponents/bot_tab_component.css";
import { Link } from "react-router-dom";

function BotTabComponent(props) {
  const [loader, setLoader] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [errorLog, setErrorLog] = useState(null);

  useEffect(() => {
    let mount = true;
    axiosInstance
      .get(`api/news/category/${props.category}/${props.si}/${props.ei}/`)
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
  }, [props.category, props.ei, props.si]);

  if (loader) {
    return (
      <div style={{ textAlign: "center" }}>
        <Loader type="TailSpin" color="gray" width={40} />
      </div>
    );
  }
  if (errorLog !== null) {
    return <div>Something went wrong :/</div>;
  }

  return (
    <React.Fragment>
      <div className="bot_tab_news">
        <Link to={`news/details/${fetchData[0].id}`}>
          <div className="headline_tab">
            <div className="headline_tab_img">
              <img
                src={`${fetchData[0].display_image}`}
                alt={fetchData[0].title}
              />
            </div>
            <div className="headline_desc">
              <div className="headline_desc_container">
                <h3>{fetchData[0].title}</h3>
                <p>
                  Posted: <Moment fromNow>{fetchData[0].date_posted}</Moment>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <ul>
          {fetchData.slice(1).map((data) => (
            <li key={data.id}>
              <Link to={`news/${data.id}/`} className="link headlink">
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default BotTabComponent;
