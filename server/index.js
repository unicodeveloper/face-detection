const express = require('express');
const app = express();
const multipart = require('connect-multiparty');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

cloudinary.config({
  cloud_name: 'xxxxxxx',
  api_key: 'xxxxxxxx',
  api_secret: 'xxxxxxxxx'
});

// Multiparty middleware
const multipartMiddleware = multipart();

app.post('/upload', multipartMiddleware, function(req, res) {

  cloudinary.uploader.upload(req.files.image.path, function(result) {
    res.json(result);
  },
  {
    transformation: [
        {width: 700, radius: "max", crop: "scale"},
        { flags: "region_relative", gravity: "adv_eyes", overlay: req.body.item, width: "1.7"}
    ]
  });

});


app.listen(3333);
console.log('Listening on localhost:3333');