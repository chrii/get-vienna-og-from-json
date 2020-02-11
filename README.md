# Small filtering class for Vienna Open Government Data

## The format of the json should be WFS getFeature

## Examples:

const data = new GetFeature(WFSformattedJOSN);

data.getAllFeatures();

data.getAllIds();

data.getUnclampedIds();

data.getCoordinatesById("IDNAMEOGD.12345"); //needs the OGD ID if wrong or not found, it throws an error

data.getFeatureById("IDNAMEOGD.12345"); //needs the OGD ID if wrong or not found, it throws an error

data.getObjectsByDistrict(3); // Needs type number -> Only valid districts (1-23)

### This is for an extendable use since the properties of the features are variable

Version 0.0
