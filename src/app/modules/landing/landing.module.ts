import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
