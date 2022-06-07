import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ], 
  exports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
        ngModule: SharedModule,
        providers: []
    };
  }
}
