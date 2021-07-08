/*
 * Copyright (c) 2021. Traveliko PTE.LTD. All rights Reserved.
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * For times when the cl-image tag from cloudinary doesn't work; e.g. CSS background image
 */
@Pipe({
  name: 'geoNameProvincePipe',
})
export class GeoNameProvincePipe implements PipeTransform {
  transform(geo: any, args?: Array<any>): string {
    let result = '';

    if (geo.admin1Code != null) {
      result = geo.admin1Code;
    }

    if (geo.subCountry != null) {
      if (geo.subCountry.asciiName != null) {
        result += ' - ' + geo.subCountry.asciiName;
      } else if (geo.subCountry.name != null) {
        result += ' - ' + geo.subCountry.name;
      }
    }

    return result;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }
}
