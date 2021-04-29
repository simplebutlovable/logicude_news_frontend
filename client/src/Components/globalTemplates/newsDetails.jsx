import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loader from "react-loader-spinner";
import axiosInstance from "../../utility/axios";
import Moment from "react-moment";
import "../../Style/generalTemplates/news_details.css";
import DOMPurify from "dompurify";
import ReadMore from "./readMore";

function NewsDetails(props) {
  const [loader, setloader] = useState(true);
  const [newsContent, setNewsContent] = useState(null);
  const [errorLog, setErrorLog] = useState(null);
  const [alsoReadContent, setAsloReadContent] = useState(null);
  const [alsoReadError, setAlsoReadError] = useState(null);
  useEffect(() => {
    axiosInstance
      .get(`/api/news/details/${props.match.params.id}/`)
      .then((res) => {
        setNewsContent(res.data);
        setloader(false);
      })
      .catch((err) => {
        setErrorLog(err.response);
        setloader(false);
      });

    window.scrollTo(0, 0);
  }, [props.match.params.id]);

  useEffect(() => {
    if (newsContent !== null) {
      axiosInstance
        .get(
          `/api/news/alsoread/${newsContent.category}/${props.match.params.id}`
        )
        .then((res) => {
          setAsloReadContent(res.data);
        })
        .catch((err) => {
          setAlsoReadError(err.response);
        });
    }
  }, [newsContent, props.match.params.id]);

  if (errorLog !== null) {
    console.log("Error: ", errorLog);
  }
  function clearState() {
    setNewsContent(null);
    setErrorLog(null);
    setloader(true);
  }

  if (loader) {
    return (
      <div className="parent_loader">
        <div className="loader_container">
          <Loader type="TailSpin" color="gray" width={40} />
        </div>
      </div>
    );
  }

  const {
    id,
    title,
    author,
    date_posted,
    category,
    description,
    display_image,
  } = newsContent;

  function setDescription() {
    const sanitizer = DOMPurify.sanitize(description, {
      USE_PROFILES: { html: true },
    });

    return (
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: sanitizer }}
      />
    );
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="news_feed">
        <div className="news_details">
          <div className="headline_img">
            <img src={`${display_image}`} alt={title} />
          </div>
          <div className="f_post_details">
            <small>
              Posted:
              <Moment fromNow>{date_posted}</Moment>
            </small>
            <small>Author: {author}</small>
          </div>
          <div className="category">
            {category ? (
              <Link to={`/${category}`} className="cat_list" key={id}>
                {Capitalize(category)}
              </Link>
            ) : (
              <p>Category Not Secified</p>
            )}
          </div>
          <div className="f_title">
            <h1>{title}</h1>
          </div>
          <div className="f_description">
            <h3>{setDescription()}</h3>
          </div>

          <div className="also_read">
            <div className="read_header">
              <h3>Also Read</h3>
            </div>
            <div className="also_read_list">
              <ul>
                {alsoReadError === null && alsoReadContent === null ? (
                  <h1>Loading...</h1>
                ) : (
                  alsoReadContent.map((read) => (
                    <li key={read.id}>
                      <Link
                        to={`/news/${read.id}/`}
                        className="also_link"
                        onClick={clearState}
                      >
                        {read.title}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="read_more">
          <div className="read_more_header">
            <h1>Read More</h1>
          </div>
          <ReadMore
            clearState={clearState}
            category={newsContent.category}
            id={newsContent.id}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewsDetails;
