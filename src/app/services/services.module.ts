import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { SubservicesComponent } from './subservices/subservices.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    ServicesComponent,
    SubservicesComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
