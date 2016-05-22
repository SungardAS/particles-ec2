
var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("cloudformation", function() {
    describe("linux_user_data", function() {
      it("creates user_data", function() {
        cTests.testParticle(
          "partial",
          "cloudformation/linux_user_data",
          require("./fixtures/partial_cloudformation_linux_user_data_output_1"),
          {
            hArgs: {
              notifyResource: "Resource1",
              metadataResource: "Resource2"
            }
          }
        );
      });

      it("creates user_data with custom commandSet", function() {
        cTests.testParticle(
          "partial",
          "cloudformation/linux_user_data",
          require("./fixtures/partial_cloudformation_linux_user_data_output_2"),
          {
            hArgs: {
              notifyResource: "Resource1",
              metadataResource: "Resource2",
              commandSet: "mySet"
            }
          }
        );
      });
    });
  });
});
