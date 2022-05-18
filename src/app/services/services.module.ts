import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { DescriptionComponent } from './description/description.component';
import { ListComponent } from './list/list.component';
import { BookingsComponent } from './bookings/bookings.component';

@NgModule({
  declarations: [
    ServicesComponent,
    DescriptionComponent,
    ListComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
