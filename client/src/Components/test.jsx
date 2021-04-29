import React, { useEffect, useState } from "react";
import "../Style/test.css";
import axios from "axios";
import DOMPurify from "dompurify";
function Test() {
  const [description, setdescription] = useState();
  useEffect(() => {
    axios
      .get("http://192.168.254.168:8000/api/news/1/", { mode: "no-cors" })
      .then((res) => {
        console.log(res.data.description);
        setdescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function setDescription() {
    const sanitizer = DOMPurify.sanitize(description, {
      USE_PROFILES: { html: true },
    });

    return (
      <div className="beta" dangerouslySetInnerHTML={{ __html: sanitizer }} />
    );
  }

  return (
    <React.Fragment>
      <h1>TEST</h1>
      {setDescription()}
    </React.Fragment>
  );
}

export default Test;
