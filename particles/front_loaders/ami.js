var _ = require("lodash");
var AWS = require("aws-sdk");

/**
 * Finds the most recently created AMI based on parameters sent to describeImages
 * @example
 * ---
 * frontload:
 *   amazon_ami:
 *     module: particles-ec2
 *     loader: ami
 *       opts:
 *         Owners:
 *           - amazon
 *         Filters:
 *           -
 *             Name: name
 *             Values: ["amzn-ami-hvm*x86_64-gp2"]
 * ---
 * ImageId: {{ami}}
 * @function ami
 */
module.exports = function ami(opts,cb) {
  var self = this;

  var ec2 = new AWS.EC2({
    region: this.s3.region
  });

  var sortBy = opts.sortBy || ["CreationDate"];
  delete opts.sortBy;

  ec2.describeImages(opts,function(err,data) {
    if (err) return cb(err);

    var mostRecent = _.last(_.sortBy(data.Images, sortBy));
    cb(null,mostRecent.ImageId);

  });

};
