const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require ('axios');
const { htmlToText } = require('html-to-text');
const PORT = process.env.PORT || 5000;
const serverless = require('serverless-http');
const app = express();

const clientDomain = 'https://www.logicludenews.ml/';

const router = express.Router();

router.get("/", (req, res) => {
  const filepath = path.resolve(__dirname, "../client/build", "index.html");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
   
    data = data
      .replace(/__OG_TITLE__/g, "Your reliable Tech news source is in the palm of your hand")
      .replace(/__OG_DESCRIPTION__/g, "We bring you the latest and reliable tech news all around the world. ")
      .replace(/__OG_IMAGE__/g,`${clientDomain}/images/meta_tag.jpg`);
      res.send(data);
  });
});

router.get("/science", (req, res) => {
  const filepath = path.resolve(__dirname, "../client/build", "index.html");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
   
    data = data
      .replace(/__OG_TITLE__/g, "The latest science discoveries that can change the future")
      .replace(/__OG_DESCRIPTION__/g, "Don't miss the chance to get the latest science discoveries that could reshape the future")
      .replace(/__OG_IMAGE__/g,`${clientDomain}/images/meta_tag.jpg`);
      res.send(data);
  });
});

router.get("/gadgets", (req, res) => {
  const filepath = path.resolve(__dirname, "../client/build", "index.html");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
   
    data = data
      .replace(/__OG_TITLE__/g, "The latest trends of Gadgets you don't want to miss")
      .replace(/__OG_DESCRIPTION__/g, "Get updated on the latest trends of gadgets and what it can offer to you")
      .replace(/__OG_IMAGE__/g,`${clientDomain}/images/meta_tag.jpg`);
      res.send(data);
  });
});


router.get("/games", (req, res) => {
  const filepath = path.resolve(__dirname, "../client/build", "index.html");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
   
    data = data
      .replace(/__OG_TITLE__/g, "The latest games you may want to try")
      .replace(/__OG_DESCRIPTION__/g, "Don't be late on the latest release and updates of your favorite games")
      .replace(/__OG_IMAGE__/g,`${clientDomain}/images/meta_tag.jpg`);
      res.send(data);
  });
});

router.get("/stream", (req, res) => {
  const filepath = path.resolve(__dirname, "../client/build", "index.html");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
   
    data = data
      .replace(/__OG_TITLE__/g, " Latest news of your favorite streamer ")
      .replace(/__OG_DESCRIPTION__/g, "Don't miss the latest happenings in the streaming world")
      .replace(/__OG_IMAGE__/g,`${clientDomain}/images/meta_tag.jpg`);
      res.send(data);
  });
});

router.get("/about", (req, res) => {
  const filepath = path.resolve(__dirname, "../client/build", "index.html");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
   
    data = data
      .replace(/__OG_TITLE__/g, " Want to know more about us?  ")
      .replace(/__OG_DESCRIPTION__/g, "This is Logiclude News. We deliver you the latest tech news")
      .replace(/__OG_IMAGE__/g,`${clientDomain}/images/meta_tag.jpg`);
      res.send(data);
  });
});

router.get("/news/:id", async(req, res) => {
  const filepath = path.resolve(__dirname, "../client/build", "index.html");
  fs.readFile(filepath, "utf8", (err, fetchData) => {
    if (err) {
      return console.log(err);
    }
    var id = req.params.id;
   console.log(`news/${id}`);
   axios.get(`http://192.168.254.168:8000/api/news/details/${id}`)
   .then ((respo)=>{
     const {title, description, display_image} = respo.data;
     fetchData = fetchData
     .replace(/__OG_TITLE__/g, `${title} - Logiclude News`)
     .replace(/__OG_DESCRIPTION__/g, htmlToText(description.substring(0,100)))
     .replace(/__OG_IMAGE__/g,`http://192.168.254.168:8000${display_image}`);
     res.send(fetchData);
     console.log(`Response: ${title}| ${description} |${display_image}`)
   })
   .then((err)=>{
     return console.log("Error: ",err)
   })
  });
});



app.use(express.static(path.resolve(__dirname, "../client/build")))
app.use('./', router);

modules.export.handler = serverless(app);
