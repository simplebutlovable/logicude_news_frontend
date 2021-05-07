import React, { useEffect, useState } from "react";
import Loader from 'react-loader-spinner';
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "../Style/editors_choice.css";
import axiosInstance from "../utility/axios";

function EditorsPick() {
  const [loader, setLoader ] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [errorLog, setErrorLog] = useState(null);
  useEffect(() => {
    let mount = true;
    let start_index = 0;
    let end_index  = 10;
    axiosInstance
      .get(`/api/news/editorspick/${start_index}/${end_index}/`, {
        timeout: 10000,
      })
      .then((res) => {
       if (mount){
        setFetchData(res.data);
        setLoader(false);
       }
      })
      .catch((err) => {
       if (mount){
        setErrorLog(err.response);
        setLoader(false);
       }
      });
      return(()=>{
        mount= false;
      });
  }, []);

  if (loader) {
    return (
      <div style={{ textAlign: "center" }}>
        <Loader type="TailSpin" color="gray" width={40} />
      </div>
    );
  }

  if (errorLog !== null ){
    return (<div>Something went wrong :/</div>);
  }

  const { title, display_image, date_posted, author, id } = fetchData[0];

  return (
    <React.Fragment>
        <div className="editors_content">
          
          <div className="editors_single_card">
          <Link to={`news/${id}/`} className="link">
            <img
              src={`${display_image}`}
              alt={title}
            />
            <div className="single_card_description">
              <div className="single_card_container">
                <div className="single_card_title">
                  <p>{title}</p>
                </div>
                <div className="single_card_post_details">
                  <p>
                    Posted: <Moment fromNow>{date_posted}</Moment>
                  </p>
                  <p>Author : {author}</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
         
          <div className="editors_news_list">
            <ul>
              {fetchData.slice(1).map((data) => (
                <li key={data.id}>
                  <Link to={`/news/${data.id}/`} className="link">
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </React.Fragment>
  );
}

export default EditorsPick;
