import { GetFeature } from "./classes/GetFeature";
import someJson from "./where/jsonFile/is";

const data = new GetFeature(someJson);

data.getAllFeatures();
data.getAllIds();
data.getUnclampedIds();
data.getCoordinatesById("IDNAMEOGD.12345"); //needs the OGD ID if wrong or not found, it throws an error
data.getFeatureById("IDNAMEOGD.12345"); //needs the OGD ID if wrong or not found, it throws an error
data.getObjectsByDistrict(3); // Needs type number -> Only valid districts (1-23)
