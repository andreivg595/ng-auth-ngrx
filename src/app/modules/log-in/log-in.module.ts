import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    LogInRoutingModule,
    SharedModule
  ]
})
export class LogInModule { }
