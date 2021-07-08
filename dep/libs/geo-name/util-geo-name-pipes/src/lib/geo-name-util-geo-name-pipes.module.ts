import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoNameProvincePipe } from './geo-name-province-pipe/geo-name-province.pipe';

const PIPES = [GeoNameProvincePipe];

@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  providers: PIPES,
  exports: PIPES
})
export class GeoNameUtilGeoNamePipesModule {}
