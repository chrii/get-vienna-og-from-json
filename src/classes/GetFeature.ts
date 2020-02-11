export interface IJSONGetFeature {
  type: string;
  totalFeatures: number;
  features: any[];
}

export interface IFeatureObject {
  tpye: string;
  id: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  geometry_name: string;
  properties: {};
}

// Structure of the properties
export interface IPropertyObject {
  OBJECTID: number;
  ADRESSE: string;
  BEZIRK: number;
  STOCK: string | null;
  INFO: string | null;
  HINWEIS: string;
  SE_ANNO_CAD_DATA: any;
}

// Structure of the coords
export interface ICoordinates {
  type: string;
  coordinates: [number, number];
}

export class GetFeature {
  jsonData: IJSONGetFeature;

  constructor(jsonData: IJSONGetFeature) {
    this.jsonData = jsonData;
  }

  protected unclampId(id: string): [string, number] {
    const split = id.split(".");
    if (split.length !== 2) {
      throw new Error("[Declamp] Whoops, this is no proper ID String");
    } else {
      return [split[0], parseInt(split[1])];
    }
  }

  getAllFeatures(): IPropertyObject[] {
    const props = this.jsonData.features.map(
      ({ properties }): IPropertyObject => {
        return properties;
      }
    );
    return props;
  }

  getFeatureById(id: string): IFeatureObject {
    const feature = this.jsonData.features.filter(item => {
      return item.id === id;
    });
    const featureOutput: IFeatureObject = feature[0];
    return featureOutput;
  }

  getCoordinatesById(id: string): [number, number] {
    const feature = this.getFeatureById(id);

    return feature.geometry.coordinates;
  }

  getAllIds(): string[] {
    const mappedIDs = this.jsonData.features.map((item: any) => item.id);
    return mappedIDs;
  }

  getUnclampedIds(): number[] {
    const mappedIDs = this.jsonData.features.map(
      (item: any) => this.unclampId(item.id)[1]
    );
    return mappedIDs;
  }

  getObjectsByDistrict(dist: number): IFeatureObject[] {
    if (dist > 23 || dist < 0) {
      throw new Error("Whoops, this is no district of vienna");
    }
    const feature = this.jsonData.features.filter((item: any) => {
      const unclamped = item.properties.ADRESSE.split(".");
      const district = parseInt(unclamped[0]);
      return district === dist;
    });
    return feature;
  }
}
