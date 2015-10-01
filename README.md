# particles-ec2

[Condensation](https://github.com/kmcgrath/condensation) particles for
ec2 resources.

[![logo](https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png)](https://github.com/SungardAS/condensation)

[![NPM](https://nodei.co/npm/particles-ec2.png)](https://nodei.co/npm/particles-ec2/)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependency
Status](https://david-dm.org/SungardAS/particles-ec2.svg?branch=master)](https://david-dm.org/SungardAS/particles-ec2?branch=master)

## outputs

### instance\_availability\_zone
Instance AvailabilityZone

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

### instance\_id
Instance ID

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

### instance\_private\_dns
Instance Private DNS

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

### instance\_private\_ip
Instance Private IP

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

### instance\_public\_dns
Instance Public DNS

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

### instance\_public\_ip
Instance Public IP

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

### security\_group\_id
SecurityGroup ID

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

### security\_group\_name
SecurityGroup Name

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource


## sets

### instance\_output\_all
Create all available instance outputs

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource


### security\_group\_output\_all
Create all available security group outputs

*Parameters*
  `securityGroupLogicalId {String}` logicalId of the AWS::EC2::SecurityGroup resource

## partials

### amazon-image-regions
All images owned by `amazon` organized by their name and the region they
are stored in.  Each file represents an AMI name and the file's contents
is a json map of AWS regions to AMI IDs.


## Note

At this time neither Handlebars or Condensation support async helpers.
Until then this project will pre-process AMIs owned by Amazon and commit
them to the partials directory here.

