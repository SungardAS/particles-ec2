var AWS = require('aws-sdk'),
EventEmitter = require('events').EventEmitter,
_ = require('lodash'),
async = require('async'),
util = require('util');

var Fetcher = function(options) {
  this.ec2 = new AWS.EC2({region:'us-east-1'});
  this.fetch();
};
util.inherits(Fetcher,EventEmitter);

Fetcher.prototype.fetch = function(options) {
  var self = this;

  this.ec2.describeRegions({}, function(err,data) {
    async.each(
      _.pluck(data.Regions,'RegionName'),
      function(regionName,cb) {
        var regionEc2 = new AWS.EC2({region:regionName});
        regionEc2.describeImages({
          Owners: ['amazon']
        },
        function(err,data) {
          if(err) {
            cb(err);
          }
          else {
            async.each(
              data.Images,
              function(image,imageCb) {
                image.regionName = regionName;
                self.emit('image', image);
                imageCb();
              },
              function(err) {
                cb(err);
              }
            );
          }
        })
      },
      function(err) {
        self.emit('end');
      }
    );
  });
};

exports.start = function(options) {
  return new Fetcher(options);
};

