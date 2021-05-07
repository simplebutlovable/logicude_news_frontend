import React, { useEffect, useState } from "react";
import axiosInstance from "../../utility/axios";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "../../Style/PageComponents/other_tab_component.css";

function OtherTabComponent(props) {
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

  if (loader) {
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

  if (errorLog !== null) {
    return <p> 404 Not Found</p>;
  }

  return (
    <React.Fragment>
      <div className="other_tab_news">
        <ul>
          { fetchData.map((data) => (
                <li key={data.id}>
                  <Link to="/" className="link">
                    <div className="other_tab_image">
                      <img
                        src={`${data.display_image}`}
                        alt={data.title}
                      />
                    </div>
                    <div className="other_tab_details">
                      <h3>{data.title}</h3>
                      <p>
                        <Moment fromNow>{data.date_posted}</Moment>
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default OtherTabComponent;
