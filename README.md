# particles-ec2

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Summary

## Particles

### outputs

#### instance\_availability\_zone
Instance AvailabilityZone

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance\_id
Instance ID

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance\_private\_dns
Instance Private DNS

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance\_private\_ip
Instance Private IP

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance\_public\_dns
Instance Public DNS

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance\_public\_ip
Instance Public IP

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### security\_group\_id
SecurityGroup ID

*Parameters*
  `securityGroupLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### security\_group\_name
SecurityGroup Name

*Parameters*
  `securityGroupLogicalId {String}` logicalId of the AWS::EC2::Instance resource


### sets

#### instance\_output\_all
Create all available instance outputs

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource


#### security\_group\_output\_all
Create all available security group outputs

*Parameters*
  `securityGroupLogicalId {String}` logicalId of the AWS::EC2::SecurityGroup resource

### partials

#### amazon-image-regions
All images owned by `amazon` organized by their name and the region they
are stored in.  Each file represents an AMI name and the file's contents
is a json map of AWS regions to AMI IDs.

## Sungard Availability Services | Labs
[![Sungard Availability Services | Labs][labs-logo]][labs-github-url]

This project is maintained by the Labs team at [Sungard Availability
Services](http://sungardas.com)

GitHub: [https://sungardas.github.io](https://sungardas.github.io)

Blog: [http://blog.sungardas.com/CTOLabs/](http://blog.sungardas.com/CTOLabs/)

[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-ec2.svg
[npm-url]: https://npmjs.org/package/particles-ec2
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[travis-image]: https://travis-ci.org/SungardAS/particles-ec2.svg?branch=master
[travis-url]: https://travis-ci.org/SungardAS/particles-ec2
[daviddm-image]: https://david-dm.org/SungardAS/particles-ec2.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SungardAS/particles-ec2
