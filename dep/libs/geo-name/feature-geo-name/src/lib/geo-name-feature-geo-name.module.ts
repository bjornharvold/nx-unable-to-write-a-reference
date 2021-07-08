import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoNameUtilGeoNamePipesModule } from '@dep/geo-name/util-geo-name-pipes';


@NgModule({
  imports: [
    CommonModule,
    GeoNameUtilGeoNamePipesModule
  ]
})
export class GeoNameFeatureGeoNameModule {}
