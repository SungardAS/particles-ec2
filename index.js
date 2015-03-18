var _ = require('lodash'),
async = require('async'),
AWS = require('aws-sdk'),
fs = require('fs-extra'),
path = require('path');

var fetchImages = require('./lib/fetch-images');


var ec2 = new AWS.EC2({region:'us-east-1'});

var imageMap = {};

var f = fetchImages.start();

f.on('image', function(image) {
  imageMap[image.Name] = imageMap[image.Name] || {};
  imageMap[image.Name][image.regionName] = {};
  imageMap[image.Name][image.regionName].ami = image.ImageId;
});


f.on('end', function() {
  async.each(
    _.keys(imageMap),
    function(name,cb) {
      console.log(name);
      fs.outputFile(
        path.join('particles','partials','image-regions',name),
        JSON.stringify(imageMap[name]),
        cb
      );
    },
    function(err) {
      console.warn(err);

    }
  );
});
