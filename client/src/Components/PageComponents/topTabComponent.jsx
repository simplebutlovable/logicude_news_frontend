import React, { useEffect, useState } from "react";
import axiosInstance from "../../utility/axios";
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import '../../Style/PageComponents/top_tab_component.css';

function TopTabComponent(props) {
    const [loader, setLoader] = useState(true);
    const [fetchData, setFetchData] = useState(null);
    const [errorLog, setErrorLog] = useState(null);

useEffect(()=>{
    let mount = true;
    let start_index = 0;
    let end_index = 10;
    axiosInstance.get(`api/news/category/${props.category}/${start_index}/${end_index}/`).then((res)=>{
        if (mount){
        setFetchData(res.data);
        setLoader(false);
    }
    })
    .catch((err)=>{
        if (mount){
            setErrorLog(err.response);
            setLoader(false)
        }
    })
    window.scrollTo(0,0);
    return (()=>{
        mount = false;
    });
},[props.category]);




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

  if (errorLog !== null) {
    return (
     <p>Something went wrong :/</p>
    );
  }


  return (
    <React.Fragment>
      <div className="top_block">
        <ul>
          {loader
            ? renderLoading()
            : fetchData.map((data) => (
                <li key={data.id}>
                  <Link to={`news/${data.id}/`} className="link tab_top_link">
                    <div className="tab_top_img">
                      <img
                        src={`${data.display_image}`}
                        alt={data.title}
                      />
                    </div>
                    <div className="tab_top_desc">
                      <p>{data.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default TopTabComponent;
