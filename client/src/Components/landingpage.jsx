import React from "react";
import Crypto from "./crypto";
import Science from "./science";
import Gadgets from "./gadgets";
import Games from "./games";
import Streaming from "./streaming";
import "../Style/landing_page.css";
import EditorsPick from "./editorsPick";
import TrendingNews from "./trendingNews";
import LatestNews from "./latestNews";
import TopOfTheWeek from "./topOfTheWeek";
import SubFooter from './subFooter';
import { Helmet } from "react-helmet-async";

function LandingPage (props) {

  return (
    <React.Fragment>
      <Helmet>
        <title>Logiclude News</title>
      </Helmet>
      <div className="feed">
        <div className="hero">
          <div className="hero_header">
            <h1>Your Reliable Tech News Source</h1>
            <h2>Get the latest Tech News</h2>
            <div className="trending_news">
              <TrendingNews />
            </div>
          </div>
          <div className="feed_content">
            <LatestNews />
          </div>
        </div>
        <div className="top">
          <div className="weekly_top">
            <div className="top_content">
              <div className="top_head">
                <h1>Top of the Week</h1>
              </div>
            </div>
            <TopOfTheWeek />
          </div>
          <div className="editors_top">
            <div className="editors_header">
              <h1>Editor's Pick</h1>
            </div>
            <EditorsPick />
          </div>
        </div>

        <div className="third_section">
          <div className="categorized">
            <div className="science_section category_section">
              <Science />
            </div>
            <div className="gadgets_section category_section">
              <Gadgets />
            </div>
            <div className="games_section category_section">
              <Games />
            </div>
            <div className="stream_section category_section">
              <Streaming />
            </div>
          </div>
          <div className="tweeter_feed">
            <Crypto />
          </div>
        </div>

        <div className="line_breaker"></div>
        <div className="subfooter">
          <SubFooter mode={props.mode} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
