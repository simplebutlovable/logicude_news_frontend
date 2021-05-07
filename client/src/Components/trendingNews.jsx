import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Loader from "react-loader-spinner";
import axiosInstance from "../utility/axios";


function TrendingNews() {
  const [loader, setLoader ] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [errorLog, setErrorLog] = useState(null);

  useEffect(() => {
    let mount = true;
    axiosInstance
      .get("/api/news/trending/")
      .then((res) => {
        if (mount === true){
          setFetchData(res.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        if (mount === true){
          setErrorLog(err.response);
          setLoader(false);
        }
      });
      window.scrollTo(0,0);
      return (()=>{
      mount= false;
      });
  }, []);

  if (loader) {
    return (
      <div style={{ textAlign: "center" }}>
        <Loader type="ThreeDots" width={40} timeout={3000} color="gray"/>
      </div>
    );
  }
  if (errorLog !== null) {
    return <p style={{ textAlign: "center" }}>Something went wrong :/</p>;
  }
  return (
    <React.Fragment>
      <ul>
        {fetchData.map((data) => (
          <li key={data.id}>
            <Link to={`news/${data.id}/`} className="link">
              {data.title}
            </Link>
            <div className="date_posted">
              <Moment fromNow>{data.date_posted}</Moment>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default TrendingNews;
