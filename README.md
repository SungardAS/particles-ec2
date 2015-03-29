# particles-ec2

[Condensation](https://github.com/kmcgrath/condensation) particles for
ec2 resources.

## partials

### amazon-image-regions
All images owned by `amazon` organized by their name and the region they
are stored in.  Each file represents an AMI name and the file's contents
is a json map of AWS regions to AMI IDs.


## Note

At this time neither Handlebars or Condensation support async helpers.
Until then this project will pre-process AMIs owned by Amazon and commit
them to the partials directory here.

## TODO
* Create a gulpfile with reusable gulp tasks
* Helper with live lookup (depends on Handlebars or Condensation async
  support)

