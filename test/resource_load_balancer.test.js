var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("load_balancer", function() {
    it("creates the resource with listeners", function() {
      cTests.testParticle(
        "resource",
        "load_balancer",
        require("./fixtures/resource_load_balancer_output_1"),
        {
          logicalId: "LoadBalancer",
          hArgs: {
            listeners: [ {
              "LoadBalancerPort": "80",
              "InstancePort": "80",
              "Protocol": "HTTP"
            }]
          }
        }
      );
    });

  });
});
