import React, { useEffect, useState, useRef } from "react";
import "../Style/latestNews.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function LatestNews() {
  const tile = useRef({});
  const pageLocator = useRef({});
  let [scrollFlag, setScrollFlag] = useState(1);
  useEffect(() => {
    document.title = "Home";

    if (scrollFlag > 6) {
      tile.current.scrollLeft = 0;
      setScrollFlag(1);
    }
  }, [scrollFlag]);
  const nextStory = () => {
    const tile_width = tile.current.offsetWidth;
    tile.current.scrollLeft += tile_width;
    scrollFlag += 1;
    setScrollFlag(scrollFlag);
  };
  const previoustStory = () => {
    const tile_width = tile.current.offsetWidth;
    tile.current.scrollLeft -= tile_width;
    if (scrollFlag <= 1) {
      return setScrollFlag(1);
    }
    scrollFlag -= 1;
    setScrollFlag(scrollFlag);
  };

  return (
    <React.Fragment>
      <div className="latest_news">
        <header>
          <h1>Latest News</h1>
        </header>
        <div className="news_container">
          <div className="latest_news_cards" ref={tile}>
            <LatestNewsCard card_id="l_c1" card_no="1" />
            <LatestNewsCard card_id="l_c2" card_no="2" />
            <LatestNewsCard card_id="l_c3" card_no="3" />
            <LatestNewsCard card_id="l_c4" card_no="4" />
            <LatestNewsCard card_id="l_c5" card_no="5" />
            <LatestNewsCard card_id="l_c6" card_no="6" />
          </div>
          <div className="selector_controller">
            <div className="prev" onClick={previoustStory}>
              <img
                src={process.env.PUBLIC_URL + "/images/left-arrow.png"}
                alt="previous"
              />
            </div>
            <div className="next" onClick={nextStory}>
              <img
                src={process.env.PUBLIC_URL + "/images/left-arrow.png"}
                alt="next"
              />
            </div>
          </div>
          <div className="page_inidicator" ref={pageLocator}>
            <div className="page1 g_page" />
            <div className="page2 g_page" />
            <div className="page3 g_page" />
            <div className="page4 g_page" />
            <div className="page5 g_page" />
            <div className="page6 g_page" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function LatestNewsCard(props) {
  const { card_id, card_no } = props;
  const [fetchResponse, setfetchResponse] = useState();
  const [errorLog, setErrorLog] = useState();

 
  useEffect(() => {
    axios
      .get(`http://192.168.254.168:8000/api/news/${card_no}/`, {
        timeout: 20000,
      })
      .then((res) => {
        setfetchResponse(res.data[0]);
      })
      .catch((err) => {
        setErrorLog(err.response);
      });
  }, [card_no]);

 

  if (fetchResponse === undefined) {
    if (errorLog !== undefined) {
      if (errorLog.status === 404) {
        return (
          <div className={`latest_card ${card_id}`}>
            <h3>404 Content Not Found</h3>
            <br />
            <p>Content not available or has been removed by admin</p>
          </div>
        );
      }
    }
    return <div className={`latest_card ${card_id}`}>Loading..</div>;
  }

  const { id, title, date_posted,category, display_image } = fetchResponse;

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <React.Fragment>
     
      <Link to={`/news/${id}`} className={`latest_card ${card_id}`}>
        <img
          src={`http://192.168.254.168:8000${display_image}`}
          alt={display_image}
        />

        <div className="latest_news_text">
          <div className="post_details">
            <div className="post_time">
              <p>
                Posted:&nbsp;
                <Moment fromNow>{date_posted}</Moment>
              </p>
            </div>
            <div className="post_author">
              <p>Author: Dev_Joe</p>
            </div>
          </div>
          <div className="post_category">
    <ul>
      {category.map(cat=>(<li key={cat}>{Capitalize(cat)}</li>))}
    </ul>
          </div>
          <div className="latest_news_title">
            <h3>{title}</h3>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default LatestNews;
