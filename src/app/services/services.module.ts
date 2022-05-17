import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { DescriptionComponent } from './description/description.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ServicesComponent,
    DescriptionComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
