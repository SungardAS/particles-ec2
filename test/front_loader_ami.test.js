var ami = require("../particles/front_loaders/ami");
var assert = require("assert");

describe("front_loaders", function() {
  describe("ami", function() {

    var context = {
      s3: {
        region: "us-east-1"
      }
    };

    it("should find the latest amazon ami", function(done) {
      this.timeout(90000);

      ami.call(context,{
        Owners: ["amazon"],
        Filters: [
          {Name: "name", Values: ["amzn-ami-hvm*x86_64-gp2"]}
        ]
      }, function(err, data) {
        assert.ifError(err);
        assert(data);
        done();
      });
    });

    it("should be able to sort", function(done) {
      this.timeout(30000);

      ami.call(context,{
        Owners: ["amazon"],
        Filters: [
          {Name: "name", Values: ["amzn-ami-hvm*x86_64-gp2"]}
        ],
        sortBy: ["Name"]
      }, function(err, data) {
        assert.ifError(err);
        assert(data);
        done();
      });
    });

  });
});
