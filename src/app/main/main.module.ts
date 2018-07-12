import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { HotelsComponent } from './hotels/hotels.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    CommonModule,
    RoutingModule,
    NotFoundComponent,
    HotelsComponent
  ],
  declarations: [NotFoundComponent, HotelsComponent]
})
export class MainModule {
}
