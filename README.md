# particles-ec2

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Summary

## Particles

### front\_loaders

#### ami
Finds the most recent AMI based on parameters sent to describeImages

**Example**  
```
---
frontload:
  amazon_ami:
    module: particles-ec2
    loader: ami
      opts:
        Owners:
          - amazon
        Filters:
          -
            Name: name
            Values: ["amzn-ami-hvm*x86_64-gp2"]
---

ImageId: {{ami}}
```

-

### helpers

#### elb\_logs\_account
Returns the ELB logs account for the deployment region.

See [Enable Access Logs](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html#attach-bucket-policy)

**Example**  
```
{{helper "m:ec2" "elb_logs_account"}}
```

### outputs

#### instance/availability\_zone
Instance AvailabilityZone

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance/id
Instance ID

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance/private\_dns
Instance Private DNS

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance/private\_ip
Instance Private IP

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance/public\_dns
Instance Public DNS

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

#### instance/public\_ip
Instance Public IP

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource

### sets

#### instance/output\_all
Create all available instance outputs

*Parameters*
  `instanceLogicalId {String}` logicalId of the AWS::EC2::Instance resource


## Sungard Availability Services | Labs
[![Sungard Availability Services | Labs][labs-image]][labs-github-url]

This project is maintained by the Labs team at [Sungard Availability
Services](http://sungardas.com)

GitHub: [https://sungardas.github.io](https://sungardas.github.io)

Blog: [http://blog.sungardas.com/CTOLabs/](http://blog.sungardas.com/CTOLabs/)

[labs-github-url]: https://sungardas.github.io
[labs-image]: https://raw.githubusercontent.com/SungardAS/repo-assets/master/images/logos/sungardas-labs-logo-small.png
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
