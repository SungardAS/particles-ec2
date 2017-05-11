# Change Log
All notable changes to this project will be documented here in
accordance with [Keep a CHANGELOG][keep-changelog-url].
This project adheres to [Semantic Versioning][semver-url].

## [0.4.0] - 2017-05-10
### Added
- ami front\_loader
- ELB Logs Account helper (for IAM permissions)
- ELB Logs Policy particle

## [0.3.1] - 2016-10-25

### Fixed
- LoadBalancer CanonicalHostedZoneNameID attribute [issue #3]

## [0.3.0] - 2016-07-08

### Changed
- Breaking changes from 0.2.x to 0.3.0.
  - AMIs have been moved to particles-amazon-ami
  - particles updated to condensation 0.5.x spec

- Requires [condensation][condensation-url] ^0.5.0

### Added
- Unit tests using [condensation-particle-tests][cpt-url]
- cloudformation linu userdata
- iam assume role statement


[cpt-url]: https://github.com/SungardAS/condensation-particle-tests
[semver-url]: http://semver.org
[keep-changelog-url]: http://keepachangelog.com/
[condensation-url]: https://github.com/SungardAS/condensation
